<template>
  <q-page>
    <!--  <h5>Artigos</h5> -->
    <q-card>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
            control-color="white" padding height="600px" class="shadow-1 rounded-borders">
            <q-carousel-slide v-for="(artigo, id) in artigos" :key="id" :name="id">

              <span><b>{{ artigo.artigo }}</b> - </span>
              <span v-html=removeHTMLTags(artigo.caput)></span>
              <!--<p style="text-align: left;">{{ artigo.artigo }}&nbsp; - &nbsp;<span v-html=artigo.caput></span>
              </p> -->
              <template v-if="artigo.id != null">

                <template v-if="artigo.jurisprudenciasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Jurisprudências" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.jurisprudenciasConteudos></span> </q-card-section><br>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.observacoesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.observacoesConteudos></span> </q-card-section><br>
                    </q-card>
                  </q-expansion-item>
                </template>

              </template>

              <span v-for="     inciso      in      incisos     " :key="inciso.id">
                <template v-if="artigo.id === inciso.id_artigo && inciso.id_paragrafo === null">
                  <p style="text-align: justify;">{{ inciso.inciso }}&nbsp;<span
                      v-html="removeHTMLTags(inciso.caput)"></span></p>

                  <template v-if="inciso.jurisprudenciasConteudos">
                    <q-expansion-item dense dense-toggle expand-separator icon="" label="Jurisprudências"
                      class="bg-teal-1">
                      <q-card class="bg-teal-0">
                        <q-card-section>
                          <span v-html=inciso.jurisprudenciasConteudos></span> </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </template>


                  <template v-if="inciso.observacoesConteudos">
                    <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações" class="bg-teal-1">
                      <q-card class="bg-teal-0">
                        <q-card-section>
                          <span v-html=inciso.observacoesConteudos></span> </q-card-section><br>
                      </q-card>
                    </q-expansion-item>
                  </template>

                  <span v-for="alinea in alineas" :key="alinea.id">
                    <template v-if="alinea.id_paragrafo === null && alinea.id_inciso === inciso.id">
                      <p style="text-align: left;"><span v-html=removeHTMLTags(alinea.alinea)></span></p>

                      <template v-if="alinea.jurisprudenciasConteudos">
                        <q-expansion-item dense dense-toggle expand-separator icon="" label="Jurisprudências"
                          class="bg-teal-1">
                          <q-card class="bg-teal-0">
                            <q-card-section>
                              <span v-html=alinea.jurisprudenciasConteudos></span> </q-card-section>
                          </q-card>
                        </q-expansion-item>
                      </template>


                      <template v-if="alinea.observacoesConteudos">
                        <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações"
                          class="bg-teal-1">
                          <q-card class="bg-teal-0">
                            <q-card-section>
                              <span v-html=alinea.observacoesConteudos></span> </q-card-section><br>
                          </q-card>
                        </q-expansion-item>
                      </template>

                    </template>
                  </span>
                </template>
              </span>

              <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">


                <template v-if="artigo.id === paragrafo.id_artigo">
                  <p style="text-align: justify;">{{ paragrafo.paragrafo }}&nbsp;<span
                      v-html=removeHTMLTags(paragrafo.caput)></span>
                  </p>

                  <template v-if="paragrafo.jurisprudenciasConteudos">
                    <q-expansion-item dense dense-toggle expand-separator icon="" label="Jurisprudências"
                      class="bg-teal-1">
                      <q-card class="bg-teal-0">
                        <q-card-section>
                          <span v-html=paragrafo.jurisprudenciasConteudos></span> </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </template>


                  <template v-if="paragrafo.observacoesConteudos">
                    <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações" class="bg-teal-1">
                      <q-card class="bg-teal-0">
                        <q-card-section>
                          <span v-html=paragrafo.observacoesConteudos></span> </q-card-section><br>
                      </q-card>
                    </q-expansion-item>
                  </template>

                  <span v-for="      inciso       in       incisos      " :key="inciso.id">
                    <template v-if="paragrafo.id === inciso.id_paragrafo">
                      <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span
                          v-html=removeHTMLTags(inciso.caput)></span></p>

                      <template v-if="inciso.jurisprudenciasConteudosp">
                        <q-expansion-item dense dense-toggle expand-separator icon="" label="Jurisprudências"
                          class="bg-teal-1">
                          <q-card class="bg-teal-0">
                            <q-card-section>
                              <span v-html=inciso.jurisprudenciasConteudosp></span> </q-card-section>
                          </q-card>
                        </q-expansion-item>
                      </template>

                      <template v-if="inciso.observacoesConteudosp">
                        <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações"
                          class="bg-teal-1">
                          <q-card class="bg-teal-0">
                            <q-card-section>
                              <span v-html=inciso.observacoesConteudosp></span> </q-card-section><br>
                          </q-card>
                        </q-expansion-item>
                      </template>
                      <span v-for="alinea in alineas" :key="alinea.id">
                        <template v-if="alinea.id_paragrafo === null && alinea.id_inciso === inciso.id">
                          <p style="text-align: left;"><span v-html=removeHTMLTags(alinea.alinea)></span></p>

                          <template v-if="alinea.jurisprudenciasConteudos">
                            <q-expansion-item dense dense-toggle expand-separator icon="" label="Jurisprudências"
                              class="bg-teal-1">
                              <q-card class="bg-teal-0">
                                <q-card-section>
                                  <span v-html=alinea.jurisprudenciasConteudos></span> </q-card-section>
                              </q-card>
                            </q-expansion-item>
                          </template>


                          <template v-if="alinea.observacoesConteudos">
                            <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações"
                              class="bg-teal-1">
                              <q-card class="bg-teal-0">
                                <q-card-section>
                                  <span v-html=alinea.observacoesConteudos></span> </q-card-section><br>
                              </q-card>
                            </q-expansion-item>
                          </template>

                        </template>
                      </span>


                    </template>

                  </span>
                </template>
              </span>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from "axios";




