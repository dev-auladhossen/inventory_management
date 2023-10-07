<template>
  <div>
    <div class="product">
      <div class="content">
        <Layout>
          <Dashboard />
        </Layout>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dashboard from "../components/Dashboard.vue";
import Layout from "../components/Layout.vue";
</script>

<style scoped>
.product {
  display: flex;
}
.content {
  flex: 4;
}
</style>
