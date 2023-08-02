<template>
  <div class="container is-fluid">
    <h1>Cadastro Facilidades</h1>
    <br />
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="card" >
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Bloco:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_bloco" v-model="id_bloco">
                    <option  v-for="bloco in blocos" :key="bloco.id" :value="bloco.id" :title="bloco.id">
                        {{ bloco.bloco }}
                    </option>         
                  </select>                            
                    
                </p>
              </div>
            </div>
          </div>

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
              <div class="select is-link">
                <p class="control">
                  <select name="id_secao" v-model="id_secao" style="text-align: left">
                    <template v-for="secao in secoes" :key="secao.id">
                      <template v-if="id_titulo == secao.id_titulo && id_capitulo == secao.id_capitulo">
                        <option :value="secao.id" :title="secao.id">
                          {{ secao.secao }}
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
              <label class="label">Subseção:</label>
            </div>
            <div class="field-body">
              <div class="select is-link">
                <p class="control">
                  <select name="id_subsecao" v-model="id_subsecao" style="text-align: left">
                    <template v-for="subsecao in subsecoes" :key="subsecao.id">
                      <template v-if="id_titulo == subsecao.id_titulo && id_capitulo == subsecao.id_capitulo && id_secao == subsecao.id_secao">
                        <option :value="subsecao.id" :title="subsecao.id">
                          {{ subsecao.subsecao }}
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
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_inciso" v-model="id_inciso">                    
                    <template v-for="inciso in incisos" :key="inciso.id">
                      <template v-if="id_artigo === inciso.id_artigo || id_artigo === inciso.id_artigo && id_paragrafo === inciso.id_paragrafo" >
                        <option :value="inciso.id" :title="inciso.id">
                          {{ inciso.inciso }}
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
              <label class="label">Alinea:</label>
            </div>
            <div class="field-body">
              <div  class="select is-link">
                <p class="control">
                  
                  <select name="id_alinea" v-model="id_alinea">                    
                    <template v-for="alinea in alineas" :key="alinea.id">
                      <template v-if="id_inciso === alinea.id_inciso" >
                        <option :value="alinea.id" :title="alinea.id">
                          {{ alinea.alinea }}
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
              <label class="label">Facilidade:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <Editor v-model="facilidade" name="facilidade" placeholder="Digite a facilidade" rows="20"/>                  
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
        axios.post("http://localhost:8686/admin/bloco/list").then(res=>{
           console.log(res)
           this.blocos = res.data;
        }).catch(err =>{
            console.log(err)
        });
        axios.post("http://localhost:8686/admin/titulo/list").then(res=>{
           console.log(res)
           this.titulos = res.data;
        }).catch(err =>{
            console.log(err)
        });
        axios.post("http://localhost:8686/admin/capitulo/list").then(res=>{
           console.log(res)
           this.capitulos = res.data;
        }).catch(err =>{
            console.log(err)
        });
        axios.post("http://localhost:8686/admin/secao/list").then(res=>{
           console.log(res)
           this.secoes = res.data;
        }).catch(err =>{
            console.log(err)
        });
        axios.post("http://localhost:8686/admin/subsecao/list").then(res=>{
           console.log(res)
           this.subsecoes = res.data;
        }).catch(err =>{
            console.log(err)
        });
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
        axios.post("http://localhost:8686/admin/inciso/list").then(res=>{
           console.log(res)
           this.incisos = res.data;
        }).catch(err =>{
            console.log(err)
        });
        axios.post("http://localhost:8686/admin/alinea/list").then(res=>{
           console.log(res)
           this.alineas = res.data;
        }).catch(err =>{
            console.log(err)
        });
    },
    data(){
        return{
            id_bloco: '',
            id_titulo: null,
            id_capitulo: null,
            id_secao: null,
            id_subsecao: null,
            id_alinea: null,
            id_artigo: null,
            id_paragrafo:null,
            id_inciso:null, 
            alinea: [],
            artigos: [],
            blocos:[],
            paragrafos: [],
            incisos:[],
            titulos:[],
            capitulos:[],
            secoes: [],
            subsecoes: []         
        }
    },
    methods:{
    clearpage(){
      this.$router.go('/admin/facilidadenew');
    },   
    cadastro(){
        axios.post("http://localhost:8686/admin/facilidade/new",{
          id_titulo: this.id_titulo,
          id_capitulo: this.id_capitulo,
          id_secao: this.id_secao,
          id_subsecao: this.id_subsecao,
          id_artigo: this.id_artigo,
          id_paragrafo: this.id_paragrafo,
          id_inciso: this.id_inciso,
          id_alinea: this.id_alinea,
          id_bloco: this.id_bloco,
          facilidade: this.facilidade

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