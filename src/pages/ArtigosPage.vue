<template>
  <q-page>
    <!--<h5>Artigos</h5>-->
    <q-card>
      <q-card-section>
        <span class="text-body1">{{ artigo }} - </span>
        <span class="text-body1" v-html="caput"></span>

        <span v-for="artigo in      artigos     " :key="artigo.id">
          <!--<p style="text-align: left;">{{ artigo.artigo }}&nbsp; - &nbsp;<span v-html=artigo.caput></span>
          </p> -->
          <template v-if="artigo.id != null">
            <template v-if="artigo.qordensConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=artigo.qordensConteudos></span> </q-card-section><br>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="artigo.consultasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=artigo.consultasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="artigo.decisoesConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon=""
                label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=artigo.decisoesConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="artigo.recursosConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=artigo.recursosConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>


            <template v-if="artigo.praticasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=artigo.praticasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>


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
            </template>

            <template v-if="inciso.consultasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.consultasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="inciso.decisoesConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon=""
                label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.decisoesConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="inciso.recursosConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.recursosConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template><br>

            <template v-if="inciso.praticasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.praticasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>


            <template v-if="inciso.notasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=inciso.notasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>


            <span v-for="alinea in alineas" :key="alinea.id">
              <template v-if="alinea.id_paragrafo === null && alinea.id_inciso === inciso.id">
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

                <template v-if="alinea.consultasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=alinea.consultasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="alinea.decisoesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon=""
                    label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=alinea.decisoesConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="alinea.recursosConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=alinea.recursosConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="alinea.praticasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=alinea.praticasConteudos></span> </q-card-section>
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
            </template>

            <template v-if="paragrafo.consultasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=paragrafo.consultasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="paragrafo.decisoesConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon=""
                label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=paragrafo.decisoesConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="paragrafo.recursosConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=paragrafo.recursosConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

            <template v-if="paragrafo.praticasConteudos">
              <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                <q-card class="bg-teal-0">
                  <q-card-section>
                    <span v-html=paragrafo.praticasConteudos></span> </q-card-section>
                </q-card>
              </q-expansion-item>
            </template>

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

                <template v-if="inciso.qordensConteudosp">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem"
                    class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.qordensConteudosp></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="inciso.consultasConteudosp">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.consultasConteudosp></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="inciso.decisoesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon=""
                    label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.decisoesConteudosp></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="inciso.recursosConteudosp">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.recursosConteudosp></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="inciso.praticasConteudosp">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Praticas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.praticasConteudosp></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="inciso.notasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=inciso.notasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <span v-for="alinea in alineas" :key="alinea.id">
                  <template v-if="inciso.id === alinea.id_inciso && alinea.id_paragrafo != null">
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

                    <template v-if="alinea.consultasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=alinea.consultasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="alinea.decisoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon=""
                        label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=alinea.decisoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="alinea.recursosConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=alinea.recursosConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="alinea.praticasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=alinea.praticasConteudos></span> </q-card-section>
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

    const parPromise = axios.post("http://18.229.118.205:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
      return this.paragrafos;
    }).catch(err => {
      console.log(err);
    });

    const qosPromise = axios.post("http://18.229.118.205:8686/listqordem").then(res => {
      this.qordens = res.data.map(qordem => ({ ...qordem, showDialog: false }));
      return this.qordens;
    }).catch(err => {
      console.log(err);
    });

    const praPromise = axios.post("http://18.229.118.205:8686/listpratica").then(res => {
      this.praticas = res.data.map(pratica => ({ ...pratica, showDialog: false }));
      return this.praticas;
    }).catch(err => {
      console.log(err);
    });

    const conPromise = axios.post("http://18.229.118.205:8686/listconsulta").then(res => {
      this.consultas = res.data.map(consulta => ({ ...consulta, showDialog: false }));
      return this.consultas;
    }).catch(err => {
      console.log(err);
    });

    const decPromise = axios.post("http://18.229.118.205:8686/listdecisao").then(res => {
      this.decisoes = res.data.map(decisao => ({ ...decisao, showDialog: false }));
      return this.decisoes;
    }).catch(err => {
      console.log(err);
    });

    const recPromise = axios.post("http://18.229.118.205:8686/listrec").then(res => {
      this.recursos = res.data.map(recurso => ({ ...recurso, showDialog: false }));
      return this.recursos;
    }).catch(err => {
      console.log(err);
    });

    const notasPromise = axios.post("http://18.229.118.205:8686/listnota").then(res => {
      this.notas = res.data.map(nota => ({ ...nota, showDialog: false }));
      return this.notas;
    }).catch(err => {
      console.log(err);
    });

    Promise.all([parPromise, notasPromise, incisoPromise, alineaPromise, qosPromise, artigosPromise, artigoPromise,
      praPromise, conPromise, decPromise, recPromise])
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
          const qosDesteParagrafo = this.qordens.filter(qordem => (qopar.id === qordem.id_paragrafo && qordem.id_inciso === null && qordem.id_alinea === null && qordem.id_tipo === 8))
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
          const qosDesteInciso = this.qordens.filter(qordem => (qoinc.id === qordem.id_inciso && qordem.id_paragrafo === null && qordem.id_alinea === null && qordem.id_tipo === 8))
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
        this.incisos.map(qoincp => {
          const qosDesteIncisop = this.qordens.filter(qordem => (qoincp.id === qordem.id_inciso && qordem.id_paragrafo != null && qordem.id_alinea != null && qordem.id_tipo === 8))
          qoincp.qordensConteudosp = null;
          if (!Array.isArray(qosDesteIncisop) || !qosDesteIncisop.length) {
            return qoincp;
          }
          qoincp.showDialog = false;
          qoincp.qordensConteudosp = qosDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoincp;
        });

        this.alineas.map(qoali => {
          const qosDestaAlinea = this.qordens.filter(qordem => (qoali.id === qordem.id_alinea && qordem.id_alinea === null && foqordem.id_tipo === 8))
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

        //pega as práticas

        this.artigos.map(praart => {
          const praDesteArtigo = this.praticas.filter(pratica => (praart.id === pratica.id_artigo && pratica.id_paragrafo === null && pratica.id_inciso === null && pratica.id_alinea === null && pratica.id_tipo === 15))
          praart.praticasConteudos = null;
          if (!Array.isArray(praDesteArtigo) || !praDesteArtigo.length) {
            return praart;
          }
          praart.showDialog = false;
          praart.praticasConteudos = praDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return praart;
        });

        this.paragrafos.map(prapar => {
          const praDesteParagrafo = this.praticas.filter(pratica => (prapar.id === pratica.id_paragrafo && pratica.id_inciso === null && pratica.id_alinea === null && pratica.id_tipo === 15))
          prapar.praticasConteudos = null;
          if (!Array.isArray(praDesteParagrafo) || !praDesteParagrafo.length) {
            return prapar;
          }
          prapar.showDialog = false;
          prapar.praticasConteudos = praDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return prapar;
        });

        this.incisos.map(prainc => {
          const praDesteInciso = this.praticas.filter(pratica => (prainc.id === pratica.id_inciso && pratica.id_paragrafo === null && pratica.id_tipo === 15))
          prainc.praticasConteudos = null;
          if (!Array.isArray(praDesteInciso) || !praDesteInciso.length) {
            return prainc;
          }
          prainc.showDialog = false;
          prainc.praticasConteudos = praDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return prainc;
        });
        this.incisos.map(praincp => {
          const praDesteIncisop = this.praticas.filter(pratica => (praincp.id === pratica.id_inciso && pratica.id_paragrafo != null && pratica.id_tipo === 8))
          praincp.praticasConteudosp = null;
          if (!Array.isArray(praDesteIncisop) || !praDesteIncisop.length) {
            return praincp;
          }
          praincp.showDialog = false;
          praincp.praticasConteudosp = praDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return praincp;
        });
        this.alineas.map(praali => {
          const praDestaAlinea = this.praticas.filter(pratica => (praali.id === pratica.id_alinea && pratica.id_tipo === 15))
          praali.praticasConteudos = null;
          if (!Array.isArray(praDestaAlinea) || !praDestaAlinea.length) {
            return praali;
          }
          praali.showDialog = false;
          praali.praticasConteudos = praDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return praali;
        });
        //pega as consultas

        this.artigos.map(conart => {
          const conDesteArtigo = this.consultas.filter(consulta => (conart.id === consulta.id_artigo && consulta.id_paragrafo === null && consulta.id_inciso === null && consulta.id_alinea === null && consulta.id_tipo === 9))
          conart.consultasConteudos = null;
          if (!Array.isArray(conDesteArtigo) || !conDesteArtigo.length) {
            return conart;
          }
          conart.showDialog = false;
          conart.consultasConteudos = conDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conart;
        });

        this.paragrafos.map(conpar => {
          const conDesteParagrafo = this.consultas.filter(consulta => (conpar.id === consulta.id_paragrafo && consulta.id_inciso === null && consulta.id_alinea === null && consulta.id_tipo === 9))
          conpar.consultasConteudos = null;
          if (!Array.isArray(conDesteParagrafo) || !conDesteParagrafo.length) {
            return conpar;
          }
          conpar.showDialog = false;
          conpar.consultasConteudos = conDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conpar;
        });

        this.incisos.map(coninc => {
          const conDesteInciso = this.consultas.filter(consulta => (coninc.id === consulta.id_inciso && consulta.id_paragrafo === null && consulta.id_tipo === 9))
          coninc.consultasConteudos = null;
          if (!Array.isArray(conDesteInciso) || !conDesteInciso.length) {
            return coninc;
          }
          coninc.showDialog = false;
          coninc.consultasConteudos = conDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return coninc;
        });
        this.incisos.map(conincp => {
          const conDesteIncisop = this.consultas.filter(consulta => (conincp.id === consulta.id_inciso && consulta.id_paragrafo != null && consulta.id_tipo === 8))
          conincp.consultasConteudosp = null;
          if (!Array.isArray(conDesteIncisop) || !conDesteIncisop.length) {
            return conincp;
          }
          conincp.showDialog = false;
          conincp.consultasConteudosp = conDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conincp;
        });
        this.alineas.map(conali => {
          const conDestaAlinea = this.consultas.filter(consulta => (conali.id === consulta.id_alinea && consulta.id_tipo === 9))
          conali.consultasConteudos = null;
          if (!Array.isArray(conDestaAlinea) || !conDestaAlinea.length) {
            return conali;
          }
          conali.showDialog = false;
          conali.consultasConteudos = conDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conali;
        });


        //pega as decisões da Presidência

        this.artigos.map(decpart => {
          const decpDesteArtigo = this.decisoes.filter(decisao => (decpart.id === decisao.id_artigo && decisao.id_paragrafo === null && decisao.id_inciso === null && decisao.id_alinea === null && decisao.id_tipo === 10))
          decpart.decisoesConteudos = null;
          if (!Array.isArray(decpDesteArtigo) || !decpDesteArtigo.length) {
            return decpart;
          }
          decpart.showDialog = false;
          decpart.decisoesConteudos = decpDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpart;
        });

        this.paragrafos.map(decppar => {
          const decpDesteParagrafo = this.decisoes.filter(decisao => (decppar.id === decisao.id_paragrafo && decisao.id_inciso === null && decisao.id_alinea === null && decisao.id_tipo === 10))
          decppar.decisoesConteudos = null;
          if (!Array.isArray(decpDesteParagrafo) || !decpDesteParagrafo.length) {
            return decppar;
          }
          decppar.showDialog = false;
          decppar.decisoesConteudos = decpDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decppar;
        });

        this.incisos.map(decpinc => {
          const decpDesteInciso = this.decisoes.filter(decisao => (decpinc.id === decisao.id_inciso && decisao.id_paragrafo === null && decisao.id_tipo === 10))
          decpinc.decisoesConteudos = null;
          if (!Array.isArray(decpDesteInciso) || !decpDesteInciso.length) {
            return decpinc;
          }
          decpinc.showDialog = false;
          decpinc.decisoesConteudos = decpDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpinc;
        });
        this.incisos.map(decpincp => {
          const decpDesteIncisop = this.decisoes.filter(decisao => (decpincp.id === decisao.id_inciso && decisao.id_paragrafo != null && decisao.id_tipo === 10))
          decpincp.decisoesConteudosp = null;
          if (!Array.isArray(decpDesteIncisop) || !decpDesteIncisop.length) {
            return conincp;
          }
          decpincp.showDialog = false;
          decpincp.decisoesConteudosp = decpDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpincp;
        });
        this.alineas.map(decpali => {
          const decpDestaAlinea = this.decisoes.filter(decisao => (decpali.id === decisao.id_alinea && decisao.id_tipo === 10))
          conali.consultasConteudos = null;
          if (!Array.isArray(conDestaAlinea) || !conDestaAlinea.length) {
            return conali;
          }
          decpali.showDialog = false;
          decpali.decisoesConteudos = decpDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpali;
        });

        //pega os recursos

        this.artigos.map(recart => {
          const recDesteArtigo = this.recusos.filter(recurso => (recart.id === recurso.id_artigo && recurso.id_paragrafo === null && recurso.id_inciso === null && recurso.id_alinea === null && recurso.id_tipo === 12))
          recart.recursosConteudos = null;
          if (!Array.isArray(recDesteArtigo) || !recDesteArtigo.length) {
            return recart;
          }
          recart.showDialog = false;
          recart.recursosConteudos = recDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recart;
        });

        this.paragrafos.map(recpar => {
          const recDesteParagrafo = this.recursos.filter(recurso => (recpar.id === recurso.id_paragrafo && recurso.id_inciso === null && recurso.id_alinea === null && recurso.id_tipo === 12))
          recpar.recursosConteudos = null;
          if (!Array.isArray(recDesteParagrafo) || !recDesteParagrafo.length) {
            return recpar;
          }
          recpar.showDialog = false;
          recpar.recursosConteudos = recDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recpar;
        });

        this.incisos.map(recinc => {
          const recDesteInciso = this.recursos.filter(recurso => (recinc.id === recurso.id_inciso && recurso.id_paragrafo === null && recurso.id_tipo === 12))
          recinc.recursosConteudos = null;
          if (!Array.isArray(recDesteInciso) || !recDesteInciso.length) {
            return recinc;
          }
          recinc.showDialog = false;
          recinc.recursosConteudos = recDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recinc;
        });
        this.incisos.map(recincp => {
          const recDesteIncisop = this.recursos.filter(recurso => (recincp.id === recurso.id_inciso && recurso.id_paragrafo != null && recurso.id_tipo === 12))
          recincp.recursosConteudosp = null;
          if (!Array.isArray(conDesteIncisop) || !conDesteIncisop.length) {
            return conincp;
          }
          recincp.showDialog = false;
          recincp.recursosConteudosp = recDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recincp;
        });
        this.alineas.map(recali => {
          const recDestaAlinea = this.recursos.filter(recurso => (recali.id === recurso.id_alinea && recurso.id_tipo === 12))
          recali.recursosConteudos = null;
          if (!Array.isArray(recDestaAlinea) || !recDestaAlinea.length) {
            return recali;
          }
          recali.showDialog = false;
          recali.recursosConteudos = recDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recali;
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
//atualizar
</script>
