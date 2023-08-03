<template>
  <q-page>
    <h5>Artigos</h5>
  </q-page>
  <span v-for="artigo in artigos" :key="artigo.id">
    <template>
      <span>
        {{ artigo.artigo }}&nbsp;
      </span>
    </template>
  </span>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  created() {
    axios.get("http://18.229.118.205:8686/admin/artigo/1").then(res => {
      console.log(res);
      this.artigos = res.data.id
      console.log(artigos);
    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      artigos: [],

    }

  },
});

</script>
