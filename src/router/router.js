import { createRouter, createWebHistory } from "vue-router";
import StockList from "../views/StockList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import PurchaseOrder from "../views/PurchaseOrder.vue";
import SalesOrder from "../views/SalesOrder.vue";
import CustomerList from "../views/CustomerList.vue";
import DashboardShow from "../views/DashboardShow.vue";
import ReportsAnalytics from "../views/Chart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: StockList,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardShow,
    },
    {
      path: "/stock",
      name: "stock",
      component: StockList,
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductDetail,
    },
    {
      path: "/purchaseorder",
      name: "purchaseorder",
      component: PurchaseOrder,
    },
    {
      path: "/salesorder",
      name: "salesorder",
      component: SalesOrder,
    },
    {
      path: "/customers",
      name: "customers",
      component: CustomerList,
    },
    {
      path: "/reportsanalytics",
      name: "reportsanalytics",
      component: ReportsAnalytics,
    },
  ],
});

export default router;
