<script setup>
import Layout from "../components/Layout.vue";
import BarChart from "../components/BarChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";
import LineChart from "../components/LineChart.vue";
import PieChart from "../components/PieChart.vue";
</script>

<template>
  <Layout>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 p-2">
          <div class="card shadow-sm">
            <div class="card-body">
              <BarChart />
            </div>
          </div>
        </div>
        <div class="col-6 p-2">
          <div class="card shadow-sm">
            <div class="card-body">
              <LineChart />
            </div>
          </div>
        </div>
        <div class="col-6 p-2">
          <div class="card shadow-sm">
            <div class="card-body">
              <DoughnutChart />
            </div>
          </div>
        </div>
        <div class="col-6 p-2">
          <div class="card shadow-sm">
            <div class="card-body">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
