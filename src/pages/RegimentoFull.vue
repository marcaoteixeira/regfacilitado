<template>
  <q-page>
    <span v-for="titulo in  titulos " :key="titulo.id">
      <q-card>
        <q-card-section>
          <div class="text-body1" align="center">{{ titulo.titulo }}</div><br>
          <span v-for="artigo in artigos" :key="artigo.id">
            <template v-if="titulo.id === artigo.id_titulo && artigo.id_capitulo === null">

              <span font-color="white">{{ artigo.artigo }}</span>
              <span v-html=artigo.caput></span><br>

              <span v-for="conteudo in conteudos" :key="conteudo.id">
                <template
                  v-if="conteudo.id_artigo === artigo.id && conteudo.id_paragrafo === null && conteudo.id_inciso === null && conteudo.id_alinea == null">
                  <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                </template>
              </span>

              <span v-for="     inciso      in      incisos     " :key="inciso.id">
                <template v-if="id === inciso.id_artigo && inciso.id_paragrafo === null">
                  <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                  <span v-for="conteudo in conteudos" :key="conteudo.id">
                    <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                      <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                    </template>
                  </span>
                  <span v-for="alinea in alineas" :key="alinea.id">
                    <template v-if="alinea.id_inciso === inciso.id">
                      <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                      <span v-for="conteudo in conteudos" :key="conteudo.id">
                        <template v-if="conteudo.id_alinea == alinea.id">
                          <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                        </template>
                      </span>
                    </template>
                  </span>
                </template>
              </span>

              <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">
                <template v-if="artigo.id === paragrafo.id_artigo">
                  <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span v-html=paragrafo.caput></span></p>
                  <span v-for="conteudo in conteudos" :key="conteudo.id">
                    <template v-if="conteudo.id_paragrafo === paragrafo.id">
                      <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                    </template>
                  </span>
                  <span v-for="      inciso       in       incisos      " :key="inciso.id">
                    <template v-if="paragrafo.id === inciso.id_paragrafo">

                      <span v-for="conteudo in conteudos" :key="conteudo.id">
                        <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                          <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                        </template>
                      </span>
                      <span v-for="alinea in alineas" :key="alinea.id">
                        <template v-if="inciso.id === alinea.id_inciso">
                          <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                          <span v-for="conteudo in conteudos" :key="conteudo.id">
                            <template v-if="conteudo.id_alinea === alinea.id">
                              <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                            </template>
                          </span>

                        </template>
                      </span>

                    </template>
                  </span>
                </template>
              </span>


            </template>
          </span>
          <span v-for="capitulo in  capitulos " :key="capitulo.id">
            <template v-if="titulo.id === capitulo.id_titulo">
              <span>
                <div class="text-capition">{{ capitulo.capitulo }}</div><br>
              </span>
              <span v-for="artigo in artigos" :key="artigo.id">
                <template v-if="capitulo.id === artigo.id_capitulo && artigo.id_secao === null">
                  <span>

                    <span font-color="white">{{ artigo.artigo }}</span>
                    <span v-html=artigo.caput></span><br><br>

                    <span v-for="conteudo in conteudos" :key="conteudo.id">
                      <template
                        v-if="conteudo.id_artigo === artigo.id && conteudo.id_paragrafo === null && conteudo.id_inciso === null && conteudo.id_alinea == null">
                        <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                      </template>
                    </span>

                    <span v-for="     inciso      in      incisos     " :key="inciso.id">
                      <template v-if="artigo.id === inciso.id_artigo && inciso.id_paragrafo === null">
                        <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                        <span v-for="conteudo in conteudos" :key="conteudo.id">
                          <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                            <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                          </template>
                        </span>

                        <span v-for="alinea in alineas" :key="alinea.id">
                          <template v-if="alinea.id_inciso === inciso.id">
                            <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                            <span v-for="conteudo in conteudos" :key="conteudo.id">
                              <template v-if="conteudo.id_alinea === alinea.id">
                                <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                              </template>
                            </span>
                          </template>
                        </span>
                      </template>
                    </span>
                    <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">
                      <template v-if="artigo.id === paragrafo.id_artigo">
                        <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span v-html=paragrafo.caput></span>
                        </p>
                        <span v-for="conteudo in conteudos" :key="conteudo.id">
                          <template v-if="conteudo.id_paragrafo === paragrafo.id">
                            <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                          </template>
                        </span>
                        <span v-for="      inciso       in       incisos      " :key="inciso.id">
                          <template v-if="paragrafo.id === inciso.id_paragrafo">
                            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                            <span v-for="conteudo in conteudos" :key="conteudo.id">
                              <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                                <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                              </template>
                            </span>
                            <span v-for="alinea in alineas" :key="alinea.id">
                              <template v-if="alinea.id_inciso === inciso.id">
                                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                                <span v-for="conteudo in conteudos" :key="conteudo.id">
                                  <template v-if="conteudo.id_alinea === alinea.id">
                                    <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                  </template>
                                </span>

                              </template>
                            </span>

                          </template>
                        </span>
                      </template>
                    </span>

                  </span>

                </template>
              </span>
              <span v-for="secao in secoes" :key="secao.id">

                <template v-if="capitulo.id === secao.id_capitulo">
                  <div class="text-capition">{{ secao.secao }}</div><br>
                  <span v-for="artigo in artigos" :key="artigo.id">
                    <template v-if="secao.id === artigo.id_secao && artigo.id_subsecao === null">
                      <span>
                        <span font-color="white">{{ artigo.artigo }}</span>
                        <span v-html=artigo.caput></span><br><br>

                        <span v-for="conteudo in conteudos" :key="conteudo.id">
                          <template
                            v-if="conteudo.id_artigo === artigo.id && conteudo.id_paragrafo === null && conteudo.id_inciso === null && conteudo.id_alinea == null">
                            <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                          </template>
                        </span>

                        <span v-for="     inciso      in      incisos     " :key="inciso.id">
                          <template v-if="artigo.id === inciso.id_artigo && inciso.id_paragrafo === null">
                            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                            <span v-for="conteudo in conteudos" :key="conteudo.id">
                              <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                                <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                              </template>
                            </span>

                            <span v-for="alinea in alineas" :key="alinea.id">
                              <template v-if="alinea.id_inciso === inciso.id">
                                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                                <span v-for="conteudo in conteudos" :key="conteudo.id">
                                  <template v-if="conteudo.id_alinea === alinea.id">
                                    <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                  </template>
                                </span>

                              </template>
                            </span>
                          </template>
                        </span>

                        <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">
                          <template v-if="artigo.id === paragrafo.id_artigo">
                            <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span
                                v-html=paragrafo.caput></span>
                            </p>
                            <span v-for="conteudo in conteudos" :key="conteudo.id">
                              <template v-if="conteudo.id_paragrafo === paragrafo.id">
                                <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                              </template>
                            </span>
                            <span v-for="      inciso       in       incisos      " :key="inciso.id">
                              <template v-if="paragrafo.id === inciso.id_paragrafo">
                                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span>
                                </p>
                                <span v-for="conteudo in conteudos" :key="conteudo.id">
                                  <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                                    <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                  </template>
                                </span>
                                <span v-for="alinea in alineas" :key="alinea.id">
                                  <template v-if="alinea.id_inciso === inciso.id">

                                    <span v-for="conteudo in conteudos" :key="conteudo.id">
                                      <template v-if="conteudo.id_alinea === alinea.id">
                                        <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                      </template>
                                    </span>

                                  </template>
                                </span>

                              </template>
                            </span>
                          </template>
                        </span>


                      </span>
                    </template>
                  </span>
                  <span v-for="subsecao in subsecoes" :key="subsecao.id">
                    <template v-if="secao.id === subsecao.id_secao">
                      <div class="text-capition">{{ subsecao.subsecao }}</div>
                      <span v-for="artigo in artigos" :key="artigo.id">
                        <template v-if="subsecao.id === artigo.id_subsecao">
                          <span>

                            <span font-color="white">{{ artigo.artigo }}</span>
                            <span v-html=artigo.caput></span><br><br>

                            <span v-for="conteudo in conteudos" :key="conteudo.id">
                              <template
                                v-if="conteudo.id_artigo === artigo.id && conteudo.id_paragrafo === null && conteudo.id_inciso === null && conteudo.id_alinea == null">
                                <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                              </template>
                            </span>

                            <span v-for="     inciso      in      incisos     " :key="inciso.id">
                              <template v-if="artigo.id === inciso.id_artigo">
                                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span>
                                </p>
                                <span v-for="conteudo in conteudos" :key="conteudo.id">
                                  <template v-if="conteudo.id_inciso === inciso.id && conteudo.id_alinea === null">
                                    <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                  </template>
                                </span>
                                <span v-for="alinea in alineas" :key="alinea.id">
                                  <template v-if="alinea.id_paragrafo === null && alinea.id_inciso === inciso.id">
                                    <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                                    <span v-for="conteudo in conteudos" :key="conteudo.id">
                                      <template v-if="conteudo.id_alinea === alinea.id">
                                        <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                      </template>
                                    </span>
                                  </template>
                                </span>
                              </template>
                            </span>

                            <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">
                              <template v-if="artigo.id === paragrafo.id_artigo">
                                <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span
                                    v-html=paragrafo.caput></span>
                                </p>
                                <span v-for="conteudo in conteudos" :key="conteudo.id">
                                  <template v-if="conteudo.id_paragrafo === paragrafo.id">
                                    <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                  </template>
                                </span>
                                <span v-for="      inciso       in       incisos      " :key="inciso.id">
                                  <template v-if="paragrafo.id === inciso.id_paragrafo">

                                    <span v-for="conteudo in conteudos" :key="conteudo.id">
                                      <template v-if="conteudo.id_inciso === inciso.id">
                                        <b font-color="blue"><span font-color="blue" v-html=conteudo.conteudo></span></b>
                                      </template>
                                    </span>
                                    <span v-for="alinea in alineas" :key="alinea.id">
                                      <template v-if="inciso.id === alinea.id_inciso && alinea.id_paragrafo != null">

                                        <span v-for="conteudo in conteudos" :key="conteudo.id">
                                          <template v-if="conteudo.id_alinea === alinea.id">
                                            <b font-color="blue"><span font-color="blue"
                                                v-html=conteudo.conteudo></span></b>
                                          </template>
                                        </span>

                                      </template>
                                    </span>

                                  </template>
                                </span>
                              </template>
                            </span>

                          </span>
                        </template>
                      </span>
                    </template>
                  </span>
                </template>
              </span>

            </template>

          </span>
        </q-card-section>
      </q-card>
      <br />
    </span>
  </q-page>
