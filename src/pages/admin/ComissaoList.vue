<template>
  <div class="div">TESTE</div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import axios from "axios";

export default {
  created() {
    axios
      .post("http://18.229.118.205:8686/admin/comissao/list")
      .then((res) => {
        console.log(res);
        this.comissoes = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      comissoes: [],
      rows: [],
    };
  },
};
const rows = this.comissoes;
</script>
<style scoped></style>
