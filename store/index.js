import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("basicStore", () => {
  const users = ref([]);
  const items = ref([
    {
      id: 1,
      name: "Erik",
    },
    {
      id: 2,
      name: "Erik2",
    },
    {
      id: 3,
      name: "Erik3",
    },
  ]);
  const name = ref("Eduardo");
  const testAsyncFunc = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    users.value = data.data;
  };

  //   const test = ref("TEST DZIAŁA");
  // arrow function recommended for full type inference
  // state: () => {
  //   return {
  //     // all these properties will have their type inferred automatically
  //     count: 0,
  //     name: "Eduardo",
  //     isAdmin: true,
  //     items: [
  //       {
  //         id: 1,
  //         name: "Erik",
  //       },
  //       {
  //         id: 2,
  //         name: "Erik2",
  //       },
  //     ],
  //     hasChanged: true,
  //   };
  // },
  return { name, users, items, testAsyncFunc };
});
