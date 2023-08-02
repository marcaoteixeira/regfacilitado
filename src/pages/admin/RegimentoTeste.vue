<template>
  <div class="container is-fluid">

    <br />

    <div class="columns i-centered ">
      <div class="column is-full">
        <div >
          <h1 class="Cadastro Seção">Regimento Teste</h1><br>

          <span v-for="titulo in titulos" :key="titulo.id">
            <p style="text-align: left;">{{ titulo.titulo }}</p><br>

            <span v-for="artigo in artigos" :key="artigo.id">
                      <template v-if="titulo.id === artigo.id_titulo && artigo.id_capitulo === null">
                        <p style="text-align: left;">{{ artigo.artigo }}&nbsp;<span v-html=artigo.caput></span></p><br>
                        <span v-for="inciso in incisos" :key="inciso.id">
                          <template v-if="artigo.id === inciso.id_artigo">
                            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                            <span v-for="alinea in alineas" :key="alinea.id">
                              <template v-if="inciso.id === alinea.id_inciso">
                                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                              </template>
                            </span>
                          </template>
                        </span>

                        <span v-for="paragrafo in paragrafos" :key="paragrafo.id">
                          <template v-if="artigo.id === paragrafo.id_artigo">
                            <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span
                                v-html=paragrafo.caput></span>
                            </p><br>
                            <span v-for="inciso in incisos" :key="inciso.id">
                              <template v-if="paragrafo.id === inciso.id_paragrafo">
                                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span>
                                </p>
                                <span v-for="alinea in alineas" :key="alinea.id">
                                  <template v-if="inciso.id === alinea.id_inciso">
                                    <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                                  </template>
                                </span>
                              </template>
                            </span>
                          </template>
                        </span>
                      </template>
                    </span>






            <span v-for="capitulo in capitulos" :key="capitulo.id">
              <template v-if="titulo.id === capitulo.id_titulo">
                <p style="text-align: left;">{{ capitulo.capitulo }}</p><br>

                <span v-for="secao in secoes" :key="secao.id">

                  <template v-if="titulo.id === secao.id_titulo && capitulo.id === secao.id_capitulo">
                    <br>
                    <p style="text-align: left;">{{ secao.secao }}</p>

                    <span v-for="artigo in artigos" :key="artigo.id">
                      <template v-if="secao.id === artigo.id_secao && artigo.id_subsecao === null">
                        <p style="text-align: left;">{{ artigo.artigo }}&nbsp;<span v-html=artigo.caput></span></p><br>
                        <span v-for="inciso in incisos" :key="inciso.id">
                          <template v-if="artigo.id === inciso.id_artigo">
                            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                            <span v-for="alinea in alineas" :key="alinea.id">
                              <template v-if="inciso.id === alinea.id_inciso">
                                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                              </template>
                            </span>
                          </template>
                        </span>

                        <span v-for="paragrafo in paragrafos" :key="paragrafo.id">
                          <template v-if="artigo.id === paragrafo.id_artigo">
                            <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span
                                v-html=paragrafo.caput></span>
                            </p><br>
                            <span v-for="inciso in incisos" :key="inciso.id">
                              <template v-if="paragrafo.id === inciso.id_paragrafo">
                                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span>
                                </p>
                                <span v-for="alinea in alineas" :key="alinea.id">
                                  <template v-if="inciso.id === alinea.id_inciso">
                                    <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                                  </template>
                                </span>
                              </template>
                            </span>
                          </template>
                        </span>
                      </template>
                    </span>


                    <span v-for="subsecao in subsecoes" :key="subsecao.id">
                      <template
                        v-if="titulo.id === subsecao.id_titulo && capitulo.id === subsecao.id_capitulo && secao.id === subsecao.id_secao">
                        <p style="text-align: left;">{{ subsecao.subsecao }}</p>

                        <span v-for="artigo in artigos" :key="artigo.id">
                          <template v-if="subsecao.id === artigo.id_subsecao">
                            <p style="text-align: left;">{{ artigo.artigo }}&nbsp;<span v-html=artigo.caput></span></p>
                            <br>
                            <span v-for="inciso in incisos" :key="inciso.id">
                              <template v-if="artigo.id === inciso.id_artigo">
                                <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span>
                                </p>
                                <span v-for="alinea in alineas" :key="alinea.id">
                                  <template v-if="inciso.id === alinea.id_inciso">
                                    <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                                  </template>
                                </span>
                              </template>
                            </span>

                            <span v-for="paragrafo in paragrafos" :key="paragrafo.id">
                              <template v-if="artigo.id === paragrafo.id_artigo">
                                <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span
                                    v-html=paragrafo.caput></span>
                                </p><br>
                                <span v-for="inciso in incisos" :key="inciso.id">
                                  <template v-if="paragrafo.id === inciso.id_paragrafo">
                                    <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span
                                        v-html=inciso.caput></span>
                                    </p>
                                    <span v-for="alinea in alineas" :key="alinea.id">
                                      <template v-if="inciso.id === alinea.id_inciso">
                                        <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
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
                  </template>

                </span>

                <span v-for="artigo in artigos" :key="artigo.id">
                  <template v-if="capitulo.id === artigo.id_capitulo">
                    <p style="text-align: left;">{{ artigo.artigo }}&nbsp;<span v-html=artigo.caput></span></p><br>
                    <span v-for="inciso in incisos" :key="inciso.id">
                      <template v-if="artigo.id === inciso.id_artigo">
                        <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                        <span v-for="alinea in alineas" :key="alinea.id">
                          <template v-if="inciso.id === alinea.id_inciso">
                            <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
                          </template>
                        </span>
                      </template>
                    </span>

                    <span v-for="paragrafo in paragrafos" :key="paragrafo.id">
                      <template v-if="artigo.id === paragrafo.id_artigo">
                        <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span v-html=paragrafo.caput></span>
                        </p><br>
                        <span v-for="inciso in incisos" :key="inciso.id">
                          <template v-if="paragrafo.id === inciso.id_paragrafo">
                            <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>
                            <span v-for="alinea in alineas" :key="alinea.id">
                              <template v-if="inciso.id === alinea.id_inciso">
                                <p style="text-align: left;"><span v-html=alinea.alinea></span></p>
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

          </span>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  //components: {
  // SelectComponent
  // },
  created() {

    axios.post("http://localhost:8686/admin/titulo/list").then(res => {
      console.log(res);
      this.titulos = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://localhost:8686/admin/capitulo/list").then(res => {
      console.log(res);
      this.capitulos = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://localhost:8686/admin/secao/list").then(res => {
      console.log(res);
      this.secoes = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://localhost:8686/admin/subsecao/list").then(res => {
      console.log(res);
      this.subsecoes = res.data;

    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/artigo/list").then(res => {
      console.log(res);
      this.artigos = res.data;
      //console.log(this.artigos);
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/inciso/list").then(res => {
      console.log(res);
      this.incisos = res.data;
      //console.log(this.artigos);
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
      //console.log(this.artigos);
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://localhost:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
      //console.log(this.artigos);
    }).catch(err => {
      console.log(err);
    });
  },
  data() {
    return {
      art: '',
      titulos: [],
      capitulos: [],
      secoes: [],
      subsecoes: [],
      artigos: [],
      paragrafos: [],
      incisos: [],
      alineas: []
    }
  },
  methods: {


  },

}

// commit 
</script>



<style scoped>
h1 {
  font-size: 30px;
}

input {
  width: 772px;
  align-content: left;
}</style>
