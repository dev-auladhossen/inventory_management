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
import { products } from "../data/product";
import router from "../router/router";

const searchField = ["title", "price", "stock"];
const searchValue = ref();

const headers = [
  { text: "TITLE", value: "title" },
  { text: "UNIT PRICE", value: "price" },
  { text: "NUMBER OF ITEMS", value: "stock" },
  { text: "BRAND", value: "brand" },
  { text: "CATEGORY", value: "category" },
  { text: "DISCOUNT", value: "discountPercentage" },
  { text: "ACTION", value: "action" },
];

const items = ref(products);

const itemView = (productId) => {
  router.push(`/product/${productId}`);
};
</script>
