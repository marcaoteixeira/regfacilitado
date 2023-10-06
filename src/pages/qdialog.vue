<q-dialog v-model="paragrafo.showDialog">
                <q-card>
                  <q-card-section>
                    <div>Notas</div>
                  </q-card-section>
                  <q-separator />
                  <q-card-section style="max-height: 50vh" class="scroll">
                    <span v-html="paragrafo.notasConteudos"></span>
                  </q-card-section>
                  <q-separator />
                  <q-card-actions align="right">
<q-btn flat label="Fechar" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn label="Notas" @click="paragrafo.showDialog = true" />-->
