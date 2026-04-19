<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CATEGORIES } from '../data/changelog.js'

const props = defineProps({
  search: { type: String, default: '' },
  filter: { type: Array, default: () => [] },
  activeProduct: { type: String, default: 'all' },
  counts: { type: Object, default: () => ({}) },
  currentMonth: { type: String, default: null }
})

const emit = defineEmits(['update:search', 'toggleFilter', 'clearFilter', 'update:activeProduct'])

const filterOpen = ref(false)
const filterWrapRef = ref(null)

function handleClickOutside(e) {
  if (filterWrapRef.value && !filterWrapRef.value.contains(e.target)) {
    filterOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

const categoryEntries = Object.entries(CATEGORIES)

function getCatColor(className) {
  return `var(--${className})`
}

const productOptions = [
  { value: 'all', label: '全部' },
  { value: 'claude', label: 'Claude' },
  { value: 'claude-code', label: 'Claude Code' },
]
</script>

<template>
  <header class="app-header">
    <div class="app-header-inner">
      <div class="brand">
        <div class="brand-mark">cc</div>
        <div class="brand-text">
          <span class="brand-name">claude</span>
          <span class="brand-title">更新日誌</span>
        </div>
      </div>

      <div v-if="currentMonth" class="month-pill">
        <span class="month-pill-dot"></span>
        <span>viewing</span>
        <span class="month-pill-label">{{ currentMonth }}</span>
      </div>

      <div class="header-spacer"></div>

      <!-- Product Toggle -->
      <div class="product-toggle">
        <button
          v-for="opt in productOptions"
          :key="opt.value"
          :class="['product-toggle-btn', { active: activeProduct === opt.value }]"
          @click="emit('update:activeProduct', opt.value)"
        >
          {{ opt.label }}
        </button>
      </div>

      <!-- Search -->
      <div class="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input
          type="text"
          placeholder="搜尋指令或關鍵字..."
          :value="search"
          @input="emit('update:search', $event.target.value)"
        />
        <kbd v-if="!search" class="search-kbd"><span class="kbd-symbol">⌘</span>K</kbd>
      </div>

      <!-- Filter -->
      <div class="filter-wrap" ref="filterWrapRef">
        <button
          :class="['filter-btn', { active: filter.length > 0 }]"
          @click="filterOpen = !filterOpen"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
          <span>篩選</span>
          <span v-if="filter.length > 0" class="filter-badge">{{ filter.length }}</span>
        </button>
        <div v-if="filterOpen" class="filter-menu">
          <div class="filter-menu-title">類別</div>
          <label
            v-for="[key, c] in categoryEntries"
            :key="key"
            class="filter-option"
          >
            <input
              type="checkbox"
              :checked="filter.includes(key)"
              @change="emit('toggleFilter', key)"
            />
            <span class="filter-dot" :style="{ background: getCatColor(c.className) }"></span>
            <span class="filter-option-label">{{ c.label }}</span>
            <span class="filter-option-count">{{ counts[key] || 0 }}</span>
          </label>
          <div v-if="filter.length > 0" class="filter-menu-footer">
            <button class="filter-clear" @click="emit('clearFilter'); filterOpen = false">清除全部</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
