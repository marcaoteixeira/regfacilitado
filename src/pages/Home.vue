<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Regimento Facilitado </q-toolbar-title>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-md-md">
        <div class="text-subtitlel"></div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
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
    title: "Regimento",
    caption: "chat.quasar.dev",
    icon: "menu_book",
    link: "#/regimento",
  },
  {
    title: "Questões de Ordem",
    caption: "forum.ac",
    caption: "@quasarframework",
    icon: "edit_document",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facilidades",
    caption: "@QuasarFramework",
    icon: "lightbulb_outline",
    link: "#/facilidades",
  },
  {
    title: "Indice Dinâmico",
    caption: "Community Quasar projects",
    icon: "abc",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Cursos",
    caption: "Community Quasar projects",
    icon: "cast_for_education",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Podcasts",
    caption: "Community Quasar projects",
    icon: "spatial_tracking",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Infográficos",
    caption: "Community Quasar projects",
    icon: "addchart",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Contatos",
    caption: "Community Quasar projects",
    icon: "support_agent",
    link: "https://awesome.quasar.dev",
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
