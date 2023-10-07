<template>
  <div>
    <div>
      <input
        placeholder="Search..."
        class="form-control mb-2 w-auto form-control-sm"
        type="text"
        v-model="searchValue"
      />
      <EasyDataTable
        buttons-pagination
        alternating
        :headers="headers"
        :items="items"
        :rows-per-page="10"
        :search-field="searchField"
        :search-value="searchValue"
      >
        <template #item-action="{ id }">
          <button class="btn btn-success btn-sm" @click="itemView(id)">
            View Details
          </button>
        </template>
      </EasyDataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { orders } from "../data/order";

const searchField = ["dateoforder", "contactperson", "name"];
const searchValue = ref();

const headers = [
  { text: "DATE", value: "dateoforder" },
  { text: "CUSTOMER", value: "contactperson" },
  { text: "PRODUCT", value: "name" },
  { text: "PRICE", value: "price" },
  { text: "PHONE", value: "phone" },
];

const items = ref(orders);
</script>
