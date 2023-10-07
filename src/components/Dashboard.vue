<template>
  <div class="dashboard">
    <h1>Admin Dashboard</h1>
    <div class="d-flex gap-3">
      <div class="metric">
        <h3>Total Products</h3>
        <p>250</p>
      </div>
      <div class="metric">
        <h3>Total Sales Orders</h3>
        <p>500</p>
      </div>
      <div class="metric">
        <h3>Total Customers</h3>
        <p>1000</p>
      </div>
      <div class="metric">
        <h3>Total Purchase Orders</h3>
        <p>300</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.dashboard {
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
}

.dashboard h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.metric {
  background-color: #4caf50;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
}

.metric h2 {
  font-size: 36px;
  margin: 0;
}

.metric p {
  font-size: 18px;
  margin: 0;
}
</style>
