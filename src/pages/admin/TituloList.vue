<template>
    <div>
        <h1 class="title">Edita Título</h1>
        <div>
            <table class="table" align="center">
                <thead>
                  <tr>
                    <th>Título</th>
                         
                  </tr>
                </thead>
 
                <tbody>
                    <tr v-for="titulo in titulos" :key="titulo.id">
                       
                        <td  style="text-align: left;">{{ titulo.titulo }}</td>                        
                        <td>
                            <router-link :to="{name: 'tituloedit', params:{id: titulo.id}}"><button class="button is-success">Editar</button></router-link>&nbsp;&nbsp;
                            <button class="button is-danger" @click="showModaltitulo(titulo.id)">Excluir</button>
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
                            Você deseja realmente excluir o Título?</p>
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
                            <a href="#" class="card-footer-item" @click="deleteTitulo()">Excluir</a>
                            
                        </footer>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
            </div>

        </div>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
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
            titulos: [],
            showModal: false,
            deleteTituloId: -1
        }

    },
    methods: {
        hideModal(){
            this.showModal = false;
        },
        showModaltitulo(id){
            this.deleteTituloId = id
            this.showModal = true;          
        },
        deleteTitulo(){
            axios.delete("http://localhost:8686/admin/titulo/delete/"+this.deleteTituloId).then(
                this.showModal = false,
                this.titulos = this.titulos.filter(c => c.id != this.deleteTituloId)
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
