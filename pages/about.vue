<template>
  <div>
    <h2>About Page test</h2>
    {{ data }}
    <p></p>
    <!-- <div>
      <input placeholder="Write your currency" type="text" v-model="currency" />
      <div>{{ currency }}</div>
      <div @click="changesCurrecy(currency)" class="btn-buy">
        Chech {{ currency }} currency
      </div>
      currencyTab: {{ currencyTab }}
    </div> -->
    <!-- <div v-for="currency in data" :key="currency.code">
      {{ currency.code }}
      {{ currency.value }}
    </div> -->
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/currency/allCurrency");

// Dynamic server routes
const { data } = await useFetch("/api/currency/EUR");

// Test write currency for check actual course
// const currency = ref();
// const currencyTab = ref([]);
// const changesCurrecy = async (currency) => {
//   if (currency) {
//     currencyTab.value = await $fetch(`/api/currency/${currency}`);
//     currency = "";
//   }
// };
useHead({
  title: "About page",
});
</script>

<style lang="scss" scoped></style>
