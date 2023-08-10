<template>
  <q-page>
    <h5>Artigos</h5>
    <q-card>
      <q-card-section>
        <div class="text-body1">{{ artigo }}</div>
        <div class="text-body1" v-html="caput"></div>

        <span v-for="inciso in incisos" :key="inciso.id">
          <template v-if="id === inciso.id_artigo && inciso.id_paragrafo === null">
            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
            <span v-for="alinea in alineas" :key="alinea.id">
              <template v-if="inciso.id === alinea.id_inciso">
                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
              </template>
            </span>
          </template>
        </span>

        <span v-for="paragrafo in  paragrafos " :key="paragrafo.id">
          <template v-if="id === paragrafo.id_artigo">
            <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span v-html=paragrafo.caput></span>
            </p>
            <span v-for="conteudo in  conteudos " :key="conteudo.id">
              <template v-if="paragrafo.id === conteudo.id_paragrafo && conteudo.id_tipo === 18">

                <!-- < q - dialog v - model=" showDialog">
                  <q-card>
                    <q-card-section>
                      <div>Notas</div>
                    </q-card-section>

                    <q-separator />

                    <q-card-section style="max-height: 50vh" class="scroll">
                      <span v-for=" nota  in  notas " :key=" nota.id ">
                        <template v-if=" paragrafo.id === nota.id_paragrafo ">
                          <span v-html= conteudo.conteudo ></span>
                        </template>
                      </span>



                    </q-card-section>

                    <q-separator />

                    <q-card-actions align="right">
                      <q-btn flat label="Fechar" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card>
                  </q-dialog>
                <q-btn label="Notas" @click="showDialog = true" /> -->
                <q-expansion-item dense dense-toggle expand-separator icon="edit" label="Notas">
                  <q-card>
                    <q-card-section v-model="conteudo.showDialog">
                      <span v-html=conteudo.conteudo></span> </q-card-section>

                  </q-card>
                </q-expansion-item>

              </template>

            </span>

            <span v-for=" inciso  in  incisos " :key="inciso.id">
              <template v-if="paragrafo.id === inciso.id_paragrafo">
                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                <span v-for=" alinea  in  alineas " :key="alinea.id">
                  <template v-if="inciso.id === alinea.id_inciso">
                    <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                  </template>
                </span>
              </template>
            </span>
          </template>
        </span>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  /*created() {

    axios.post("http://18.229.118.205:8686/admin/inciso/list").then(res => {
      console.log(res);
      this.incisos = res.data;
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://18.229.118.205:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://18.229.118.205:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.get("http://18.229.118.205:8686/admin/artigo/" + this.$route.params.id).then(res => {
      console.log(res);
      this.id = res.data.id
      this.artigo = res.data.artigo
      this.caput = res.data.caput

    }).catch(err => {
      console.log(err);
    });
    axios.post("http://18.229.118.205:8686/admin/conteudo/list").then(res => {
      this.conteudos = res.data;
    }).catch(err => {
      console.log(err);
    });
  },*/
  /*djasdjasd*/
  created() {

    axios.post("http://localhost:8686/admin/inciso/list").then(res => {
      console.log(res);
      this.incisos = res.data;
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.get("http://localhost:8686/admin/artigo/" + this.$route.params.id).then(res => {
      console.log(res);
      this.id = res.data.id
      this.artigo = res.data.artigo
      this.caput = res.data.caput

    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/conteudo/list").then(res => {
      this.conteudos = res.data;
      for (const conteudo of this.conteudos) {
        conteudo.showDialog = false;
      }
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/listnota").then(res => {
      this.notas = res.data;
    }).catch(err => {
      console.log(err);
    });

  },

  data() {
    return {
      artigo: '',
      caput: '',
      incisos: [],
      paragrafos: [],
      alineas: [],
      conteudos: [],
      notas: [],
      showDialog: false,

    }

  },

});

</script>
