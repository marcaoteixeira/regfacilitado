<template>
  <div>
    <h1 class="title">Edita Capitulo</h1>
    <div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Titulo:</label>
        </div>
        <div class="field-body">
          <div class="select is-rounded">
            <p class="control">

              <select name="id_titulo" v-model="id_titulo">
                <option v-for="titulo in titulos" :key="titulo.id" :value="titulo.id" :title="titulo.id">
                  {{ titulo.titulo }}
                </option>

              </select>

            </p>
          </div>
        </div>
      </div>
      <table class="table is-striped" align="center">
        <thead>
          <tr>
            <th>Capitulo</th>
          </tr>
        </thead>

        <tbody class="tdleft">
          <template v-for="capitulo in capitulos" :key="capitulo.id">
            <tr>
              <span v-if="id_titulo == capitulo.id_titulo">
                <td>{{ capitulo.capitulo }}</td>
                <td style="text-align: right;"><router-link
                    :to="{ name: 'capituloedit', params: { id: capitulo.id } }"><button
                      class="button is-success">Editar</button></router-link>&nbsp;&nbsp;&nbsp;
                  <button class="button is-danger" @click="showModalcapitulo(capitulo.id)">Excluir</button>
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
                Você deseja realmente excluir esse Capitulo???
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
              <a href="#" class="card-footer-item" @click="deleteCapitulo()">Excluir</a>

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
  },
  data() {
    return {
      id_titulo: '',
      capitulo: '',
      capitulos: [],
      titulos: [],
      showModal: false,
      deleteCapituloId: -1
    }

  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    showModalcapitulo(id) {
      this.deleteCapituloId = id
      this.showModal = true;
    },
    deleteCapitulo() {
      axios.delete("http://localhost:8686/admin/capitulo/delete/" + this.deleteCapituloId).then(
        this.showModal = false,
        this.capitulos = this.capitulos.filter(c => c.id != this.deleteCapituloId)
      ).catch(error => {
        console.log(error);
        this.showModal = false;
      });
    }

  },
}
</script>
<style scoped>
.tdleft {
  color: rgb(0, 0, 0);
  text-align: left;

}

table td {
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
