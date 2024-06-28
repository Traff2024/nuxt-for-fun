<template>
  <div>
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="product.title"></Meta>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
// const uri = "https://fakestoreapi.com/products/" + id;

// const { data: product } = await useFetch(uri);

// if (!product.value) {
//   throw createError({ statusCode: 404, statusMessage: "Product not found" });
// }
</script>

<style lang="scss" scoped></style>
