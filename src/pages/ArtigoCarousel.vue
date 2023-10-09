<template>
  <q-card>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <carousel>
          <slide v-for="titulo in titulos" :key="titulo.id" :name='titulo.id'>
            <div>
              {{ titulo.titulo }}
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />

          </template>

        </carousel>
      </div>
    </div>

  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from "axios";


export default defineComponent({

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  created() {

    axios.post("http://localhost:8686/admin/titulo/list").then(res => {
      console.log(res);
      this.titulos = res.data;
      /*this.artigos = this.artigos.filter(c => c.id == this.$route.params.id)*/
    }).catch(err => {
    });


  },
  data() {

    return {
      slides: [],
      titulos: [],
      caput: '',
      artigos: [],
      incisos: [],
      paragrafos: [],
      alineas: [],
      conteudos: [],
      notas: [],
      showDialog: false,
      currentSlide: ref('one')

    }

  },

});

</script >
