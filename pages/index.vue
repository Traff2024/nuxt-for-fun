<template>
  <div>
    <h2>Home Page</h2>
    <input type="text" placeholder="test local storage" v-model="localny" />
    storage data {{ localny }}
    <input v-model="query" placeholder="Search for a GitHub user" />
    query {{ query }}
    <input type="text" placeholder="Type your city" v-model="city" />
    dla modalki city {{ city }}
    <modal v-model:title="city"></modal>
    <!-- we can use v-model without params -->
    <!-- https://blog.logrocket.com/integrate-web3-into-vue/#what-web3 -->
    <!-- chechStatusWallet {{ chechStatusWallet }} -->

    <!-- <button v-if="!connected" @click="connectOrDisconectWallet">
      {{ chechStatusWallet }}
    </button> -->
    <!-- <button v-if="!connected" @click="connectOrDisconectWallet">
      Connected wallet
    </button> -->
    <!-- <button v-if="connected" @click="disconnectWallet">
      Disconneect wallet
    </button> -->
    <!-- <button v-if="connected">Call contract</button> -->
    <!-- usersInfo: {{ usersInfo }} items {{ items }} -->
    <button @click="changeState" :class="{ yes: activeOrNot }">
      Button is active: {{ visibleOrHidden }}
    </button>
    <ul>
      <li v-for="item in users" :key="item.id" @click="seeMore(item)">
        {{ item.first_name }}
        <img :src="item.avatar" />
      </li>
      Tut bude nowyj array
      <div v-for="(item, index) in newArray" :key="item.id">
        <span @click="deleteItem(index)">{{ item }}</span>
      </div>
    </ul>
    {{ contractResult }}
    name {{ name }}
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
  tra {{ tra }}
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/index";

// definePageMeta({
//   layout: "test",
// });

const runtimeConfig = useRuntimeConfig();
const tra = runtimeConfig.public.salam;

const newArray = ref([]);

console.log("API base URL test:", tra);

const info = ref("Info here");

const store = useStore();
const { testAsyncFunc } = store;
const { users, items, name } = storeToRefs(store);

const activeOrNot = ref(true);
const visibleOrHidden = computed(() => {
  return activeOrNot.value ? "Yes" : "No";
});

const changeState = () => {
  activeOrNot.value = !activeOrNot.value;
};

const connected = ref(false);
const contractResult = ref();
const query = ref("");
const city = ref();

const localny = ref("");
watch(localny, (newValue) => {
  localStorage.setItem("test", newValue);
});

const updateData = (e) => {
  const data = e.target.value;
  if (data) {
    localStorage.setItem("test", data || " ");
    // reactiveStorageData.value = data;
  }
};

const seeMore = (item) => {
  newArray.value.push(item);
};

const deleteItem = (index) => {
  newArray.value.splice(index, 1); //with index

  // newArray.value = newArray.value.filter((item) => item.id !== id);
};

// const chechStatusWallet = computed(() => {
//   const ethereum = window.ethereum;
//   return ethereum.value ? "Connect" : "Disconect";
// });

const connectOrDisconectWallet = () => {
  const ethereum = window.ethereum;

  console.log("test", test);

  if (ethereum) {
    console.log("ethereum", ethereum);
    ethereum.request({ method: "eth_requestAccounts" }).then(() => {
      connected.value = true;
    });
  }
  // else {
  //   console.log("ethereum", ethereum);
  //   ethereum.request({ method: "eth_requestAccounts" }).then(() => {
  //     connected.value = false;
  //   });
  // }
};

const disconnectWallet = () => {
  const ethereum = window.ethereum;
  console.log("disconect");
};

watch(city, (newQuery, oldQuery) => {
  if (newQuery) {
    console.log("city newQuery", newQuery, "city oldQuery", oldQuery);
  }
});

onMounted(() => {
  console.log(runtimeConfig.apiSecret);
  testAsyncFunc();
  localny.value = localStorage.getItem("test") || "";
});
</script>

<style lang="scss" scoped></style>
