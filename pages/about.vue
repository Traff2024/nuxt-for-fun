<template>
  <div>
    <h2>About Page test</h2>
    {{ data }}
    <p></p>
    <input type="text" v-model="inputValue" :maxlength="maxLength" />
    {{ countLength }}/{{ maxLength }}

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
import { computed } from "vue";

const inputValue = ref("");
const maxLength = ref(200);

const countLength = computed(() =>
  // let length = props.note.length
  // let name = length > 1 ? 'charakter' : 'charakters'
  // return '${ length } ${ name }'
  inputValue.value.length <= maxLength.value
    ? inputValue.value.length
    : maxLength.value
);
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

// const deleteNotes = (id) => {
//   notes.value = notes.value.filter(note => {
//     return note.id !== id
//   })
// }

useHead({
  title: "About page",
});
</script>

<style lang="scss" scoped></style>
