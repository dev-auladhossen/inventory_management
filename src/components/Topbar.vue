<template>
  <header class="topbar">
    <button @click="toggleSidebar()"></button>
    <div class="brand">
      <h2>Inventory Management</h2>
    </div>
    <div class="user-info"></div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits();

const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>

<style scoped>
.topbar {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand h1 {
  margin: 0;
}
</style>
