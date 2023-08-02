<template>
  <div class="container is-fluid">
    <h1>Cadastro Capítulo</h1>
    <br />
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
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
              <label class="label">Capitulo:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="capitulo"
                    type="text"
                    name="capitulo"
                    placeholder="Capitulo"
                  />
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
export default {

  created(){
        axios.post("http://localhost:8686/admin/titulo/list").then(res=>{
           console.log(res)
           this.titulos = res.data;
        }).catch(err =>{
            console.log(err)
        });        
    },
    data(){
        return{
            
            id_titulo: '',
            capitulo:'',
            titulos: []

        }
    },
    methods:{
    clearpage(){
        this.$router.go('/admin/capitulonew')
    },    
    cadastro(){
        axios.post("http://localhost:8686/admin/capitulo/new",{
          id_titulo: this.id_titulo,
          capitulo: this.capitulo          
        }).then(
            this.$swal('Cadastro com Sucesso!') 
            //console.log(res);
        ).catch(err=> {
            console.log(err.response);
        })
        
    }
    }
}
</script>

<style scoped>
</style>