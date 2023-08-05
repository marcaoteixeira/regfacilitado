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
    icon: "people",
    link: "",
  },
  {
    title: "Regimento Facilitado",
    caption: "",
    icon: "tab",
    link: "#/regimento",
  },
  {
    title: "Questões de Ordem",
    caption: "forum.ac",
    caption: "",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facilidades",
    caption: "",
    icon: "public",
    link: "#/facilidades",
  },
  {
    title: "Indice Dinâmico",
    caption: "",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Cursos",
    caption: "",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Podcasts",
    caption: "",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Infográficos",
    caption: "",
    icon: "favorite",
    link: "https://aweguntsome.quasar.dev",
  },
  {
    title: "Cards de Estudo",
    caption: "Perguntas e respostas frequentes",
    icon: "drafts",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Contatos",
    caption: "",
    icon: "drafts",
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
