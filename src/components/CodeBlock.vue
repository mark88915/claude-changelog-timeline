<script setup>
import { ref } from 'vue'

const props = defineProps({
  example: { type: Object, required: true }
})

const copied = ref(false)

function copy() {
  const text = props.example.code.map(t => t.v).join('')
  navigator.clipboard?.writeText(text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1600)
}
</script>

<template>
  <div class="code-block">
    <div class="code-block-head">
      <span class="code-block-lang">{{ example.caption || example.lang }}</span>
      <button class="code-copy-btn" @click.stop="copy">
        <svg v-if="copied" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <svg v-else width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        {{ copied ? '已複製' : '複製' }}
      </button>
    </div>
    <pre><code><span
      v-for="(tok, i) in example.code"
      :key="i"
      :class="tok.t ? 'tok-' + tok.t : ''"
    >{{ tok.v }}</span></code></pre>
  </div>
</template>
