<template>
  <div class="stats-grid">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="stat-card"
      :style="{ '--accent': stat.color }"
    >
      <i :class="stat.icon" class="stat-icon" />
      <div class="stat-value">
        <span>{{ displayValues[stat.label] }}</span>
        <span class="stat-suffix">{{ stat.suffix }}</span>
      </div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    default: () => [
      { label: 'Projects Completed', value: 120, suffix: '+', icon: 'fas fa-project-diagram', color: '#2142B1' },
      { label: 'Faster Annotation', value: 15, suffix: '×', icon: 'fas fa-rocket', color: '#10b981' },
      { label: 'Accuracy Rate', value: 98, suffix: '%', icon: 'fas fa-bullseye', color: '#f59e0b' },
      { label: 'Happy Clients', value: 50, suffix: '+', icon: 'fas fa-smile', color: '#ef4444' },
    ],
  },
})

const displayValues = ref({})

props.stats.forEach(s => {
  displayValues.value[s.label] = 0
})

function animateCount(stat) {
  const duration = 2000
  const start = performance.now()
  const end = stat.value

  function step(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    displayValues.value[stat.label] = Math.round(ease * end)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // Intersection Observer to trigger animation when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          props.stats.forEach(animateCount)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.4 }
  )
  const el = document.querySelector('.stats-grid')
  if (el) observer.observe(el)
})
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border-top: 4px solid var(--accent, #2142B1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.stat-icon {
  font-size: 2rem;
  color: var(--accent, #2142B1);
  margin-bottom: 0.75rem;
  display: block;
}

.stat-value {
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: #14183E;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-suffix {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent, #2142B1);
}

.stat-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
