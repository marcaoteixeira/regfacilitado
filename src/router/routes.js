import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("pages/Home.vue"),
    children: [
      {
        path: "/facilidades",
        component: () => import("pages/FacilidadesPage.vue"),
      },
      {
        path: "/regimento",
        component: () => import("pages/RegimentoPage.vue"),
      },
      {
        path: "/regimentofull",
        component: () => import("pages/RegimentoFull.vue"),
      },
      {
        path: "/artigos/:id",
        name: "artigos",
        component: () => import("pages/ArtigosPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