export default defineComponent({


  created() {

    /* axios.get("http://18.229.118.205:8686/admin/artigo/" + this.$route.params.id).then(res => {
       console.log(res);
       //this.artigos = res.data;
       this.id = res.data.id
       this.artigo = res.data.artigo
       this.caput = res.data.caput
     }).catch(err => {
       console.log(err);
     })*/

    axios.post("http://18.229.118.205:8686/admin/artigo/list").then(res => {
      console.log(res);
      this.artigos = ref(res.data);
      console.log(this.artigos.indexOf(60))

      //this.artigos = this.artigos.filter(c => c.id == this.$route.params.id)
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
      return this.paragrafos;
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/inciso/list").then(res => {
      console.log(res);
      this.incisos = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
    }).catch(err => {
      console.log(err);
    });



    const jurisprudenciaPromise = axios.post("http://18.229.118.205:8686/listjurisprudencia").then(res => {
      this.jurisprudencias = res.data.map(jurisprudencia => ({ ...jurisprudencia, showDialog: false }));
      return this.jurisprudencias;
    }).catch(err => {
      console.log(err);
    });

    const remissaoPromise = axios.post("http://18.229.118.205:8686/listremissao").then(res => {
      this.remissoes = res.data.map(remissao => ({ ...remissao, showDialog: false }));
      return this.remissoes;
    }).catch(err => {
      console.log(err);
    });

    const observacoesPromise = axios.post("http://18.229.118.205:8686/listobservacao").then(res => {
      this.observacoes = res.data.map(observacao => ({ ...observacao, showDialog: false }));
      return this.observacoes;
    }).catch(err => {
      console.log(err);
    });


    Promise.all([jurisprudenciaPromise, remissaoPromise, observacoesPromise])
      .then((rets) => {

        // Pega as notas

        /* this.paragrafos.map(par => {
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
         });*/

        //pega as Jurisprudências

        this.artigos.map(juriart => {
          const jurisprudenciasDesteArtigo = this.jurisprudencias.filter(jurisprudencia => (juriart.id === jurisprudencia.id_artigo && jurisprudencia.id_paragrafo === null && jurisprudencia.id_inciso === null && jurisprudencia.id_alinea === null))
          juriart.jurisprudenciasConteudos = null;
          if (!Array.isArray(jurisprudenciasDesteArtigo) || !jurisprudenciasDesteArtigo.length) {
            return juriart;
          }
          juriart.showDialog = false;
          juriart.jurisprudenciasConteudos = jurisprudenciasDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return juriart;
        });

        this.paragrafos.map(juripar => {
          const jurisprudenciasDesteParagrafo = this.jurisprudencias.filter(jurisprudencia => (juripar.id === jurisprudencia.id_paragrafo && jurisprudencia.id_inciso === null && jurisprudencia.id_alinea === null && jurisprudencia.id_tipo === 8))
          juripar.jurisprudenciasConteudos = null;
          if (!Array.isArray(jurisprudenciasDesteParagrafo) || !jurisprudenciasDesteParagrafo.length) {
            return juripar;
          }
          juripar.showDialog = false;
          juripar.jurisprudenciasConteudos = jurisprudenciasDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return juripar;

        });

        this.incisos.map(juriinc => {
          const jurisprudenciasDesteInciso = this.jurisprudencias.filter(jurisprudencia => (juriinc.id === jurisprudencia.id_inciso && jurisprudencia.id_paragrafo === null && jurisprudencia.id_alinea === null && jurisprudencia.id_tipo === 8))
          juriinc.jurisprudenciasConteudos = null;
          if (!Array.isArray(jurisprudenciasDesteInciso) || !jurisprudenciasDesteInciso.length) {
            return juriinc;
          }
          juriinc.showDialog = false;
          juriinc.jurisprudenciasConteudos = jurisprudenciasDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return juriinc;
        });

        this.incisos.map(juriincp => {
          const jurisDesteIncisocp = this.jurisprudencias.filter(jurisprudencia => (juriincp.id === jurisprudencia.id_inciso && jurisprudencia.id_paragrafo != null && jurisprudencia.id_alinea != null))
          juriincp.jurisprudenciasConteudosp = null;
          if (!Array.isArray(jurisDesteIncisocp) || !jurisDesteIncisocp.length) {
            return juriincp;
          }
          juriincp.showDialog = false;
          juriincp.jurisprudenciasConteudosp = jurisDesteIncisocp
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return juriincp;
        });


        this.alineas.map(juriali => {
          const jurisprudenciasDestaAlinea = this.jurisprudencias.filter(jurisprudencia => (juriali.id === jurisprudencia.id_alinea))
          juriali.jurisprudenciasConteudos = null;
          if (!Array.isArray(jurisprudenciasDestaAlinea) || !jurisprudenciasDestaAlinea.length) {
            return juriali;
          }
          juriali.showDialog = false;
          juriali.jurisprudenciasConteudos = jurisprudenciasDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return juriali;
        });

        //pega as Observações

        this.artigos.map((obsart) => {
          const observacoesDesteArtigo = this.observacoes.filter(
            (observacao) =>
              obsart.id === observacao.id_artigo &&
              observacao.id_paragrafo === null &&
              observacao.id_inciso === null &&
              observacao.id_alinea === null
          );
          obsart.observacoesConteudos = null;
          if (
            !Array.isArray(observacoesDesteArtigo) ||
            !observacoesDesteArtigo.length
          ) {
            return obsart;
          }
          obsart.showDialog = false;
          obsart.observacoesConteudos =
            observacoesDesteArtigo.reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, "<ul>") + "</ul>";

          return obsart;
        });

        this.paragrafos.map((obspar) => {
          const observacoesDesteParagrafo = this.observacoes.filter(
            (observacao) =>
              obspar.id === observacao.id_paragrafo &&
              observacao.id_inciso === null &&
              observacao.id_alinea === null &&
              observacao.id_tipo === 8
          );
          obspar.observacoesConteudos = null;
          if (
            !Array.isArray(observacoesDesteParagrafo) ||
            !observacoesDesteParagrafo.length
          ) {
            return obspar;
          }
          obspar.showDialog = false;
          obspar.observacoesConteudos =
            observacoesDesteParagrafo.reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, "<ul>") + "</ul>";

          return obspar;
        });

        this.incisos.map((obsinc) => {
          const observacoesDesteInciso = this.observacoes.filter(
            (observacao) =>
              obsinc.id === observacao.id_inciso &&
              observacao.id_paragrafo === null &&
              observacao.id_alinea === null &&
              observacao.id_tipo === 8
          );
          obsinc.observacoesConteudos = null;
          if (
            !Array.isArray(observacoesDesteInciso) ||
            !observacoesDesteInciso.length
          ) {
            return obsinc;
          }
          obsinc.showDialog = false;
          obsinc.observacoesConteudos =
            observacoesDesteInciso.reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, "<ul>") + "</ul>";

          return obsinc;
        });

        this.incisos.map((obsincp) => {
          const observacoesDesteIncisocp = this.observacoes.filter(
            (observacao) =>
              obsincp.id === observacao.id_inciso &&
              observacao.id_paragrafo != null &&
              observacao.id_alinea != null
          );
          obsincp.observacoesConteudosp = null;
          if (
            !Array.isArray(observacoesDesteIncisocp) ||
            !observacoesDesteIncisocp.length
          ) {
            return obsincp;
          }
          obsincp.showDialog = false;
          obsincp.observacoesConteudosp =
            observacoesDesteIncisocp.reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, "<ul>") + "</ul>";

          return obsincp;
        });

        this.alineas.map((obsali) => {
          const observacoesDestaAlinea = this.observacoes.filter(
            (observacao) => obsali.id === observacao.id_alinea
          );
          obsali.observacoesConteudos = null;
          if (
            !Array.isArray(observacoesDestaAlinea) ||
            !observacoesDestaAlinea.length
          ) {
            return obsali;
          }
          obsali.showDialog = false;
          obsali.observacoesConteudos =
            observacoesDestaAlinea.reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, "<ul>") + "</ul>";

          return obsali;
        });



      })
  },





  methods: {

    removeHTMLTags(str) {
      return str.replace(/<[^>]*>/g, '');
    }

  },


  data() {



    return {
      artigo: '',
      caput: '',
      artigos: [],
      incisos: [],
      paragrafos: [],
      alineas: [],
      jurisprudencias: [],
      remissoes: [],
      observacoes: [],
      notas: [],
      showDialog: false,
      slide: ref(0)


    }

  },


});

</script>
<style>
div {
  text-align: justify;
  text-justify: inter-word;
}

span {
  text-align: justify;
  text-justify: inter-word;
}

.q-carousel {
  /*width: 800px;*/
  /*height: 800px;*/
  align-items: left;
}

.bg-teal-0 {
  background-color: rgb(250, 250, 249);
  border: 1px solid #000000;
  border-color: black;
}

.bg-teal-1 {
  background-color: rgb(0, 10, 0);
  border: 1px solid #000000;
  border-color: black;

}

.carousel__item {
  font-size: 20px;
  border-radius: 8px;
  justify-content: left;
  align-items: top;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
