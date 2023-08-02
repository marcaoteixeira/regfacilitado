<template>
  <div class="container is-fluid">
    <h1>Cadastro Parágrafo</h1>
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
              <div class="field">
                <p class="control">
                  <input  class="input is-info" v-model="paragrafo" id="paragrafo" name="paragrafo" placeholder="Digite o paragrafo" rows="10"/>                  
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
    Editor,
   
    
  
},  

  created(){
        axios.post("http://localhost:8686/admin/artigo/list").then(res=>{
           console.log(res)
           this.artigos = res.data;
        }).catch(err =>{
            console.log(err)
        });        
    },
    data(){
        return{
            
            id_artigo: '',
            paragrafos:'',
            paragrafo:'',
            caput:'',
            artigos: []

        }
    },
    methods:{
      
    clearpage(){
      this.$router.go('/admin/paragrafonew')
    },   
    cadastro(){
        axios.post("http://localhost:8686/admin/paragrafo/new",{
          id_artigo: this.id_artigo,
          paragrafo: this.paragrafo, 
          caput: this.caput         
        }).then(
          this.$swal('Cadastro com Sucesso!')
        ).catch(err=> {
            console.log(err.response);
        })
        
    }
    }
}
</script>

<style scoped>
</style>