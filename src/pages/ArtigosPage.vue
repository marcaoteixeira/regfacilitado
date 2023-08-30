<template>
  <q-page>
    <!--<h5>Artigos</h5>-->
    <q-card>
      <q-card-section>
        <!-- <div class="text-body1">{{ artigo }}</div>
        <div class="text-body1" v-html="caput"></div> -->
        <span v-for="artigo in      artigos     " :key="artigo.id">
          <p style="text-align: left;">{{ artigo.artigo }}&nbsp; - &nbsp;<span v-html=artigo.caput></span>
          </p>
          <template v-if="artigo.id != null">

            <template v-if="artigo.qordensConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=artigo.qordensConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template><br>
          </template>

        </span>
        <span v-for="     inciso      in      incisos     " :key="inciso.id">
          <template v-if="id === inciso.id_artigo && inciso.id_paragrafo === null">
            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>

            <template v-if="inciso.qordensConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.qordensConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template><br>

            <template v-if="inciso.notasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.notasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>


            <span v-for="     alinea      in      alineas     " :key="alinea.id">
              <template v-if="inciso.id === alinea.id_inciso">
                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                <template v-if="alinea.qordensConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de ordem"
                    class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=alinea.qordensConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="alinea.notasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=alinea.notasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>



              </template>
            </span>
          </template>
        </span>

        <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">

          <template v-if="id === paragrafo.id_artigo">
            <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span v-html=paragrafo.caput></span>
            </p>

            <template v-if="paragrafo.qordensConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=paragrafo.qordensConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template><br>

            <template v-if="paragrafo.notasConteudos">
              <!-- <q-dialog v-model="paragrafo.showDialog">
                <q-card>
                  <q-card-section>
                    <div>Notas</div>
                  </q-card-section>
                  <q-separator />
                  <q-card-section style="max-height: 50vh" class="scroll">
                    <span v-html="paragrafo.notasConteudos"></span>
                  </q-card-section>
                  <q-separator />
                  <q-card-actions align="right">
                    <q-btn flat label="Fechar" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn label="Notas" @click="paragrafo.showDialog = true" />-->
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=paragrafo.notasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>





            <span v-for="      inciso       in       incisos      " :key="inciso.id">
              <template v-if="paragrafo.id === inciso.id_paragrafo">
                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>


                <template v-if="incisos.qordensConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem"
                    class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.qordensConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template><br>

                <template v-if="inciso.notasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.notasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <span v-for="      alinea       in       alineas      " :key="alinea.id">
                  <template v-if="inciso.id === alinea.id_inciso">
                    <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                    <template v-if="alinea.qordensConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de ordem"
                        class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=alinea.qordensConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="alinea.notasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=alinea.notasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>


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

  // Vamos juntar os conteudos de todas as notas de um parágrafo
  // Quando

  created() {

    const artigoPromise = axios.get("http://18.229.118.205:8686/admin/artigo/" + this.$route.params.id).then(res => {
      console.log(res);
      //this.artigos = res.data;
      this.id = res.data.id
      this.artigo = res.data.artigo
      this.caput = res.data.caput
    }).catch(err => {
      console.log(err);
    })

    const artigosPromise = axios.post("http://18.229.118.205:8686/admin/artigo/list").then(res => {
      console.log(res);
      this.artigos = res.data;
      this.artigos = this.artigos.filter(c => c.id == this.id)
    }).catch(err => {
      console.log(err);
    });

    const incisoPromise = axios.post("http://18.229.118.205:8686/admin/inciso/list").then(res => {
      console.log(res);
      this.incisos = res.data;
    }).catch(err => {
      console.log(err);
    });
    const alineaPromise = axios.post("http://18.229.118.205:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
    }).catch(err => {
      console.log(err);
    });

    const qosPromise = axios.post("http://18.229.118.205:8686/listqordem").then(res => {
      this.qordens = res.data.map(qordem => ({ ...qordem, showDialog: false }));
      return this.qordens;
    }).catch(err => {
      console.log(err);
    });

    const parPromise = axios.post("http://18.229.118.205:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
      return this.paragrafos;
    }).catch(err => {
      console.log(err);
    });

    const notasPromise = axios.post("http://18.229.118.205:8686/listnota").then(res => {
      this.notas = res.data.map(nota => ({ ...nota, showDialog: false }));
      return this.notas;
    }).catch(err => {
      console.log(err);
    });

    Promise.all([parPromise, notasPromise, incisoPromise, alineaPromise, qosPromise, artigosPromise, artigoPromise])
      .then((rets) => {

        // Pega as notas

        this.paragrafos.map(par => {
          const notasDesteParagrafo = this.notas.filter(nota => (par.id === nota.id_paragrafo && nota.id_tipo === 18))
          par.notasConteudos = null;
          if (!Array.isArray(notasDesteParagrafo) || !notasDesteParagrafo.length) {
            return par;
          }
          par.showDialog = false;
          par.notasConteudos = notasDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'
          return par
        });
        this.incisos.map(inc => {
          const notasDesteInciso = this.notas.filter(nota => (inc.id === nota.id_inciso && nota.id_tipo === 18))
          inc.notasConteudos = null;
          if (!Array.isArray(notasDesteInciso) || !notasDesteInciso.length) {
            return inc;
          }
          inc.showDialog = false;
          inc.notasConteudos = notasDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return inc;
        });
        this.alineas.map(ali => {
          const notasDestaAlinea = this.notas.filter(nota => (ali.id === nota.id_alinea && nota.id_tipo === 18))
          ali.notasConteudos = null;
          if (!Array.isArray(notasDestaAlinea) || !notasDestaAlinea.length) {
            return ali;
          }
          ali.showDialog = false;
          ali.notasConteudos = notasDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return ali;
        });

        //pega as questões de ordem

        this.artigos.map(qoart => {
          const qosDesteArtigo = this.qordens.filter(qordem => (qoart.id === qordem.id_artigo && qordem.id_paragrafo === null && qordem.id_inciso === null && qordem.id_alinea === null && qordem.id_tipo === 8))
          qoart.qordensConteudos = null;
          if (!Array.isArray(qosDesteArtigo) || !qosDesteArtigo.length) {
            return qoart;
          }
          qoart.showDialog = false;
          qoart.qordensConteudos = qosDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoart;
        });


        this.paragrafos.map(qopar => {
          const qosDesteParagrafo = this.qordens.filter(qordem => (qopar.id === qordem.id_paragrafo && qordem.id_tipo === 8))
          qopar.qordensConteudos = null;
          if (!Array.isArray(qosDesteParagrafo) || !qosDesteParagrafo.length) {
            return qopar;
          }
          qopar.showDialog = false;
          qopar.qordensConteudos = qosDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qopar;
        });

        this.incisos.map(qoinc => {
          const qosDesteInciso = this.qordens.filter(qordem => (qoinc.id === qordem.id_inciso && qordem.id_tipo === 8))
          qoinc.qordensConteudos = null;
          if (!Array.isArray(qosDesteInciso) || !qosDesteInciso.length) {
            return qoinc;
          }
          qoinc.showDialog = false;
          qoinc.qordensConteudos = qosDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoinc;
        });
        this.alineas.map(qoali => {
          const qosDestaAlinea = this.qordens.filter(qordem => (qoali.id === qordem.id_inciso && qordem.id_tipo === 8))
          qoali.qordensConteudos = null;
          if (!Array.isArray(qosDestaAlinea) || !qosDestaAlinea.length) {
            return qoali;
          }
          qoali.showDialog = false;
          qoali.qordensConteudos = qosDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoali;
        });

      })
  },
  data() {
    return {
      artigo: '',
      caput: '',
      artigos: [],
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
