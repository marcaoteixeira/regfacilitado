<template>
  <div class="container is-fluid">
    <h1>Cadastro Inciso</h1>
    <br />
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="card" >
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Artigo:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_artigo" v-model="id_artigo">
                    <option  v-for="artigo in artigos" :key="artigo.id" :value="artigo.id" :title="artigo.id">
                        {{ artigo.artigo }}
                    </option>         
                  </select>                            
                    
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Parágrafo:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_paragrafo" v-model="id_paragrafo">                    
                    <template v-for="paragrafo in paragrafos" :key="paragrafo.id">
                      <template v-if="id_artigo === paragrafo.id_artigo">
                        <option :value="paragrafo.id" :title="paragrafo.id">
                          {{ paragrafo.paragrafo }}
                        </option>
                      </template>
                    </template>                     

                  </select>
                             
                    
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Inciso:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input  class="input is-info" v-model="inciso" id="inciso" name="inciso" placeholder="Digite o inciso">                   
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
                  <Editor v-model="caput" id="caput" name="caput" placeholder="Digite o caput" rows="10"/>
                  
                </p>
              </div>
            </div>
          </div>       

          <button class="button is-info" @click="cadastro">Cadastrar</button>&nbsp;&nbsp; <button class="button is-success" @click="clearpage">Limpar</button>
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

  created(){
        axios.post("http://localhost:8686/admin/artigo/list").then(res=>{
           console.log(res)
           this.artigos = res.data;
        }).catch(err =>{
            console.log(err)
        });

        axios.post("http://localhost:8686/admin/paragrafo/list").then(res=>{
           console.log(res)
           this.paragrafos = res.data;
        }).catch(err =>{
            console.log(err)
        });
    },
    data(){
        return{
            id_artigo: '',
            id_paragrafo:null, 
            inciso:'',
            caput:'',
            incisos:'',
            artigos: [],
            paragrafos: []

        }
    },
    methods:{
    clearpage(){
      this.$router.go('/admin/incisonew');
    },   
    cadastro(){
        axios.post("http://localhost:8686/admin/inciso/new",{
          id_artigo: this.id_artigo,
          id_paragrafo: this.id_paragrafo,
          caput: this.caput,
          inciso: this.inciso        
        }).then(this.$swal('Cadastro com Sucesso!'))
        .catch(err=> {
            console.log(err.response);
        })
        
    }
    }
}
</script>

<style scoped>
</style>