</template>

<script>
import {
  defineComponent
} from "vue";
import axios from "axios";
import { runSequentialPromises } from "quasar";

export default defineComponent({
  created() {
    const tituloPromise = axios
      .post("http://localhost:8686/admin/titulo/list")
      .then((res) => {
        this.titulos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    const capituloPromise = axios
      .post("http://localhost:8686/admin/capitulo/list")
      .then((res) => {
        this.capitulos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    const secaoPoromise = axios.post("http://localhost:8686/admin/secao/list").then(res => {
      this.secoes = res.data;
      this.secoes = this.secoes.filter(c => c.id_capitulo === this.capitulo.id)
    }).catch(err => {
      console.log(err);
    });

    const subsecaoPoromise = axios.post("http://localhost:8686/admin/subsecao/list").then(res => {
      this.subsecoes = res.data;
      this.subsecoes = this.subsecoes.filter(c => c.id_secao === this.secao.id)

    }).catch(err => {
      console.log(err);
    });

    const artigoPromise = axios
      .post("http://localhost:8686/admin/artigo/list")
      .then((res) => {
        console.log(res)
        this.artigos = res.data;

      })
      .catch((err) => {
        console.log(err);
      });

    const paragrafoPromise = axios
      .post("http://localhost:8686/admin/paragrafo/list")
      .then((res) => {
        console.log(res)
        this.paragrafos = res.data;

      })
      .catch((err) => {
        console.log(err);
      });
    const incisoPromise = axios
      .post("http://localhost:8686/admin/inciso/list")
      .then((res) => {
        console.log(res)
        this.incisos = res.data;

      })
      .catch((err) => {
        console.log(err);
      });
    const alineaPromise = axios
      .post("http://localhost:8686/admin/alinea/list")
      .then((res) => {
        console.log(res)
        this.alineas = res.data;

      })
      .catch((err) => {
        console.log(err);
      });

    const conteudoPromise = axios.post("http://localhost:8686/admin/conteudo/list").then(res => {
      this.conteudos = res.data;

    }).catch(err => {
      console.log(err);
    });

    const qosPromise = axios.post("http://localhost:8686/listqordem").then(res => {
      this.qordens = res.data.map(qordem => ({ ...qordem, showDialog: false }));
      return this.qordens;
    }).catch(err => {
      console.log(err);
    });

    Promise.all([tituloPromise, capituloPromise, secaoPoromise, subsecaoPoromise, artigoPromise,
      paragrafoPromise, incisoPromise, alineaPromise, conteudoPromise, qosPromise])

  },


  data() {
    return {

      id: '',
      titulos: [],
      capitulos: [],
      secoes: [],
      subsecoes: [],
      artigos: [],
      paragrafos: [],
      incisos: [],
      alineas: [],
      conteudos: []


    }

  },
});
//iyiyuiyui
</script>
<style scoped>
q-btn {
  background-color: #0c8367;
}

a {
  color: white;
  text-decoration: none;
}
</style>
