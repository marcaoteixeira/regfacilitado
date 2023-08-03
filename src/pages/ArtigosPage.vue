<template>
  <q-page>
    <h5>Artigos</h5>
    <q-card>
      <q-card-section>

        <div class="text-body1">{{ artigo }}</div>
        <span class="text-body1" v-html="caput"></span>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  created() {
    axios.get("http://18.229.118.205:8686/admin/artigo/" + this.$route.params.id).then(res => {
      console.log(res);
      this.id = res.data.id
      this.artigo = res.data.artigo
      this.caput = res.data.caput

    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      artigo: '',
      caput: ''


    }

  },
});

</script>
