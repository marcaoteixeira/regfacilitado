<template>
  <div class="container is-fluid">
    <h1>Edição Capítulo</h1>
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

    axios.get("http://localhost:8686/admin/capitulo/" + this.$route.params.id).then(res => {
      console.log(res);

      this.id = res.data.id;
      this.id_titulo = res.data.id_titulo
      this.capitulo = res.data.capitulo;

    }).catch(err => {
      console.log(err);
      this.$router.push({ name: 'capitulolist' })
    })
  },
    data(){
        return{
            
            id_titulo: '',
            capitulo:'',
            titulos: []

        }
    },
    methods:{
    
      update(){
        axios.put("http://localhost:8686/admin/capitulo/update",{          
          id: this.id,
          id_titulo: this.id_titulo,
          capitulo: this.capitulo                    
        }).then(this.$router.push({name: 'capitulolist'})     
        ).catch(err=> {
          console.log(err);         
        })
        
    }
    }
}
</script>

<style scoped>
</style>