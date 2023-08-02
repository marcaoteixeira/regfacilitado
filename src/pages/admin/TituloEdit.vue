<template>
  <div class="container is-fluid">
    <h1>Ediçao de Titulos</h1>
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
                    v-model= "titulo"
                    type="text"
                    name="titulo"
                    style="min-width: 50px"
                    placeholder="Título"
                  />
                </p>
              </div>
            </div>
          </div>
          <button class="button is-info" @click="update">Atualizar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created(){
    axios.get("http://localhost:8686/admin/titulo/"+ this.$route.params.id).then(res=>{
      console.log(res); 
      
      this.id = res.data.id;
      this.titulo = res.data.titulo;            
      
    }).catch(err => {
      console.log(err);
      this.$router.push({name: 'titulolist'})
    })
  },
   data(){
        return{
            id: -1,
            titulo: '',            

        }
    },
    methods:{
    update(){
        axios.put("http://localhost:8686/admin/titulo/update",{          
          id: this.id,
          titulo: this.titulo,          
        }).then(this.$router.push({name: 'titulolist'})     
        ).catch(err=> {
          console.log(err);         
        })
        
    }
    }
}
</script>

<style scoped>
</style>