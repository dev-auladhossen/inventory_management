<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/stock">Stock</router-link></li>
        <li><router-link to="/salesorder">Sales Orders</router-link></li>
        <li><router-link to="/customers">Customers</router-link></li>
        <li><router-link to="/reportsanalytics">Reports</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  flex: 1;
  width: 250px;
  background-color: #333;
  color: #fff;
  height: 100vh;
  padding: 20px;
}

.logo {
  text-align: center;
  padding: 20px 0;
}

.logo img {
  width: 80%;
  max-width: 150px;
  height: auto;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  padding: 10px;
  text-align: center;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
