<template>
  <q-card>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <Swiper>
          <SwiperSlide v-for="titulo in titulos" :key="titulo.id" :name='titulo.id'>
            <div>
              {{ titulo.titulo }}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  </q-card>
</template>

<script>



import { defineComponent, ref } from "vue"
import axios from "axios";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';


export default defineComponent({

  components: {
    Swiper,
    SwiperSlide,

  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },

  created() {

    axios.post("http://18.229.118.205:8686/admin/titulo/list").then(res => {
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
