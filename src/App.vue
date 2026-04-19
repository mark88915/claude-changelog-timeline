<script setup>
import { useChangelog } from './composables/useChangelog.js'
import AppHeader from './components/AppHeader.vue'
import EntryCard from './components/EntryCard.vue'

const {
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
} = useChangelog()

function setMonthRef(key, el) {
  if (el) monthRefs.value[key] = el
}

function matchCount(entries) {
  return entries.filter(matches).length
}
</script>

<template>
  <AppHeader
    :search="search"
    :filter="filter"
    :activeProduct="activeProduct"
    :counts="counts"
    :currentMonth="currentMonth"
    @update:search="search = $event"
    @toggleFilter="toggleFilter"
    @clearFilter="clearFilter"
    @update:activeProduct="setActiveProduct"
  />

  <main class="timeline-container">
    <div class="timeline-intro">
      <h1><span class="accent">Claude</span> 最新動態</h1>
      <p>所有已發布的更新，依最新排序。點擊任意項目展開完整細節、指令語法或修正前後對比。</p>
      <div class="timeline-intro-meta">
        <span>共 <strong>{{ totalAll }}</strong> 項更新</span>
        <span v-if="search || filter.length > 0 || activeProduct !== 'all'"><strong>{{ totalVisible }}</strong> 項符合篩選</span>
        <span>最後更新 <strong>Apr 18, 2026</strong></span>
      </div>
    </div>

    <div class="timeline-rail"></div>

    <template v-for="group in grouped" :key="group.key">
      <section
        v-if="visibleCountByMonth[group.key] > 0 || (!search && filter.length === 0 && activeProduct === 'all')"
        :class="['month-section', { current: group.key === currentMonthKey }]"
        :ref="(el) => setMonthRef(group.key, el)"
      >
        <div class="month-marker">
          <div class="month-marker-inner">
            <div class="month-marker-label">{{ group.key }}</div>
            <div class="month-marker-title">{{ group.label }}</div>
            <div class="month-marker-count">
              {{ matchCount(group.entries) }} 項更新
            </div>
          </div>
        </div>
        <EntryCard
          v-for="entry in group.entries"
          :key="entry.id"
          :entry="entry"
          :expanded="expanded.includes(entry.id)"
          :dimmed="!matches(entry) && (!!search || filter.length > 0 || activeProduct !== 'all')"
          :query="search"
          :isCurrent="group.key === currentMonthKey"
          @toggle="toggleExpanded(entry.id)"
        />
      </section>
    </template>

    <div v-if="totalVisible === 0" class="empty-state">
      <h3>沒有符合篩選條件的更新。</h3>
      <p>請嘗試清除搜尋或類別篩選。</p>
    </div>
  </main>

  <footer class="app-footer">
    時間軸結尾 &middot; Claude 更新日誌
  </footer>
</template>
