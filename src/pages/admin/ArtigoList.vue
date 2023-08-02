<template>
    <div>
        <h1 class="title">Edita Artigo</h1>
        <div>
            <table class="table" align="center">
                <thead>
                  <tr>
                    <th>Artigos</th>
                         
                  </tr>
                </thead>
 
                <tbody>
                    <tr v-for="artigo in artigos" :key="artigo.id">
                        <td  style="text-align: left;">{{ artigo.artigo }}<p v-html= artigo.conteudo></p></td>                        
                        <td>
                            <router-link :to="{name: 'artigoedit', params:{id: artigo.id}}"><button class="button is-success">Editar</button></router-link>&nbsp;&nbsp;
                            <button class="button is-danger" @click="showModalartigo(artigo.id)">Excluir</button>
                        </td>
                    </tr> 
                </tbody>
            </table>           

            <div :class="{modal: true, 'is-active': showModal}">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                            Você deseja realmente excluir o Artigo?</p>
                            <button class="card-header-icon" aria-label="more options">
                            <span class="icon">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <img src="../../../public/img/warning.jpg" alt="Atenção">                     
                            <br>                            
                            </div>
                        </div>
                        <footer class="card-footer">
                            
                            <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
                            <a href="#" class="card-footer-item" @click="deleteArtigo()">Excluir</a>
                            
                        </footer>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
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
            artigos: [],
            showModal: false,
            deleteArtigoId: -1
        }

    },
    methods: {
        hideModal(){
            this.showModal = false;
        },
        showModalartigo(id){
            this.deleteArtigoId = id
            this.showModal = true;          
        },
        deleteArtigo(){
            axios.delete("http://localhost:8686/admin/artigo/delete/"+this.deleteArtigoId).then(
                this.showModal = false,
                this.artigo = this.artigos.filter(c => c.id != this.deleteArtigoId)
            ).catch(error => {
                console.log(error);
                this.showModal = false;
            });
        }

    },
}
</script>
<style scoped>

</style>
