<template>
  <div class="product-card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" class="mx-auto product-card__item" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn-buy flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to card</span>
        </button>
      </div>
    </div>
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

<style lang="scss" scoped>
.product-card__item {
  max-height: 400px;
}
</style>
