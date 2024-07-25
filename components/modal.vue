<template>
  <div style="border: 1px solid red">
    <button @click="toggleModal">
      {{ openOrCloseModal }}
    </button>
    <div class="notification" v-if="notification">
      <div>{{ info }}</div>
      <button @click="toggleModal">Close modal</button>
    </div>
    <div>
      <input type="text" v-model="modelValue" />
    </div>
  </div>
</template>

<script setup>
const color = "green";
const props = defineProps({
  info: {
    type: String,
    default: "notification title from props",
  },
});

const modelValue = defineModel("title");
// if we have params in relative element if no defineModel()

const notification = ref(true);
const toggleModal = () => {
  notification.value = !notification.value;
};

const openOrCloseModal = computed(() => {
  return notification.value ? "Close" : "Open";
});
</script>

<style lang="scss" scoped>
.notification {
  border: 5px solid red;
  background-color: aqua;
  border-radius: 20px;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  color: white;
  background-color: v-bind(color);
  width: 120px;
  height: 40px;
  border-radius: 20px;
}
</style>
