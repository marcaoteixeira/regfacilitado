<template>
  <q-page>
    <q-btn color="botao-secundario" text-color="texto-botao-secundario" icon="keyboard_backspace" no-caps
      @click="$router.go(-1)" />
    <!--  <h5>Artigos</h5> -->
    <q-card>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel v-model="slide" infi transition-prev="scale" transition-next="scale" swipeable animated
            control-color="white" padding height="600px" class="shadow-1 rounded-borders" name="carousel">
            <q-carousel-slide v-for="(artigo, id) in artigos" :key="id" :name="id">

              <span><b>{{ artigo.artigo }}</b> - </span>
              <span v-html=removeHTMLTags(artigo.caput)></span>
              <!--<p style="text-align: left;">{{ artigo.artigo }}&nbsp; - &nbsp;<span v-html=artigo.caput></span>
              </p> -->
              <template v-if="artigo.id != null"><br>

                <span v-for="remissao in remissoes" :key='remissao.id'>
                  <template v-if="remissao.id_artigo === artigo.id">

                    <router-link :to="{ name: 'artigos', params: { id: remissao.linkartigo } }">
                      <span>{{ removeHTMLTags(remissao.conteudo) }}</span>
                    </router-link>&nbsp;


                  </template>
                </span>

                <!-- <template v-if="artigo.remissoesConteudos">
                  <span v-html=artigo.remissoesConteudos></span>
                </template> -->

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

                <template v-if="artigo.notasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.notasConteudos></span> </q-card-section><br>
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

                  <template v-if="inciso.notasConteudos">
                    <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                      <q-card class="bg-teal-0">
                        <q-card-section>
                          <span v-html=inciso.notasConteudos></span> </q-card-section><br>
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

                      <template v-if="alinea.notasConteudos">
                        <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                          <q-card class="bg-teal-0">
                            <q-card-section>
                              <span v-html=alinea.notasConteudos></span> </q-card-section><br>
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

                  <template v-if="paragrafo.notasConteudos">
                    <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                      <q-card class="bg-teal-0">
                        <q-card-section>
                          <span v-html=paragrafo.notasConteudos></span> </q-card-section><br>
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

                      <template v-if="inciso.notasConteudosp">
                        <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                          <q-card class="bg-teal-0">
                            <q-card-section>
                              <span v-html=inciso.notasConteudosp></span> </q-card-section><br>
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

                          <template v-if="alinea.notasConteudos">
                            <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                              <q-card class="bg-teal-0">
                                <q-card-section>
                                  <span v-html=alinea.notasConteudos></span> </q-card-section><br>
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
import { defineComponent } from 'vue'
import { ref } from 'vue'
import axios from "axios";
import { useRouter, useRoute } from 'vue-router';


