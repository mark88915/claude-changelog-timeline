<script setup>
defineProps({
  links: { type: Array, default: () => [] }
})

function isPlaceholder(href) {
  return !href || href === '#'
}
</script>

<template>
  <div v-if="links && links.length" class="link-row">
    <template v-for="(l, i) in links" :key="i">
      <!-- Real link: opens in new tab, stops propagation -->
      <a
        v-if="!isPlaceholder(l.href)"
        class="link-chip"
        :href="l.href"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
      >
        <!-- GitHub icon -->
        <svg v-if="l.kind === 'gh'" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.33.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z"/></svg>
        <!-- Doc icon -->
        <svg v-if="l.kind === 'doc'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
        <!-- Download icon -->
        <svg v-if="l.kind === 'dl'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
        {{ l.label }}
      </a>
      <!-- Placeholder link: rendered as non-clickable span -->
      <span
        v-else
        class="link-chip link-chip-placeholder"
        @click.stop
      >
        <!-- Doc icon for placeholder -->
        <svg v-if="l.kind === 'doc'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
        {{ l.label }}
      </span>
    </template>
  </div>
</template>
