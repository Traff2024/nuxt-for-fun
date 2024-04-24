<template>
  <div class="error-page mt-7 max-w-xl mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-7xl">Ooops...</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn-buy my-7 px-8" @click="handleClearError">
      Go home...
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});

const handleClearError = () =>
  clearError({
    redirect: "/",
  });
</script>

<style lang="scss" scoped></style>
