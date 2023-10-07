<template>
  <div>
    <div class="product">
      <div class="content">
        <Layout>
          <ProductDetails />
        </Layout>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Sidebar from "../components/Sidebar.vue";
import ProductDetails from "../components/ProductDetails.vue";
import Layout from "../components/Layout.vue";

export default {
  components: {
    Layout,
    Topbar,
    Sidebar,
    ProductDetails,
  },
};
</script>

<style scoped>
.product {
  display: flex;
}
.content {
  flex: 4;
}
</style>
