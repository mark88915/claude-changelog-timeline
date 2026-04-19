<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { CATEGORIES } from '../data/changelog.js'
import { formatDate, highlightText } from '../composables/useChangelog.js'
import EntryBody from './EntryBody.vue'

const props = defineProps({
  entry: { type: Object, required: true },
  expanded: { type: Boolean, default: false },
  dimmed: { type: Boolean, default: false },
  query: { type: String, default: '' },
  isCurrent: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle'])

const wrapRef = ref(null)
const innerRef = ref(null)

const cat = CATEGORIES[props.entry.category]

function measureHeight() {
  const wrap = wrapRef.value
  const inner = innerRef.value
  if (!wrap || !inner) return
  wrap.style.setProperty('--body-h', inner.scrollHeight + 'px')
}

let ro = null

watch(() => props.expanded, async () => {
  await nextTick()
  measureHeight()
})

onMounted(() => {
  measureHeight()
  if (innerRef.value) {
    ro = new ResizeObserver(measureHeight)
    ro.observe(innerRef.value)
  }
  window.addEventListener('resize', measureHeight)
})

onUnmounted(() => {
  if (ro) ro.disconnect()
  window.removeEventListener('resize', measureHeight)
})

function titleHtml() {
  return highlightText(props.entry.title, props.query)
}

function summaryHtml() {
  return highlightText(props.entry.summary, props.query)
}

const productLabel = props.entry.product === 'claude' ? 'Claude' : 'Claude Code'
const productClass = props.entry.product === 'claude' ? 'product-badge-claude' : 'product-badge-code'
</script>

<template>
  <div :class="['entry', { dimmed, 'is-current': isCurrent }]">
    <div class="entry-meta">
      <div class="entry-date">{{ formatDate(entry.date) }}</div>
      <div class="entry-version">{{ entry.version }}</div>
    </div>
    <div class="entry-node">
      <div class="entry-node-dot"></div>
    </div>
    <article :class="['card', { expanded }]" @click="emit('toggle')">
      <div class="card-head">
        <div class="card-head-main">
          <div class="card-badges">
            <span :class="['cat-tag', cat.className]">
              <span class="cat-tag-dot"></span>{{ cat.short }}
            </span>
            <span :class="['product-badge', productClass]">{{ productLabel }}</span>
            <span class="card-area-tag">/{{ entry.area }}</span>
          </div>
          <h3 class="card-title" v-html="titleHtml()"></h3>
          <p class="card-summary" v-html="summaryHtml()"></p>
        </div>
        <div class="card-chevron">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      <div class="card-body-wrap" ref="wrapRef">
        <div class="card-body" ref="innerRef">
          <div class="card-body-inner" @click.stop>
            <EntryBody :body="entry.body" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
