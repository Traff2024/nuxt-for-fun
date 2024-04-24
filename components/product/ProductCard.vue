<template>
  <div class="product-card text-center">
    <Nuxt-link :to="`/products/${product.id}`">
      <img :src="product.image" class="product-card__img" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <p class="btn-buy my-4">View details</p>
    </Nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
