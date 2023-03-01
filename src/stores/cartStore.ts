import { defineStore } from "pinia";
import { reactive } from "vue";

interface State {
  name: string;
  price: number;
  count: number;
  total: number;
}

export const useCartStore = defineStore("cartStore", () => {
  const state: State = reactive({
    name: "",
    price: 0,
    count: 0,
    total: 0,
  });

  function addItem(count: number) {
    state.name = "Fall Limited Edition Sneakers";
    state.price = 125;
    state.count = count;
    state.total = state.price * count;
  }

  function deleteItem() {
    state.name = "";
    state.count = 0;
    state.price = 0;
    state.total = 0;
  }

  return { state, addItem, deleteItem };
});
