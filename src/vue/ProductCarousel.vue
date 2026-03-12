<template>
  <div class="product-carousel">
    <!-- Track -->
    <div class="carousel-track" :style="trackStyle">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
      >
        <div class="slide-img-wrap">
          <img :src="slide.img" :alt="slide.title" />
          <div class="slide-badge">{{ slide.tag }}</div>
        </div>
        <div class="slide-content">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
          <router-link v-if="slide.link" :to="slide.link" class="slide-btn">
            Try It <span class="arrow">→</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="carousel-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="['dot', { active: current === i }]"
        @click="goTo(i)"
        :aria-label="`Slide ${i + 1}`"
      />
    </div>

    <!-- Prev / Next -->
    <button class="carousel-nav prev" @click="prev" aria-label="Previous">&#8592;</button>
    <button class="carousel-nav next" @click="next" aria-label="Next">&#8594;</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => [
      {
        img: '/img/anno.jpg',
        tag: 'Annotation',
        title: 'Object Annotation',
        description: 'Label objects in images up to 15× faster with auto-annotation tools and SAM models.',
        link: '/annotation',
      },
      {
        img: '/img/project-3.png',
        tag: 'Counting',
        title: 'Object Counting',
        description: 'AI-powered detection and counting for inventory, agriculture, and manufacturing.',
        link: '/counter',
      },
      {
        img: '/img/project-1.png',
        tag: 'Realtime',
        title: 'Realtime Applications',
        description: 'Process video streams in real-time with high-accuracy object detection pipelines.',
        link: '/realtime',
      },
    ],
  },
})

const current = ref(0)
let timer = null

const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}))

function goTo(i) {
  current.value = i
}
function next() {
  current.value = (current.value + 1) % props.slides.length
}
function prev() {
  current.value = (current.value - 1 + props.slides.length) % props.slides.length
}

onMounted(() => {
  timer = setInterval(next, 5000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.product-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #f8faff;
}

.carousel-track {
  display: flex;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 3rem;
}

@media (max-width: 640px) {
  .carousel-slide {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
  }
}

.slide-img-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.slide-img-wrap img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.slide-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #2142B1;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
}

.slide-content h3 {
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #14183E;
  margin-bottom: 1rem;
}

.slide-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.slide-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2142B1;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.6rem 1.5rem;
  border-radius: 40px;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.2s ease;
}
.slide-btn:hover {
  background: #1a35a0;
  transform: translateY(-1px);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-bottom: 1.25rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  padding: 0;
}
.dot.active {
  background: #2142B1;
  transform: scale(1.4);
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.1rem;
  color: #2142B1;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  z-index: 5;
}
.carousel-nav:hover {
  background: #2142B1;
  color: white;
}
.carousel-nav.prev { left: 12px; }
.carousel-nav.next { right: 12px; }
</style>
