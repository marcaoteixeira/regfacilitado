<template>
  <div class="container is-fluid">
    <h1>Edição Seção</h1>
    <br />
    <div class="columns is-centered">
      <div class="column is-full">
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
              <div class="field">
                <p class="control">
                  <input
                    class="input is-info"
                    v-model="secao"
                    type="text"
                    name="secao"
                    placeholder="Seção"
                  />
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
export default {

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

    axios.get("http://localhost:8686/admin/secao/" + this.$route.params.id).then(res => {
      console.log(res);
      
      this.id = res.data.id;
      this.id_titulo = res.data.id_titulo
      this.id_capitulo = res.data.id_capitulo
      this.secao = res.data.secao;

    }).catch(err => {
      console.log(err);
      this.$router.push({ name: 'secaolist' })
    })
  },
    data(){
        return{
            
            id_titulo: '',
            id_capitulo: '',           
            secao:'',
            titulos: [],
            capitulos: [],
            

        }
    },
    methods:{
    
      update(){
        axios.put("http://localhost:8686/admin/secao/update",{          
          id: this.id,
          id_titulo: this.id_titulo,
          id_capitulo: this.id_capitulo,
          secao: this.secao                    
        }).then(this.$router.push({name: 'secaolist'})     
        ).catch(err=> {
          console.log(err);         
        })
        
    }
    }
}
</script>

<style scoped>
</style>