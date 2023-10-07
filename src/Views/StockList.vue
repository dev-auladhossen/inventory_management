<template>
  <div>
    <div class="stock">
      <div class="content">
        <Layout>
          <StockDataTable />
        </Layout>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Sidebar from "../components/Sidebar.vue";
import StockDataTable from "../components/StockDatatable.vue";
import Layout from "../components/Layout.vue";

export default {
  components: {
    Layout,
    Topbar,
    Sidebar,
    StockDataTable,
  },
};
</script>

<style scoped>
.stock {
  display: flex;
}
.content {
  flex: 4;
}
</style>
