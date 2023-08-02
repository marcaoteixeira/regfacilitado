<template>
  <div class="container is-fluid">
    <h1>Cadastro de Titulos</h1>
    <br />
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Título:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="titulo"
                    type="text"
                    name="comissao"
                    style="min-width: 50px"
                    placeholder="Título"
                  />
                </p>
              </div>
            </div>
          </div>
          <button class="button is-info" @click="cadastro">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {  
    data(){
        return{
            titulo: '',         

        }
    },
    methods:{
    cadastro(){
        axios.post("http://localhost:8686/admin/titulo/new",{
          titulo: this.titulo          
        }).then(res=>{
            console.log(res);
        }).catch(err=> {
            console.log(err.response);
        })
        
    }
    }
}
</script>

<style scoped>
</style>