export default defineComponent({

  created() {

    this.id = this.$route.params.id
    console.log(this.id)


    /*axios.get("http://18.229.118.205:8686/admin/artigo/" + this.$route.params.id).then(res => {
      console.log(res);
      this.id = res.data.id
      this.artigo = res.data.artigo
      this.caput = res.data.caput
      return this.id, this.artigo, this.caput
    }).catch(err => {
      console.log(err);
    });*/

    axios.post("http://18.229.118.205:8686/admin/artigo/list").then(res => {
      console.log(res);
      this.artigos = ref(res.data);
      //this.id = this.$route.parrams.id
      this.slide = ref(this.artigos.findIndex(o => o.id == this.id))
      console.log(this.slide)
      //this.artigos = this.artigos.filter(c => c.id == this.$route.params.id)
      return this.artigos, this.slide
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
      return this.incisos
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
      return this.alineas
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

    const notasPromise = axios.post("http://18.229.118.205:8686/listnota").then(res => {
      this.notas = res.data.map(nota => ({ ...nota, showDialog: false }));
      return this.notas;
    }).catch(err => {
      console.log(err);
    });


    Promise.all([jurisprudenciaPromise, remissaoPromise, observacoesPromise, notasPromise])
      .then((rets) => {

        /* //pega as Remissoes

         this.artigos.map(remiart => {
           const remissoesDesteArtigo = this.remissoes.filter(remissao => (remiart.id === remissao.id_artigo && remissao.id_paragrafo === null && remissao.id_inciso === null && remissao.id_alinea === null))
           remiart.remissoesConteudos = null;
           if (!Array.isArray(remissoesDesteArtigo) || !remissoesDesteArtigo.length) {
             return remiart;
           }
           remiart.showDialog = false;
           remiart.remissoesConteudos = remissoesDesteArtigo
             .reduce((remissao, currentValue) => {
               return remissao + `<li>${currentValue.conteudo}</li>`;
             }, '<ul>') + '</ul>'

           return remiart;
         });

         /*return remissao + `<q-btn color="black"><router-link :to="{name: "artigos", params: {id: ${currentValue.linkartigo}}}">${currentValue.conteudo}</routerlink></qbtn>`;
              }, '<ul>') + '</ul>'*/



        /* this.paragrafos.map(remipar => {
           const remissoesDesteParagrafo = this.remissoes.filter(remissao => (remipar.id === remissao.id_paragrafo && remissao.id_inciso === null && remissao.id_alinea === null))
           remipar.remissoesConteudos = null;
           if (!Array.isArray(remissoesDesteParagrafo) || !remissoesDesteParagrafo.length) {
             return remipar;
           }
           remipar.showDialog = false;
           remipar.remissoesConteudos = remissoesDesteParagrafo
             .reduce((conteudo, currentValue) => {
               return conteudo + `<li>${currentValue.conteudo}</li>`;
             }, '<ul>') + '</ul>'

           return remipar;

         });

         this.incisos.map(remiinc => {
           const remissoesDesteInciso = this.remissoes.filter(remissao => (remiinc.id === remissao.id_inciso && remissao.id_paragrafo === null && remissao.id_alinea === null))
           remiinc.remissoesConteudos = null;
           if (!Array.isArray(remissoesDesteInciso) || !remissoesDesteInciso.length) {
             return remiinc;
           }
           remiinc.showDialog = false;
           remiinc.remissoesConteudos = remissoesDesteInciso
             .reduce((conteudo, currentValue) => {
               return conteudo + `<li>${currentValue.conteudo}</li>`;
             }, '<ul>') + '</ul>'

           return remiinc;
         });

         this.incisos.map(remiincp => {
           const jurisDesteIncisocp = this.remissoes.filter(remissao => (remiincp.id === remissao.id_inciso && remissao.id_paragrafo != null))
           remiincp.remissoesConteudosp = null;
           if (!Array.isArray(jurisDesteIncisocp) || !jurisDesteIncisocp.length) {
             return remiincp;
           }
           remiincp.showDialog = false;
           remiincp.remissoesConteudosp = jurisDesteIncisocp
             .reduce((conteudo, currentValue) => {
               return conteudo + `<li>${currentValue.conteudo}</li>`;
             }, '<ul>') + '</ul>'

           return remiincp;
         });


         this.alineas.map(remiali => {
           const remissoesDestaAlinea = this.remissoes.filter(remissao => (remiali.id === remissao.id_alinea))
           remiali.remissoesConteudos = null;
           if (!Array.isArray(remissoesDestaAlinea) || !remissoesDestaAlinea.length) {
             return remiali;
           }
           remiali.showDialog = false;
           remiali.remissoesConteudos = remissoesDestaAlinea
             .reduce((conteudo, currentValue) => {
               return conteudo + `<li>${currentValue.conteudo}</li>`;
             }, '<ul>') + '</ul>'

           return remiali;
         }); */


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
          const jurisprudenciasDesteParagrafo = this.jurisprudencias.filter(jurisprudencia => (juripar.id === jurisprudencia.id_paragrafo && jurisprudencia.id_inciso === null && jurisprudencia.id_alinea === null))
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
          const jurisprudenciasDesteInciso = this.jurisprudencias.filter(jurisprudencia => (juriinc.id === jurisprudencia.id_inciso && jurisprudencia.id_paragrafo === null && jurisprudencia.id_alinea === null))
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
          const jurisDesteIncisocp = this.jurisprudencias.filter(jurisprudencia => (juriincp.id === jurisprudencia.id_inciso && jurisprudencia.id_paragrafo != null))
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

        this.artigos.map(obsart => {
          const observacoesDesteArtigo = this.observacoes.filter(observacao => (obsart.id === observacao.id_artigo && observacao.id_paragrafo === null && observacao.id_inciso === null && observacao.id_alinea === null))
          obsart.observacoesConteudos = null;
          if (!Array.isArray(observacoesDesteArtigo) || !observacoesDesteArtigo.length) {
            return obsart;
          }
          obsart.showDialog = false;
          obsart.observacoesConteudos = observacoesDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsart;
        });

        this.paragrafos.map(obspar => {
          const observacoesDesteParagrafo = this.observacoes.filter(observacao => (obspar.id === observacao.id_paragrafo && observacao.id_inciso === null && observacao.id_alinea === null))
          obspar.observacoesConteudos = null;
          if (!Array.isArray(observacoesDesteParagrafo) || !observacoesDesteParagrafo.length) {
            return obspar;
          }
          obspar.showDialog = false;
          obspar.observacoesConteudos = observacoesDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obspar;

        });

        this.incisos.map(obsinc => {
          const observacoesDesteInciso = this.observacoes.filter(observacao => (obsinc.id === observacao.id_inciso && observacao.id_paragrafo === null && observacao.id_alinea === null))
          obsinc.observacoesConteudos = null;
          if (!Array.isArray(observacoesDesteInciso) || !observacoesDesteInciso.length) {
            return obsinc;
          }
          obsinc.showDialog = false;
          obsinc.observacoesConteudos = observacoesDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsinc;
        });

        this.incisos.map(obsincp => {
          const observacoeesteIncisocp = this.observacoes.filter(observacao => (obsincp.id === observacao.id_inciso && observacao.id_paragrafo != null))
          obsincp.observacoesConteudosp = null;
          if (!Array.isArray(observacoeesteIncisocp) || !observacoeesteIncisocp.length) {
            return obsincp;
          }
          obsincp.showDialog = false;
          obsincp.observacoesConteudosp = observacoeesteIncisocp
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsincp;
        });


        this.alineas.map(obsali => {
          const observacoesDestaAlinea = this.observacoes.filter(observacao => (obsali.id === observacao.id_alinea))
          obsali.observacoesConteudos = null;
          if (!Array.isArray(observacoesDestaAlinea) || !observacoesDestaAlinea.length) {
            return obsali;
          }
          obsali.showDialog = false;
          obsali.observacoesConteudos = observacoesDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsali;
        });

        //pega as Notas

        this.artigos.map(notart => {
          const notasDesteArtigo = this.notas.filter(nota => (notart.id === nota.id_artigo && nota.id_paragrafo === null && nota.id_inciso === null && nota.id_alinea === null))
          notart.notasConteudos = null;
          if (!Array.isArray(notasDesteArtigo) || !notasDesteArtigo.length) {
            return notart;
          }
          notart.showDialog = false;
          notart.notasConteudos = notasDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return notart;
        });

        this.paragrafos.map(notpar => {
          const notasDesteParagrafo = this.notas.filter(nota => (notpar.id === nota.id_paragrafo && nota.id_inciso === null && nota.id_alinea === null))
          notpar.notasConteudos = null;
          if (!Array.isArray(notasDesteParagrafo) || !notasDesteParagrafo.length) {
            return notpar;
          }
          notpar.showDialog = false;
          notpar.notasConteudos = notasDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return notpar;

        });

        this.incisos.map(notinc => {
          const notasDesteInciso = this.notas.filter(nota => (notinc.id === nota.id_inciso && nota.id_paragrafo === null && nota.id_alinea === null))
          notinc.notasConteudos = null;
          if (!Array.isArray(notasDesteInciso) || !notasDesteInciso.length) {
            return notinc;
          }
          notinc.showDialog = false;
          notinc.notasConteudos = notasDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return notinc;
        });

        this.incisos.map(notincp => {
          const notasDesteIncisocp = this.notas.filter(nota => (notincp.id === nota.id_inciso && nota.id_paragrafo != null))
          notincp.notasConteudosp = null;
          if (!Array.isArray(notasDesteIncisocp) || !notasDesteIncisocp.length) {
            return notincp;
          }
          notincp.showDialog = false;
          notincp.notasConteudosp = notasDesteIncisocp
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return notincp;
        });

        this.alineas.map(notali => {
          const notasDestaAlinea = this.notas.filter(nota => (notali.id === nota.id_alinea))
          notali.notasConteudos = null;
          if (!Array.isArray(notasDestaAlinea) || !notasDestaAlinea.length) {
            return notali;
          }
          notali.showDialog = false;
          notali.notasConteudos = notasDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return notali;
        });


      })
  },





  methods: {
    backpage() {
      const handleBack = router.back();
      return handleBack
    },

    removeHTMLTags(str) {
      return str.replace(/<[^>]*>/g, '');
    },


  },

  setup() {
    const handleBack = () => router.back();

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
      slide: ref(0),


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
