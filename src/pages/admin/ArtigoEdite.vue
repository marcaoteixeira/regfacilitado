<template>
  <div class="container is-fluid">
    <h1>Edição Artigo</h1>
    <br />
    <div class="columns is-left">
      <div class="column is-full">
        <div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Título:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_titulo" v-model="id_titulo">
                    <option  v-for="titulo in titulos" :key="titulo.id" :value="titulo.id" :title="titulo.id">
                        {{ titulo.titulo }}
                    </option>           
                  
                  </select>
                             
                    
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Capítulo:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_capitulo" v-model="id_capitulo">
                    <option  v-for="capitulo in capitulos" :key="capitulo.id" :value="capitulo.id" :title="capitulo.id">
                        {{ capitulo.capitulo }}
                    </option>             
                  
                  </select>
                             
                    
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Seção:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_secao" v-model="id_secao">
                    <option  v-for="secao in secoes" :key="secao.id" :value="secao.id" :title="secao.id">
                        {{ secao.secao }}
                    </option>             
                  
                  </select>
                             
                    
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subseção:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_subsecao" v-model="id_subsecao">
                    <option  v-for="subsecao in subsecoes" :key="subsecao.id" :value="subsecao.id" :title="subsecao.id">
                        {{ subsecao.subsecao }}
                    </option>             
                  
                  </select>
                             
                    
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Artigo:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="artigo"
                    type="text"
                    name="artigo"
                    placeholder="Artigo"
                  />
                </p>
              </div>
            </div>
          </div> 
          
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Caput:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <Editor v-model="caput" id="conteudo" name="caput" placeholder="Caput do Artigo" rows="15"/>
                  <!-- <textarea class="textarea is-link" v-model="conteudo" id="conteudo" name="conteudo" placeholder="Digite o conteúdo do Artigo" rows="10"></textarea> -->
                  
                </p>
              </div>
            </div>
          </div>

          <button class="button is-info" @click="update">Alterar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'App',
  components: {
    Editor
  }, 

  created() {
    axios.post("http://localhost:8686/admin/titulo/list").then(res => {
      console.log(res)
      this.titulos = res.data;
    }).catch(err => {
      console.log(err)
    });
    
    axios.post("http://localhost:8686/admin/capitulo/list").then(res => {
      console.log(res)
      this.capitulos = res.data;
    }).catch(err => {
      console.log(err)
    });

    axios.post("http://localhost:8686/admin/secao/list").then(res => {
      console.log(res)
      this.secoes = res.data;
    }).catch(err => {
      console.log(err)
    });

    axios.post("http://localhost:8686/admin/subsecao/list").then(res => {
      console.log(res)
      this.subsecoes = res.data;
    }).catch(err => {
      console.log(err)
    });

    axios.get("http://localhost:8686/admin/artigo/" + this.$route.params.id).then(res => {
      
      console.log(res); 

      this.id = res.data.id;
      this.id_titulo = res.data.id_titulo
      this.id_capitulo = res.data.id_capitulo
      this.id_secao = res.data.id_secao
      this.id_subsecao = res.data.id_subsecao;
      this.artigo = res.data.artigo
      this.caput = res.data.caput

    }).catch(err => {
      console.log(err);
      this.$router.push({ name: 'artigolist' })
    })
  },
    data(){
        return{
            
            id_titulo: '',
            id_capitulo: '',
            id_secao:'',
            id_subsecao: '',
            artigo:'',
            caput:'',
            titulos: [],
            capitulos: [],
            secoes: [],
            subsecoes: []

        }
    },
    methods:{
    
      update(){
        axios.put("http://localhost:8686/admin/artigo/update",{          
          id: this.id,
          id_titulo: this.id_titulo,
          id_capitulo: this.id_capitulo,
          id_secao: this.id_secao,
          id_subsecao: this.id_subsecao,
          artigo: this.artigo,
          caput: this.caput                  
        }).then(this.$router.push({name: 'artigolist'})     
        ).catch(err=> {
          console.log(err);         
        })
        
    }
    }
}
</script>

<style scoped>
</style>