<script setup>
import CodeBlock from './CodeBlock.vue'
import LinkRow from './LinkRow.vue'

defineProps({
  body: { type: Object, required: true }
})
</script>

<template>
  <!-- Command body -->
  <template v-if="body.kind === 'command'">
    <p class="body-text">{{ body.description }}</p>
    <div class="section-label">語法</div>
    <div class="code-block">
      <div class="code-block-head"><span class="code-block-lang">shell</span></div>
      <pre><code><span class="tok-cmd">{{ body.syntax.split(' ')[0] }}</span> <span class="tok-com">{{ body.syntax.split(' ').slice(1).join(' ') }}</span></code></pre>
    </div>
    <div class="section-label">參數</div>
    <div class="param-list">
      <div v-for="(p, i) in body.params" :key="i" class="param-row">
        <div class="param-name">
          {{ p.name }}
          <span v-if="p.required" class="param-required">必填</span>
        </div>
        <div class="param-desc">{{ p.desc }}</div>
      </div>
    </div>
    <div class="section-label">範例</div>
    <CodeBlock v-for="(ex, i) in body.examples" :key="i" :example="ex" />
    <LinkRow :links="body.links" />
  </template>

  <!-- Feature body -->
  <template v-else-if="body.kind === 'feature'">
    <p class="body-text">{{ body.description }}</p>
    <template v-if="body.placeholderImage">
      <div class="section-label">預覽</div>
      <div class="image-placeholder">
        <div class="image-placeholder-label">[ 截圖: {{ body.placeholderImage }} ]</div>
      </div>
    </template>
    <template v-if="body.steps">
      <div class="section-label">步驟</div>
      <ol class="steps">
        <li v-for="(s, i) in body.steps" :key="i">
          <div><strong>{{ s.title }}</strong>{{ s.text }}</div>
        </li>
      </ol>
    </template>
    <CodeBlock v-for="(ex, i) in (body.examples || [])" :key="i" :example="ex" />
    <LinkRow :links="body.links" />
  </template>

  <!-- Perf body -->
  <template v-else-if="body.kind === 'perf'">
    <p class="body-text">{{ body.description }}</p>
    <div class="section-label">修正前 &rarr; 修正後</div>
    <div class="metrics">
      <div v-for="(m, i) in body.metrics" :key="i" class="metric">
        <div class="metric-label">{{ m.label }}</div>
        <div :class="['metric-value', m.direction || '']">{{ m.value }}</div>
        <div class="metric-delta">{{ m.delta }}</div>
      </div>
    </div>
    <p v-if="body.description2" class="body-text">{{ body.description2 }}</p>
    <LinkRow :links="body.links" />
  </template>

  <!-- Bug body -->
  <template v-else-if="body.kind === 'bug'">
    <div class="section-label">問題</div>
    <p class="body-text">{{ body.problem }}</p>
    <div class="section-label">根因</div>
    <p class="body-text">{{ body.rootCause }}</p>
    <div class="section-label">修正</div>
    <p class="body-text">{{ body.fix }}</p>
    <template v-if="body.diff">
      <div class="diff-grid">
        <div class="diff-col diff-before">
          <div class="diff-col-head">修正前</div>
          <pre><span v-for="(t, i) in body.diff.before" :key="i" :class="t.t ? 'tok-' + t.t : ''">{{ t.v }}</span></pre>
        </div>
        <div class="diff-col diff-after">
          <div class="diff-col-head">修正後</div>
          <pre><span v-for="(t, i) in body.diff.after" :key="i" :class="t.t ? 'tok-' + t.t : ''">{{ t.v }}</span></pre>
        </div>
      </div>
    </template>
    <LinkRow :links="body.links" />
  </template>

  <!-- Breaking body -->
  <template v-else-if="body.kind === 'breaking'">
    <p class="body-text">{{ body.description }}</p>
    <div v-if="body.migration" class="migration-note">
      <strong>遷移指南</strong>
      {{ body.migration.text }}
    </div>
    <template v-if="body.diff">
      <div class="diff-grid">
        <div class="diff-col diff-before">
          <div class="diff-col-head">修正前</div>
          <pre><span v-for="(t, i) in body.diff.before" :key="i" :class="t.t ? 'tok-' + t.t : ''">{{ t.v }}</span></pre>
        </div>
        <div class="diff-col diff-after">
          <div class="diff-col-head">修正後</div>
          <pre><span v-for="(t, i) in body.diff.after" :key="i" :class="t.t ? 'tok-' + t.t : ''">{{ t.v }}</span></pre>
        </div>
      </div>
    </template>
    <LinkRow :links="body.links" />
  </template>

  <!-- Default -->
  <template v-else>
    <p class="body-text">{{ body.description }}</p>
  </template>
</template>
