<template>
  <q-page>
    <h6 align="center">Regimento</h6>

    <span v-for="titulo in  titulos " :key="titulo.id">
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-body1" align="center">{{ titulo.titulo }}</div>
          <span v-for="artigo in artigos" :key="artigo.id">
            <template v-if="titulo.id === artigo.id_titulo && artigo.id_capitulo === null">
              <span>
                <q-btn color="black">{{ artigo.artigo }}</q-btn>&nbsp;
              </span>
            </template>
          </span>
          <span v-for="capitulo in  capitulos " :key="capitulo.id">
            <template v-if="titulo.id === capitulo.id_titulo">
              <span>
                <div class="text-capition">{{ capitulo.capitulo }}</div>
              </span>
              <span v-for="secao in secoes" :key="secao.id">
                <template v-if="titulo.id === secao.id_titulo && capitulo.id === secao.id_capitulo">
                  <div class="text-capition">{{ secao.secao }}</div>
                  <span v-for="artigo in artigos" :key="artigo.id">
                    <template v-if="secao.id === artigo.id_secao && artigo.id_subsecao === null">
                      <span>
                        <q-btn color="black">{{ artigo.artigo }}</q-btn>&nbsp;
                      </span>
                    </template>
                  </span>
                  <span v-for="subsecao in subsecoes" :key="subsecao.id">
                    <template v-if="titulo.id === subsecao.id_titulo && capitulo.id === subsecao.id_capitulo">
                      <div class="text-capition">{{ subsecao.subsecao }}</div>
                      <span v-for="artigo in artigos" :key="artigo.id">
                        <template v-if="subsecao.id === artigo.id_subsecao">
                          <span>
                            <q-btn color="black">{{ artigo.artigo }}</q-btn>&nbsp;
                          </span>
                        </template>
                      </span>
                    </template>
                  </span>
                </template>
              </span>
              <span v-for="artigo in  artigos " :key="artigo.id">
                <template v-if="capitulo.id === artigo.id_capitulo">
                  <span>

                    <q-btn color="black">
                      <router-link :to="{ name: 'artigos', params: { id: artigo.id } }">
                        <span font-color="white">{{ artigo.artigo }}</span>
                      </router-link>
                    </q-btn>

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
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  created() {
    axios
      .post("http://18.229.118.205:8686/admin/titulo/list")
      .then((res) => {
        this.titulos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://18.229.118.205:8686/admin/artigo/list")
      .then((res) => {
        console.log(res)
        this.artigos = res.data;
        console.log(artigos)
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://18.229.118.205:8686/admin/capitulo/list")
      .then((res) => {
        this.capitulos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios.post("http://18.229.118.205:8686/admin/secao/list").then(res => {
      this.secoes = res.data;
      this.secoes = this.secoes.filter(c => c.id_capitulo === this.capitulo.id)
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/subsecao/list").then(res => {
      this.subsecoes = res.data;
      this.subsecoes = this.subsecoes.filter(c => c.id_secao === this.secao.id)

    }).catch(err => {
      console.log(err);
    });

  },
  data() {
    return {

      id: '',
      titulos: [],
      capitulos: [],
      secoes: [],
      subsecoes: [],
      artigos: []


    }

  },
});
</script>
