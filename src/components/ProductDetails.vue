<template>
  <div v-if="product" class="d-flex gap-3">
    <div>
      <img
        class="rounded"
        height="300"
        width="300"
        :src="product.thumbnail"
        alt="Product Image"
      />
    </div>

    <div>
      <h2>{{ product.title }}</h2>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
      <p><strong>Quantity:</strong> {{ product.stock }}</p>
      <p><strong>Discount:</strong> {{ product.discountPercentage }}%</p>
      <p><strong>Ratings:</strong> {{ product.rating }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
    </div>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { products } from "../data/product";

export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = parseInt(this.$route.params.id);
    this.product = products.find((p) => p.id === productId);
    console.log("this.product", this.product);
  },
};
</script>
