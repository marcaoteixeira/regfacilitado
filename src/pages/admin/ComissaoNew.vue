<template>
  <div class="container is-fluid">
    <h1>Cadastro de Comissões</h1>
    <br />
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Comissão:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="comissao"
                    type="text"
                    name="comissao"
                    style="min-width: 50px"
                    placeholder="Nome da Comissão"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Sigla:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="sigla"
                    type="text"
                    name="sigla"
                    placeholder="Sigla da Comissão"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Número de Membros:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="membros"
                    type="number"
                    name="membros"
                    placeholder="Número de membros"
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
            comissao: '',
            sigla:'',
            membros: 0

        }
    },
    methods:{
    cadastro(){
        axios.post("http://localhost:8686/admin/comissao/new",{
          comissao: this.comissao,
          sigla: this.sigla,
          membros: this.membros
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