<template>
    <div class="container is-fluid">
  
      <br />
  
      <div class="columns i-centered ">
        <div class="column is-four-fifths">
          <div class="card">
            <h1 class="Cadastro Seção">Cadastro Seção</h1><br>
  
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Título:</label>
              </div>
              <div class="field-body">
                <div class="select is-link">
                  <select name="id_titulo" v-model="id_titulo">
                    <option v-for="titulo in titulos" :key="titulo.id" :value="titulo.id" :title="titulo.id">
                      {{ titulo.titulo }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
  
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Capítulo:</label>
              </div>
              <div class="field-body">
                <div class="select is-link">
                  <p class="control">
                    <select name="id_capitulo" v-model="id_capitulo" style="text-align: left">
                      <template v-for="capitulo in capitulos" :key="capitulo.id">
                        <template v-if="id_titulo === capitulo.id_titulo">
                          <option :value="capitulo.id" :title="capitulo.id">
                            {{ capitulo.capitulo }}
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
                <label class="label">Seção:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input is-info" v-model="secao" type="text" name="secao" placeholder="Seção" />
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
    },
    data() {
      return {
        id_titulo: "",
        id_capitulo: "",
        secao: "",
        titulos: [],
        capitulos: [],
      
      };
    },
    methods: {
      clearpage(){
        this.$router.go('/admin/secaonew')
      }, 
      cadastro() {
        //this.$swal('Cadastro com Sucesso!');
        axios.post("http://localhost:8686/admin/secao/new", {
          id_titulo: this.id_titulo,
          id_capitulo: this.id_capitulo,
          secao: this.secao,        
        }).then(
          this.$swal('Cadastro com Sucesso!'), 
          //this.$router.go('/admin/secaonew')
                                 
        ).catch(err => {
          console.log(err.response);
        });
      }
    },
  
  }
  
  
  </script>
  
  
  
  <style scoped>
    h1 {
    font-size: 30px;
    }
    input {
      width: 772px; 
      align-content: left; 
    }
  
  </style>