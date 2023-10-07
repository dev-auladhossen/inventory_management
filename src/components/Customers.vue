<template>
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
      <template #item-action="{ id, firstName, image }">
        <button
          class="btn btn-success btn-sm"
          @click="showCustomer(id, firstName, image)"
        >
          View
        </button>
      </template>
      <template #item-image="{ image }">
        <img height="20" width="20" :src="image" />
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { customers } from "../data/customers";
import Swal from "sweetalert2";

const showCustomer = (customerId, name, image) => {
  console.log("name", name);
  Swal.fire({
    title: "Customer Details",
    html: `<img width="50" height="50" src="${image}" alt="Image"> <div>This is <strong>${name}</strong></div>`,
    confirmButtonText: "CLOSE",
  });
};

const items = ref(customers);

const searchField = ["firstName", "email", "username", "phone"];
const searchValue = ref();

const headers = [
  { text: "ID", value: "id" },
  { text: "NAME", value: "firstName" },
  { text: "AVATAR", value: "image" },
  { text: "EMAIL", value: "email" },
  { text: "PHONE", value: "phone" },
  { text: "GENDER", value: "gender" },
  { text: "BLOOD GROUP", value: "bloodGroup" },
  { text: "USERNAME", value: "username" },
  { text: "PASSWORD", value: "password" },
  { text: "ACTION", value: "action" },
];
</script>
