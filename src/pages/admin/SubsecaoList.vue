<template>
    <div class="container is-fluid">

        <br />

        <div class="columns i-centered ">
            <div class="column is-four-fifths">
                <div class="card">
                    <h1 class="Cadastro Seção">Edita Subseção</h1><br>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Título:</label>
                        </div>
                        <div class="field-body">
                            <div class="select is-link">
                                <select name="id_titulo" v-model="id_titulo">
                                    <option v-for="titulo in titulos" :key="titulo.id" :value="titulo.id"
                                        :title="titulo.id">
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
                                            <template v-if="id_capitulo === secao.id_capitulo">
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


                </div>

                <table class="table is-striped" align="right">
                    <thead>
                        <tr>
                            <th>Subseções</th>
                        </tr>
                    </thead>

                    <tbody class="tdright">
                        <template v-for="subsecao in subsecoes" :key="subsecao.id">
                            <tr align="right">
                                <span v-if="id_capitulo === subsecao.id_capitulo && id_secao === subsecao.id_secao" >
                                    <td>{{ subsecao.subsecao }}</td>
                                    <td style="text-align: right;"><router-link
                                            :to="{ name: 'subsecaoedit', params: { id: subsecao.id } }"><button
                                                class="button is-success">Editar</button></router-link>&nbsp;&nbsp;&nbsp;
                                        <button class="button is-danger"
                                            @click="showModalSubsecao(subsecao.id)">Excluir</button>
                                    </td>
                                </span>
                            </tr>
                        </template>
                    </tbody>
                </table> 
               
                <div :class="{ modal: true, 'is-active': showModal }">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Você deseja realmente excluir essa Subsessão???
                            </p>
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
                            <a href="#" class="card-footer-item" @click="deleteSubsecao()">Excluir</a>

                        </footer>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
            </div>

            </div>
        </div>

    </div>
</template> 
  
<script>
//import SelectComponent from '../../components/SelectComponent.vue';
import axios from 'axios';

//import SelectComponent from '@/components/SelectComponent.vue';
export default {
    
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
        axios.post("http://localhost:8686/admin/secao/list").then(res => {
            console.log(res);
            this.secoes = res.data;
        }).catch(err => {
            console.log(err);
        });
        axios.post("http://localhost:8686/admin/subsecao/list").then(res => {
            console.log(res);
            this.subsecoes = res.data;
        }).catch(err => {
            console.log(err);
        });
    },
    data() {
        return {
            id_titulo: '',
            id_capitulo: '',
            id_secao: null,
            subsecao: '',
            titulos: [],
            capitulos: [],
            secoes:[],
            subsecoes:[],
            showModal: false,
            deleteSecaoId: -1

        };
    },
    methods: {
        hideModal() {
            this.showModal = false;
        },
        showModalSubsecao(id) {
            this.deleteSubsecaoId = id
            this.showModal = true;
        },
        deleteSubsecao() {
            axios.delete("http://localhost:8686/admin/subsecao/delete/" + this.deleteSubsecaoId).then(
                this.showModal = false,
                this.subsecoes = this.subsecoes.filter(c => c.id != this.deleteSubsecaoId)
            ).catch(error => {
                console.log(error);
                this.showModal = false;
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