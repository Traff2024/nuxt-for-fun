<template>
  <div class="product-page">
    <h2>Products page</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <!-- <ProductCard
          :product="product"
          @emit-delete-selected-items="deleteSelectedItems"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=10"
);

useHead({
  title: "Product page",
  meta: [{ name: "description", content: "Product Page with nuxt" }],
});

const deleteSelectedItems = (selectedItem) => {
  console.log("selectedItem", selectedItem);
  products.value = products.value.filter((item) => item.id !== selectedItem.id);
};
</script>

<style lang="scss" scoped></style>
