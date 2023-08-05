<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Regimento Facilitado </q-toolbar-title>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-md-md">
        <div class="text-subtitlel"></div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "",
    icon: "home",
    link: "/",
  },
  {
    title: "Sobre nós",
    caption: "",
    icon: "people_alt",
    link: "",
  },
  {
    title: "Regimento Facilitado",
    caption: "",
    icon: "menu_book",
    link: "#/regimento",
  },
  {
    title: "Questões de Ordem",
    caption: "forum.ac",
    caption: "",
    icon: "edit_document",
    link: "",
  },
  {
    title: "Facilidades",
    caption: "",
    icon: "lightbulb_outline",
    link: "#/facilidades",
  },
  {
    title: "Indice Dinâmico",
    caption: "",
    icon: "abc",
    link: "",
  },
  {
    title: "Cursos",
    caption: "",
    icon: "cast_for_education",
    link: "",
  },
  {
    title: "Podcasts",
    caption: "",
    icon: "spatial_tracking",
    link: "",
  },
  {
    title: "Infográficos",
    caption: "Community Quasar projects",
    icon: "addchart",
    link: "",
  },
  {
    title: "Contatos",
    caption: "Community Quasar projects",
    icon: "support_agent",
    link: "",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
