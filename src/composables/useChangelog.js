import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { CHANGELOG, CATEGORIES } from '../data/changelog.js'

export function formatDate(iso) {
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function monthKey(iso) {
  const d = new Date(iso + "T00:00:00")
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
}

export function monthLabel(iso) {
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

export function highlightText(text, q) {
  if (!q) return text
  const idx = text.toLowerCase().indexOf(q.toLowerCase())
  if (idx === -1) return text
  return (
    text.slice(0, idx) +
    '<mark>' + text.slice(idx, idx + q.length) + '</mark>' +
    text.slice(idx + q.length)
  )
}

export function useChangelog() {
  const search = ref('')
  const filter = ref([])
  const activeProduct = ref('all')
  const expanded = ref([])
  const currentMonth = ref(null)
  const monthRefs = ref({})

  // Load persisted expanded state
  onMounted(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('cc_changelog_expanded') || '[]')
      expanded.value = saved
    } catch {
      expanded.value = []
    }
  })

  // Persist expanded
  watch(expanded, (val) => {
    localStorage.setItem('cc_changelog_expanded', JSON.stringify(val))
  }, { deep: true })

  const toggleExpanded = (id) => {
    const idx = expanded.value.indexOf(id)
    if (idx >= 0) {
      expanded.value.splice(idx, 1)
    } else {
      expanded.value.push(id)
    }
  }

  const toggleFilter = (cat) => {
    const idx = filter.value.indexOf(cat)
    if (idx >= 0) {
      filter.value.splice(idx, 1)
    } else {
      filter.value.push(cat)
    }
  }

  const clearFilter = () => {
    filter.value = []
  }

  const setActiveProduct = (product) => {
    activeProduct.value = product
  }

  // Counts per category (respecting product filter)
  const counts = computed(() => {
    const c = {}
    CHANGELOG.forEach(e => {
      if (activeProduct.value !== 'all' && e.product !== activeProduct.value) return
      c[e.category] = (c[e.category] || 0) + 1
    })
    return c
  })

  // Match logic
  const matches = (entry) => {
    // Product filter
    if (activeProduct.value !== 'all' && entry.product !== activeProduct.value) return false
    // Category filter
    if (filter.value.length > 0 && !filter.value.includes(entry.category)) return false
    // Search filter
    if (search.value.trim()) {
      const q = search.value.trim().toLowerCase()
      const hay = [
        entry.title, entry.summary, entry.version, entry.area,
        JSON.stringify(entry.body || {})
      ].join(' ').toLowerCase()
      if (!hay.includes(q)) return false
    }
    return true
  }

  // Group by month
  const grouped = computed(() => {
    const map = new Map()
    CHANGELOG.forEach(e => {
      const k = monthKey(e.date)
      if (!map.has(k)) map.set(k, { key: k, label: monthLabel(e.date), entries: [] })
      map.get(k).entries.push(e)
    })
    return Array.from(map.values())
  })

  // Visible count by month
  const visibleCountByMonth = computed(() => {
    const m = {}
    grouped.value.forEach(g => {
      m[g.key] = g.entries.filter(matches).length
    })
    return m
  })

  const totalVisible = computed(() =>
    Object.values(visibleCountByMonth.value).reduce((a, b) => a + b, 0)
  )

  const totalAll = CHANGELOG.length

  // Current month key (first visible)
  const currentMonthKey = computed(() =>
    grouped.value.find(g => visibleCountByMonth.value[g.key] > 0)?.key
  )

  // Scroll-based month detection
  const onScroll = () => {
    const offset = 130
    let active = null
    for (const g of grouped.value) {
      if (visibleCountByMonth.value[g.key] === 0) continue
      const el = monthRefs.value[g.key]
      if (!el) continue
      const r = el.getBoundingClientRect()
      if (r.top <= offset) active = g.label
    }
    if (active) {
      currentMonth.value = active
    } else {
      const first = grouped.value.find(g => visibleCountByMonth.value[g.key] > 0)
      if (first) currentMonth.value = first.label
    }
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    search,
    filter,
    activeProduct,
    expanded,
    currentMonth,
    monthRefs,
    toggleExpanded,
    toggleFilter,
    clearFilter,
    setActiveProduct,
    counts,
    matches,
    grouped,
    visibleCountByMonth,
    totalVisible,
    totalAll,
    currentMonthKey,
    CATEGORIES
  }
}
