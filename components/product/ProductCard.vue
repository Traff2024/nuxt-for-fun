<template>
  <div class="product-card text-center">
    <Nuxt-link :to="`/products/${product.id}`">
      <img :src="product.image" class="product-card__img" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <p class="btn-buy my-4">View details</p>
      <span @click.prevent="deleteItems(product)">-</span>
    </Nuxt-link>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["emitDeleteSelectedItems"]);

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});

const deleteItems = (product) => {
  emit("emitDeleteSelectedItems", product);
};
</script>

<style lang="scss" scoped></style>
