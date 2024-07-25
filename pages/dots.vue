<template>
  <div class="container" @click="addDot">
    <div
      class="dot"
      v-for="(dot, index) in dots"
      :key="dot"
      :style="{
        top: `${dot.y}px`,
        left: `${dot.x}px`,
        cursor: isCursorPointer ? 'pointer' : 'default',
      }"
      @click="deleteDot(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isCursorPointer = ref(false);
const dots = ref([]);

const addDot = (e) => {
  const newDot = {
    x: e.offsetX,
    y: e.offsetY,
  };
  // check positions of dots
  if (!dots.value.some((dot) => dot.x === newDot.x && dot.y === newDot.y)) {
    dots.value.push(newDot);
    isCursorPointer.value = !isCursorPointer.value;
  }
};

const deleteDot = (index) => {
  dots.value.splice(index, 1);
};
</script>

<style scoped>
.container {
  height: 100vh;
  background-color: aqua;
  position: relative;
}
.dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
}
</style>
