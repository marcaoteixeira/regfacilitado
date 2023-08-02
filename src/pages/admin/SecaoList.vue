<template>
    <div class="container is-fluid">

        <br />

        <div class="columns i-centered ">
            <div class="column is-four-fifths">
                <div class="card">
                    <h1 class="Cadastro Seção">Edita Seção</h1><br>

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
                </div>

                <table class="table is-striped" align="center">
                    <thead>
                        <tr>
                            <th>Seções</th>
                        </tr>
                    </thead>

                    <tbody class="tdleft">
                        <template v-for="secao in secoes" :key="secao.id">
                            <tr align="right">
                                <span v-if="id_titulo == secao.id_titulo && id_capitulo == secao.id_capitulo">
                                    <td>{{ secao.secao }}</td>
                                    <td style="text-align: right;"><router-link
                                            :to="{ name: 'secaoedit', params: { id: secao.id } }"><button
                                                class="button is-success">Editar</button></router-link>&nbsp;&nbsp;&nbsp;
                                        <button class="button is-danger"
                                            @click="showModalsecao(secao.id)">Excluir</button>
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
                                Você deseja realmente excluir essa Sessão???
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
                            <a href="#" class="card-footer-item" @click="deleteSecao()">Excluir</a>

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
    },
    data() {
        return {
            id_titulo: "",
            id_capitulo: "",
            secao: "",
            titulos: [],
            capitulos: [],
            secoes:[],
            showModal: false,
            deleteSecaoId: -1

        };
    },
    methods: {
        hideModal() {
            this.showModal = false;
        },
        showModalsecao(id) {
            this.deleteSecaoId = id
            this.showModal = true;
        },
        deleteSecao() {
            axios.delete("http://localhost:8686/admin/secao/delete/" + this.deleteSecaoId).then(
                this.showModal = false,
                this.secoes = this.secoes.filter(c => c.id != this.deleteSecaoId)
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