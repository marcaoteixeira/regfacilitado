<template>
  <q-page>
    <span v-for="titulo in  titulos " :key="titulo.id">
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-body1" align="center">{{ titulo.titulo }}</div>
          <span v-for="artigo in artigos" :key="artigo.id">
            <template v-if="titulo.id === artigo.id_titulo && artigo.id_capitulo === null">
              <span>

                <q-btn color="black">
                  <router-link :to="{ name: 'artigos', params: { id: artigo.id } }">
                    <span font-color="white">{{ artigo.artigo }}</span>
                  </router-link>
                </q-btn>

              </span>
            </template>
          </span>
          <span v-for="capitulo in  capitulos " :key="capitulo.id">
            <template v-if="titulo.id === capitulo.id_titulo">
              <span>
                <div class="text-capition">{{ capitulo.capitulo }}</div>
              </span>
              <span v-for="artigo in artigos" :key="artigo.id">
                <template v-if="capitulo.id === artigo.id_capitulo && artigo.id_secao === null">
                  <span>

                    <q-btn color="black">
                      <router-link :to="{ name: 'artigos', params: { id: artigo.id } }">
                        <span font-color="white">{{ artigo.artigo }}</span>
                      </router-link>
                    </q-btn>

                  </span>
                </template>
              </span>
              <span v-for="secao in secoes" :key="secao.id">
                <template v-if="capitulo.id === secao.id_capitulo">
                  <div class="text-capition">{{ secao.secao }}</div>
                  <span v-for="artigo in artigos" :key="artigo.id">
                    <template v-if="secao.id === artigo.id_secao && artigo.id_subsecao === null">
                      <span>

                        <q-btn color="black">
                          <router-link :to="{ name: 'artigos', params: { id: artigo.id } }">
                            <span font-color="white">{{ artigo.artigo }}</span>
                          </router-link>
                        </q-btn>

                      </span>
                    </template>
                  </span>
                  <span v-for="subsecao in subsecoes" :key="subsecao.id">
                    <template v-if="secao.id === subsecao.id_secao">
                      <div class="text-capition">{{ subsecao.subsecao }}</div>
                      <span v-for="artigo in artigos" :key="artigo.id">
                        <template v-if="subsecao.id === artigo.id_subsecao">
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
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/subsecao/list").then(res => {
      this.subsecoes = res.data;
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
