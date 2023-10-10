<template>
  <q-page>
    <!--  <h5>Artigos</h5> -->
    <q-card>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <swiper :slides-per-view="1">
            <swiper-slide v-for="artigo in artigos" :key="artigo.id">

              <span class="text-body1">{{ artigo.artigo }} - </span>
              <span class="text-body1" v-html="artigo.caput"></span>
              <!--<p style="text-align: left;">{{ artigo.artigo }}&nbsp; - &nbsp;<span v-html=artigo.caput></span>
              </p> -->
              <template v-if="artigo.id != null">
                <template v-if="artigo.qordensConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem"
                    class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.qordensConteudos></span> </q-card-section><br>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.consultasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.consultasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.decisoesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon=""
                    label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.decisoesConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.recursosConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.recursosConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.reclamacoesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Reclamações" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.reclamacoesConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.sumulasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Sumulas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.sumulasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.stfsConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC"
                    class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.stfsConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>


                <template v-if="artigo.praticasConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.praticasConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.precedentesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Precedentes" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.precedentesConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>

                <template v-if="artigo.observacoesConteudos">
                  <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações" class="bg-teal-1">
                    <q-card class="bg-teal-0">
                      <q-card-section>
                        <span v-html=artigo.observacoesConteudos></span> </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </template>


              </template>

              <!--  <span v-for="     inciso      in      incisos     " :key="inciso.id">
                  <template v-if="artigo.id === inciso.id_artigo && inciso.id_paragrafo === null">
                    <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>

                    <template v-if="inciso.qordensConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem"
                        class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.qordensConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.consultasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.consultasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.decisoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon=""
                        label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.decisoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.recursosConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.recursosConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>


                    <template v-if="inciso.reclamacoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Reclamações" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.reclamacoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.sumulasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Sumulas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.sumulasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.stfsConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC"
                        class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.stfsConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>


                    <template v-if="inciso.praticasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.praticasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.precedentesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Precedentes" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.precedentesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.observacoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.observacoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="inciso.notasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=inciso.notasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <span v-for="alinea in alineas" :key="alinea.id">
                      <template v-if="alinea.id_paragrafo === null && alinea.id_inciso === inciso.id">
                        <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                        <template v-if="alinea.qordensConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de ordem"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.qordensConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.consultasConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.consultasConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.decisoesConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon=""
                            label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.decisoesConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.recursosConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.recursosConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.reclamacoesConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Reclamações"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.reclamacoesConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.sumulasConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Sumulas" class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.sumulasConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.stfsConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.stfsConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>


                        <template v-if="alinea.praticasConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.praticasConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.precedentesConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Precedentes"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.precedentesConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="alinea.observacoesConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.observacoesConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>


                        <template v-if="alinea.notasConteudos">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=alinea.notasConteudos></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>



                      </template>
                    </span>
                  </template>
                </span>




                <span v-for="     paragrafo      in       paragrafos      " :key="paragrafo.id">

                  <template v-if="artigo.id === paragrafo.id_artigo">
                    <p style="text-align: left;">{{ paragrafo.paragrafo }}&nbsp;<span v-html=paragrafo.caput></span>
                    </p>

                    <template v-if="paragrafo.qordensConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem"
                        class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.qordensConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.consultasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.consultasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.decisoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon=""
                        label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.decisoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.recursosConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.recursosConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.reclamacoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Reclamações" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.reclamacoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.sumulasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Sumulas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.sumulasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.stfsConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC"
                        class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.stfsConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>


                    <template v-if="paragrafo.praticasConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.praticasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.precedentesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Precedentes" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.precedentesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.observacoesConteudos">
                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.observacoesConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <template v-if="paragrafo.notasConteudos">

                      <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                        <q-card class="bg-teal-0">
                          <q-card-section>
                            <span v-html=paragrafo.notasConteudos></span> </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </template>

                    <span v-for="      inciso       in       incisos      " :key="inciso.id">
                      <template v-if="paragrafo.id === inciso.id_paragrafo">
                        <p style="text-align: left;">{{ inciso.inciso }}&nbsp;<span v-html=inciso.caput></span></p>

                        <template v-if="inciso.qordensConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de Ordem"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.qordensConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.consultasConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.consultasConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.decisoesConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon=""
                            label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.decisoesConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.recursosConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.recursosConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.reclamacoesConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Reclamações"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.reclamacoesConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.sumulasConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Sumulas" class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.sumulasConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.stfsConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.stfsConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>


                        <template v-if="inciso.praticasConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=incisos.praticasConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.precedentesConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Precedentes"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=incisos.precedentesConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <template v-if="inciso.observacoesConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações"
                            class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.observacoesConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>


                        <template v-if="inciso.notasConteudosp">
                          <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas" class="bg-teal-1">
                            <q-card class="bg-teal-0">
                              <q-card-section>
                                <span v-html=inciso.notasConteudosp></span> </q-card-section>
                            </q-card>
                          </q-expansion-item>
                        </template>

                        <span v-for="alinea in alineas" :key="alinea.id">
                          <template v-if="inciso.id === alinea.id_inciso && alinea.id_paragrafo != null">
                            <p style="text-align: left;"><span v-html=alinea.alinea></span></p>

                            <template v-if="alinea.qordensConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Questões de ordem"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.qordensConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.consultasConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Consultas"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.consultasConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.decisoesConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon=""
                                label="Decisões da Presidência (Ato do Presidente)" class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.decisoesConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.recursosConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Recursos"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.recursosConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.reclamacoesConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Reclamações"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.reclamacoesConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.sumulasConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Sumulas"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.sumulasConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.stfsConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.stfsConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>


                            <template v-if="alinea.praticasConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Práticas"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.praticasConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.precedentesConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Precedentes"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.precedentesConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.observacoesConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Observações"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.observacoesConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>

                            <template v-if="alinea.notasConteudos">
                              <q-expansion-item dense dense-toggle expand-separator icon="" label="Notas"
                                class="bg-teal-1">
                                <q-card class="bg-teal-0">
                                  <q-card-section>
                                    <span v-html=alinea.notasConteudos></span> </q-card-section>
                                </q-card>
                              </q-expansion-item>
                            </template>
                          </template>
                        </span>
                      </template>
                    </span>
                  </template>
                </span> -->
            </swiper-slide>
          </swiper>
        </div>
      </div>

    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from "axios";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';


export default defineComponent({

  components: {
    Swiper,
    SwiperSlide,

  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },


  /*components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
*/
  // Vamos juntar os conteudos de todas as notas de um parágrafo
  // Quando

  created() {

    /* axios.get("http://18.229.118.205:8686/admin/artigo/" + this.$route.params.id).then(res => {
       console.log(res);
       //this.artigos = res.data;
       this.id = res.data.id
       this.artigo = res.data.artigo
       this.caput = res.data.caput
     }).catch(err => {
       console.log(err);
     })*/

    axios.post("http://18.229.118.205:8686/admin/artigo/list").then(res => {
      console.log(res);
      this.artigos = res.data;
      //this.artigos = this.artigos.filter(c => c.id == this.$route.params.id)
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/inciso/list").then(res => {
      console.log(res);
      this.incisos = res.data;
    }).catch(err => {
      console.log(err);
    });
    axios.post("http://18.229.118.205:8686/admin/alinea/list").then(res => {
      console.log(res);
      this.alineas = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.post("http://18.229.118.205:8686/admin/paragrafo/list").then(res => {
      console.log(res);
      this.paragrafos = res.data;
      return this.paragrafos;
    }).catch(err => {
      console.log(err);
    });

    const qosPromise = axios.post("http://18.229.118.205:8686/listqordem").then(res => {
      this.qordens = res.data.map(qordem => ({ ...qordem, showDialog: false }));
      return this.qordens;
    }).catch(err => {
      console.log(err);
    });

    const praPromise = axios.post("http://18.229.118.205:8686/listpratica").then(res => {
      this.praticas = res.data.map(pratica => ({ ...pratica, showDialog: false }));
      return this.praticas;
    }).catch(err => {
      console.log(err);
    });

    const conPromise = axios.post("http://18.229.118.205:8686/listconsulta").then(res => {
      this.consultas = res.data.map(consulta => ({ ...consulta, showDialog: false }));
      return this.consultas;
    }).catch(err => {
      console.log(err);
    });

    const decPromise = axios.post("http://18.229.118.205:8686/listdecisao").then(res => {
      this.decisoes = res.data.map(decisao => ({ ...decisao, showDialog: false }));
      return this.decisoes;
    }).catch(err => {
      console.log(err);
    });

    const recPromise = axios.post("http://18.229.118.205:8686/listrec").then(res => {
      this.recursos = res.data.map(recurso => ({ ...recurso, showDialog: false }));
      return this.recursos;
    }).catch(err => {
      console.log(err);
    });

    const remPromise = axios.post("http://18.229.118.205:8686/listrem").then(res => {
      this.reclamacoes = res.data.map(reclamacao => ({ ...reclamacao, showDialog: false }));
      return this.reclamacoes;
    }).catch(err => {
      console.log(err);
    });

    const sumPromise = axios.post("http://18.229.118.205:8686/listsumula").then(res => {
      this.sumulas = res.data.map(sumula => ({ ...sumula, showDialog: false }));
      return this.sumulas;
    }).catch(err => {
      console.log(err);
    });

    const stfPromise = axios.post("http://18.229.118.205:8686/liststf").then(res => {
      this.stfs = res.data.map(stf => ({ ...stf, showDialog: false }));
      return this.stfs;

    }).catch(err => {
      console.log(err);
    });

    const prePromise = axios.post("http://18.229.118.205:8686/listprecedente").then(res => {
      this.precedentes = res.data.map(precedente => ({ ...precedente, showDialog: false }));
      return this.precedentes;
    }).catch(err => {
      console.log(err);
    });

    const obsPromise = axios.post("http://18.229.118.205:8686/listobs").then(res => {
      this.observacoes = res.data.map(observacao => ({ ...observacao, showDialog: false }));
      return this.observacoes;
    }).catch(err => {
      console.log(err);
    });


    const notasPromise = axios.post("http://18.229.118.205:8686/listnota").then(res => {
      this.notas = res.data.map(nota => ({ ...nota, showDialog: false }));
      return this.notas;
    }).catch(err => {
      console.log(err);
    });

    Promise.all([notasPromise, qosPromise,
      praPromise, conPromise, decPromise, recPromise, remPromise, sumPromise, stfPromise, prePromise, obsPromise])
      .then((rets) => {

        // Pega as notas

        this.paragrafos.map(par => {
          const notasDesteParagrafo = this.notas.filter(nota => (par.id === nota.id_paragrafo && nota.id_tipo === 18))
          par.notasConteudos = null;
          if (!Array.isArray(notasDesteParagrafo) || !notasDesteParagrafo.length) {
            return par;
          }
          par.showDialog = false;
          par.notasConteudos = notasDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'
          return par

        });
        this.incisos.map(inc => {
          const notasDesteInciso = this.notas.filter(nota => (inc.id === nota.id_inciso && nota.id_tipo === 18))
          inc.notasConteudos = null;
          if (!Array.isArray(notasDesteInciso) || !notasDesteInciso.length) {
            return inc;
          }
          inc.showDialog = false;
          inc.notasConteudos = notasDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return inc;
        });
        this.alineas.map(ali => {
          const notasDestaAlinea = this.notas.filter(nota => (ali.id === nota.id_alinea && nota.id_tipo === 18))
          ali.notasConteudos = null;
          if (!Array.isArray(notasDestaAlinea) || !notasDestaAlinea.length) {
            return ali;
          }
          ali.showDialog = false;
          ali.notasConteudos = notasDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return ali;
        });

        //pega as questões de ordem

        this.artigos.map(qoart => {
          const qosDesteArtigo = this.qordens.filter(qordem => (qoart.id === qordem.id_artigo && qordem.id_paragrafo === null && qordem.id_inciso === null && qordem.id_alinea === null && qordem.id_tipo === 8))
          qoart.qordensConteudos = null;
          if (!Array.isArray(qosDesteArtigo) || !qosDesteArtigo.length) {
            return qoart;
          }
          qoart.showDialog = false;
          qoart.qordensConteudos = qosDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoart;
        });


        this.paragrafos.map(qopar => {
          const qosDesteParagrafo = this.qordens.filter(qordem => (qopar.id === qordem.id_paragrafo && qordem.id_inciso === null && qordem.id_alinea === null && qordem.id_tipo === 8))
          qopar.qordensConteudos = null;
          if (!Array.isArray(qosDesteParagrafo) || !qosDesteParagrafo.length) {
            return qopar;
          }
          qopar.showDialog = false;
          qopar.qordensConteudos = qosDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qopar;


        });

        this.incisos.map(qoinc => {
          const qosDesteInciso = this.qordens.filter(qordem => (qoinc.id === qordem.id_inciso && qordem.id_paragrafo === null && qordem.id_alinea === null && qordem.id_tipo === 8))
          qoinc.qordensConteudos = null;
          if (!Array.isArray(qosDesteInciso) || !qosDesteInciso.length) {
            return qoinc;
          }
          qoinc.showDialog = false;
          qoinc.qordensConteudos = qosDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoinc;
        });
        this.incisos.map(qoincp => {
          const qosDesteIncisop = this.qordens.filter(qordem => (qoincp.id === qordem.id_inciso && qordem.id_paragrafo != null && qordem.id_alinea != null && qordem.id_tipo === 8))
          qoincp.qordensConteudosp = null;
          if (!Array.isArray(qosDesteIncisop) || !qosDesteIncisop.length) {
            return qoincp;
          }
          qoincp.showDialog = false;
          qoincp.qordensConteudosp = qosDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoincp;
        });

        this.alineas.map(qoali => {
          const qosDestaAlinea = this.qordens.filter(qordem => (qoali.id === qordem.id_alinea && qordem.id_tipo === 8))
          qoali.qordensConteudos = null;
          if (!Array.isArray(qosDestaAlinea) || !qosDestaAlinea.length) {
            return qoali;
          }
          qoali.showDialog = false;
          qoali.qordensConteudos = qosDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return qoali;
        });

        //pega as práticas

        this.artigos.map(praart => {
          const praDesteArtigo = this.praticas.filter(pratica => (praart.id === pratica.id_artigo && pratica.id_paragrafo === null && pratica.id_inciso === null && pratica.id_alinea === null && pratica.id_tipo === 15))
          praart.praticasConteudos = null;
          if (!Array.isArray(praDesteArtigo) || !praDesteArtigo.length) {
            return praart;
          }
          praart.showDialog = false;
          praart.praticasConteudos = praDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return praart;
        });

        this.paragrafos.map(prapar => {
          const praDesteParagrafo = this.praticas.filter(pratica => (prapar.id === pratica.id_paragrafo && pratica.id_inciso === null && pratica.id_alinea === null && pratica.id_tipo === 15))
          prapar.praticasConteudos = null;
          if (!Array.isArray(praDesteParagrafo) || !praDesteParagrafo.length) {
            return prapar;
          }
          prapar.showDialog = false;
          prapar.praticasConteudos = praDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return prapar;
        });

        this.incisos.map(prainc => {
          const praDesteInciso = this.praticas.filter(pratica => (prainc.id === pratica.id_inciso && pratica.id_paragrafo === null && pratica.id_alinea === null && pratica.id_tipo === 15))
          prainc.praticasConteudos = null;
          if (!Array.isArray(praDesteInciso) || !praDesteInciso.length) {
            return prainc;
          }
          prainc.showDialog = false;
          prainc.praticasConteudos = praDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return prainc;
        });
        this.incisos.map(praincp => {
          const praDesteIncisop = this.praticas.filter(pratica => (praincp.id === pratica.id_inciso && pratica.id_paragrafo != null && pratica.id_alinea === null && pratica.id_tipo === 8))
          praincp.praticasConteudosp = null;
          if (!Array.isArray(praDesteIncisop) || !praDesteIncisop.length) {
            return praincp;
          }
          praincp.showDialog = false;
          praincp.praticasConteudosp = praDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return praincp;
        });
        this.alineas.map(praali => {
          const praDestaAlinea = this.praticas.filter(pratica => (praali.id === pratica.id_alinea && pratica.id_tipo === 15))
          praali.praticasConteudos = null;
          if (!Array.isArray(praDestaAlinea) || !praDestaAlinea.length) {
            return praali;
          }
          praali.showDialog = false;
          praali.praticasConteudos = praDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return praali;
        });
        //pega as consultas

        this.artigos.map(conart => {
          const conDesteArtigo = this.consultas.filter(consulta => (conart.id === consulta.id_artigo && consulta.id_paragrafo === null && consulta.id_inciso === null && consulta.id_alinea === null && consulta.id_tipo === 9))
          conart.consultasConteudos = null;
          if (!Array.isArray(conDesteArtigo) || !conDesteArtigo.length) {
            return conart;
          }
          conart.showDialog = false;
          conart.consultasConteudos = conDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conart;
        });

        this.paragrafos.map(conpar => {
          const conDesteParagrafo = this.consultas.filter(consulta => (conpar.id === consulta.id_paragrafo && consulta.id_inciso === null && consulta.id_alinea === null && consulta.id_tipo === 9))
          conpar.consultasConteudos = null;
          if (!Array.isArray(conDesteParagrafo) || !conDesteParagrafo.length) {
            return conpar;
          }
          conpar.showDialog = false;
          conpar.consultasConteudos = conDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conpar;
        });

        this.incisos.map(coninc => {
          const conDesteInciso = this.consultas.filter(consulta => (coninc.id === consulta.id_inciso && consulta.id_paragrafo === null && consulta.id_alinea === null && consulta.id_tipo === 9))
          coninc.consultasConteudos = null;
          if (!Array.isArray(conDesteInciso) || !conDesteInciso.length) {
            return coninc;
          }
          coninc.showDialog = false;
          coninc.consultasConteudos = conDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return coninc;
        });
        this.incisos.map(conincp => {
          const conDesteIncisop = this.consultas.filter(consulta => (conincp.id === consulta.id_inciso && consulta.id_paragrafo != null && consulta.id_alinea === null && consulta.id_tipo === 8))
          conincp.consultasConteudosp = null;
          if (!Array.isArray(conDesteIncisop) || !conDesteIncisop.length) {
            return conincp;
          }
          conincp.showDialog = false;
          conincp.consultasConteudosp = conDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conincp;
        });
        this.alineas.map(conali => {
          const conDestaAlinea = this.consultas.filter(consulta => (conali.id === consulta.id_alinea && consulta.id_tipo === 9))
          conali.consultasConteudos = null;
          if (!Array.isArray(conDestaAlinea) || !conDestaAlinea.length) {
            return conali;
          }
          conali.showDialog = false;
          conali.consultasConteudos = conDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return conali;
        });


        //pega as decisões da Presidência

        this.artigos.map(decpart => {
          const decpDesteArtigo = this.decisoes.filter(decisao => (decpart.id === decisao.id_artigo && decisao.id_paragrafo === null && decisao.id_inciso === null && decisao.id_alinea === null && decisao.id_tipo === 10))
          decpart.decisoesConteudos = null;
          if (!Array.isArray(decpDesteArtigo) || !decpDesteArtigo.length) {
            return decpart;
          }
          decpart.showDialog = false;
          decpart.decisoesConteudos = decpDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpart;
        });

        this.paragrafos.map(decppar => {
          const decpDesteParagrafo = this.decisoes.filter(decisao => (decppar.id === decisao.id_paragrafo && decisao.id_inciso === null && decisao.id_alinea === null && decisao.id_tipo === 10))
          decppar.decisoesConteudos = null;
          if (!Array.isArray(decpDesteParagrafo) || !decpDesteParagrafo.length) {
            return decppar;
          }
          decppar.showDialog = false;
          decppar.decisoesConteudos = decpDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decppar;
        });

        this.incisos.map(decpinc => {
          const decpDesteInciso = this.decisoes.filter(decisao => (decpinc.id === decisao.id_inciso && decisao.id_paragrafo === null && decisao.id_alinea === null && decisao.id_tipo === 10))
          decpinc.decisoesConteudos = null;
          if (!Array.isArray(decpDesteInciso) || !decpDesteInciso.length) {
            return decpinc;
          }
          decpinc.showDialog = false;
          decpinc.decisoesConteudos = decpDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpinc;
        });
        this.incisos.map(decpincp => {
          const decpDesteIncisop = this.decisoes.filter(decisao => (decpincp.id === decisao.id_inciso && decisao.id_paragrafo != null && decisao.id_alinea === null && decisao.id_tipo === 10))
          decpincp.decisoesConteudosp = null;
          if (!Array.isArray(decpDesteIncisop) || !decpDesteIncisop.length) {
            return decpincp;
          }
          decpincp.showDialog = false;
          decpincp.decisoesConteudosp = decpDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpincp;
        });
        this.alineas.map(decpali => {
          const decpDestaAlinea = this.decisoes.filter(decisao => (decpali.id === decisao.id_alinea && decisao.id_tipo === 10))
          decpali.decisoesConteudos = null;
          if (!Array.isArray(decpDestaAlinea) || !decpDestaAlinea.length) {
            return decpali;
          }
          decpali.showDialog = false;
          decpali.decisoesConteudos = decpDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return decpali;
        });

        //pega os recursos

        this.artigos.map(recart => {
          const recDesteArtigo = this.recursos.filter(recurso => (recart.id === recurso.id_artigo && recurso.id_paragrafo === null && recurso.id_inciso === null && recurso.id_alinea === null && recurso.id_tipo === 12))
          recart.recursosConteudos = null;
          if (!Array.isArray(recDesteArtigo) || !recDesteArtigo.length) {
            return recart;
          }
          recart.showDialog = false;
          recart.recursosConteudos = recDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recart;
        });

        this.paragrafos.map(recpar => {
          const recDesteParagrafo = this.recursos.filter(recurso => (recpar.id === recurso.id_paragrafo && recurso.id_inciso === null && recurso.id_alinea === null && recurso.id_tipo === 12))
          recpar.recursosConteudos = null;
          if (!Array.isArray(recDesteParagrafo) || !recDesteParagrafo.length) {
            return recpar;
          }
          recpar.showDialog = false;
          recpar.recursosConteudos = recDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recpar;
        });

        this.incisos.map(recinc => {
          const recDesteInciso = this.recursos.filter(recurso => (recinc.id === recurso.id_inciso && recurso.id_paragrafo === null && recurso.id_alinea === null && recurso.id_tipo === 12))
          recinc.recursosConteudos = null;
          if (!Array.isArray(recDesteInciso) || !recDesteInciso.length) {
            return recinc;
          }
          recinc.showDialog = false;
          recinc.recursosConteudos = recDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recinc;
        });
        this.incisos.map(recincp => {
          const recDesteIncisop = this.recursos.filter(recurso => (recincp.id === recurso.id_inciso && recurso.id_paragrafo != null && recurso.id_alinea === null && recurso.id_tipo === 12))
          recincp.recursosConteudosp = null;
          if (!Array.isArray(recDesteIncisop) || !recDesteIncisop.length) {
            return recincp;
          }
          recincp.showDialog = false;
          recincp.recursosConteudosp = recDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recincp;
        });
        this.alineas.map(recali => {
          const recDestaAlinea = this.recursos.filter(recurso => (recali.id === recurso.id_alinea && recurso.id_tipo === 12))
          recali.recursosConteudos = null;
          if (!Array.isArray(recDestaAlinea) || !recDestaAlinea.length) {
            return recali;
          }
          recali.showDialog = false;
          recali.recursosConteudos = recDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return recali;
        });

        //pega as reclamações

        this.artigos.map(remart => {
          const remDesteArtigo = this.reclamacoes.filter(reclamacao => (remart.id === reclamacao.id_artigo && reclamacao.id_paragrafo === null && reclamacao.id_inciso === null && reclamacao.id_alinea === null && reclamacao.id_tipo === 13))
          if (!Array.isArray(remDesteArtigo) || !remDesteArtigo.length) {
            return remart;
          }
          remart.showDialog = false;
          remart.reclamacoesConteudos = remDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return remart;
        });

        this.paragrafos.map(rempar => {
          const remDesteParagrafo = this.reclamacoes.filter(reclamacao => (rempar.id === reclamacao.id_paragrafo && reclamacao.id_inciso === null && reclamacao.id_alinea === null && reclamacao.id_tipo === 13))
          rempar.reclamacoesConteudos = null;
          if (!Array.isArray(remDesteParagrafo) || !remDesteParagrafo.length) {
            return rempar;
          }
          rempar.showDialog = false;
          rempar.reclamacoesConteudos = remDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return rempar;
        });

        this.incisos.map(reminc => {
          const remDesteInciso = this.reclamacoes.filter(reclamacao => (reminc.id === reclamacao.id_inciso && reclamacao.id_paragrafo === null && reclamacao.id_alinea === null && reclamacao.id_tipo === 13))
          reminc.reclamacoesConteudos = null;
          if (!Array.isArray(remDesteInciso) || !remDesteInciso.length) {
            return reminc;
          }
          reminc.showDialog = false;
          reminc.reclamacoesConteudos = remDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return reminc;
        });
        this.incisos.map(remincp => {
          const remDesteIncisop = this.reclamacoes.filter(reclamacao => (remincp.id === reclamacao.id_inciso && reclamacao.id_paragrafo != null && reclamacao.id_tipo === 13))
          remincp.reclamacoesConteudosp = null;
          if (!Array.isArray(remDesteIncisop) || !remDesteIncisop.length) {
            return remincp;
          }
          remincp.showDialog = false;
          remincp.reclamacoesConteudosp = remDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return remincp;
        });
        this.alineas.map(remali => {
          const remDestaAlinea = this.reclamacoes.filter(reclamacao => (remali.id === reclamacao.id_alinea && reclamacao.id_tipo === 13))
          remali.reclamacoesConteudos = null;
          if (!Array.isArray(remDestaAlinea) || !remDestaAlinea.length) {
            return remali;
          }
          remali.showDialog = false;
          remali.reclamacoesConteudos = remDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return remali;
        });

        //pega as sumulas

        this.artigos.map(sumart => {
          const sumDesteArtigo = this.sumulas.filter(sumula => (sumart.id === sumula.id_artigo && sumula.id_paragrafo === null && sumula.id_inciso === null && sumula.id_alinea === null && sumula.id_tipo === 19))
          sumart.sumulasConteudos = null;
          if (!Array.isArray(sumDesteArtigo) || !sumDesteArtigo.length) {
            return sumart;
          }
          sumart.showDialog = false;
          sumart.sumulasConteudos = sumDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return sumart;
        });

        this.paragrafos.map(sumpar => {
          const sumDesteParagrafo = this.sumulas.filter(sumula => (sumpar.id === sumula.id_paragrafo && sumula.id_inciso === null && sumula.id_alinea === null && sumula.id_tipo === 19))
          sumpar.sumulasConteudos = null;
          if (!Array.isArray(sumDesteParagrafo) || !sumDesteParagrafo.length) {
            return sumpar;
          }
          sumpar.showDialog = false;
          sumpar.sumulasConteudos = sumDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return sumpar;
        });

        this.incisos.map(suminc => {
          const sumDesteInciso = this.sumulas.filter(sumula => (suminc.id === sumula.id_inciso && sumula.id_paragrafo === null && sumula.id_alinea === null && sumula.id_tipo === 19))
          suminc.sumulasConteudos = null;
          if (!Array.isArray(sumDesteInciso) || !sumDesteInciso.length) {
            return suminc;
          }
          suminc.showDialog = false;
          suminc.sumulasConteudos = sumDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return suminc;
        });
        this.incisos.map(sumincp => {
          const sumDesteIncisop = this.sumulas.filter(sumula => (sumincp.id === sumula.id_inciso && sumula.id_paragrafo != null && sumula.id_alinea === null && sumula.id_tipo === 19))
          sumincp.sumulasConteudosp = null;
          if (!Array.isArray(sumDesteIncisop) || !sumDesteIncisop.length) {
            return sumincp;
          }
          sumincp.showDialog = false;
          sumincp.sumulasConteudosp = sumDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return sumincp;
        });
        this.alineas.map(sumali => {
          const sumDestaAlinea = this.sumulas.filter(sumula => (sumali.id === sumula.id_alinea && sumula.id_tipo === 19))
          sumali.sumulasConteudos = null;
          if (!Array.isArray(sumDestaAlinea) || !sumDestaAlinea.length) {
            return sumali;
          }
          sumali.showDialog = false;
          sumali.sumulasConteudos = sumDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return sumali;
        });

        //pega as stf, ms, adi, hc

        this.artigos.map(start => {
          const stsDesteArtigo = this.stfs.filter(stf => (start.id === stf.id_artigo && stf.id_paragrafo === null && stf.id_inciso === null && stf.id_alinea === null && stf.id_tipo === 14))
          start.stfsConteudos = null;
          if (!Array.isArray(stsDesteArtigo) || !stsDesteArtigo.length) {
            return start;
          }
          start.showDialog = false;
          start.stfsConteudos = stsDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return start;
        });


        this.paragrafos.map(stpar => {
          const stsDesteParagrafo = this.stfs.filter(stf => (stpar.id === stf.id_paragrafo && stf.id_inciso === null && stf.id_alinea === null && stf.id_tipo === 14))
          stpar.stfsConteudos = null;
          if (!Array.isArray(stsDesteParagrafo) || !stsDesteParagrafo.length) {
            return stpar;
          }
          stpar.showDialog = false;
          stpar.stfsConteudos = stsDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return stpar;


        });

        this.incisos.map(stinc => {
          const stsDesteInciso = this.stfs.filter(stf => (stinc.id === stf.id_inciso && stf.id_paragrafo === null && stf.id_alinea === null && stf.id_tipo === 14))
          stinc.stfsConteudos = null;
          if (!Array.isArray(stsDesteInciso) || !stsDesteInciso.length) {
            return stinc;
          }
          stinc.showDialog = false;
          stinc.stfsConteudos = stsDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return stinc;
        });
        this.incisos.map(stincp => {
          const stsDesteIncisop = this.stfs.filter(stf => (stincp.id === stf.id_inciso && stf.id_paragrafo != null && stf.id_alinea != null && stf.id_tipo === 14))
          stincp.stfsConteudosp = null;
          if (!Array.isArray(stsDesteIncisop) || !stsDesteIncisop.length) {
            return stincp;
          }
          stincp.showDialog = false;
          stincp.stfsConteudosp = stsDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return stincp;
        });

        this.alineas.map(stali => {
          const stsDestaAlinea = this.stfs.filter(stf => (stali.id === stf.id_alinea && stf.id_tipo === 14))
          stali.stfsConteudos = null;
          if (!Array.isArray(stsDestaAlinea) || !stsDestaAlinea.length) {
            return stali;
          }
          stali.showDialog = false;
          stali.stfsConteudos = stsDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return stali;
        });

        //pega os precedentes

        this.artigos.map(preart => {
          const preDesteArtigo = this.precedentes.filter(precedente => (preart.id === precedente.id_artigo && precedente.id_paragrafo === null && precedente.id_inciso === null && precedente.id_alinea === null && precedente.id_tipo === 16))
          preart.precedentesConteudos = null;
          if (!Array.isArray(preDesteArtigo) || !preDesteArtigo.length) {
            return preart;
          }
          preart.showDialog = false;
          preart.precedentesConteudos = preDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return preart;
        });


        this.paragrafos.map(prepar => {
          const preDesteParagrafo = this.precedentes.filter(precedente => (prepar.id === precedente.id_paragrafo && precedente.id_inciso === null && precedente.id_alinea === null && precedente.id_tipo === 16))
          prepar.precedentesConteudos = null;
          if (!Array.isArray(preDesteParagrafo) || !preDesteParagrafo.length) {
            return prepar;
          }
          prepar.showDialog = false;
          prepar.precedentesConteudos = preDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return prepar;


        });

        this.incisos.map(preinc => {
          const preDesteInciso = this.precedentes.filter(precedente => (preinc.id === precedente.id_inciso && precedente.id_paragrafo === null && precedente.id_alinea === null && precedente.id_tipo === 16))
          preinc.precedentesConteudos = null;
          if (!Array.isArray(preDesteInciso) || !preDesteInciso.length) {
            return preinc;
          }
          preinc.showDialog = false;
          preinc.precedentesConteudos = preDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return preinc;
        });
        this.incisos.map(preincp => {
          const preDesteIncisop = this.precedentes.filter(precedente => (preincp.id === precedente.id_inciso && precedente.id_paragrafo != null && precedente.id_alinea != null && precedente.id_tipo === 16))
          preincp.precedentesConteudosp = null;
          if (!Array.isArray(preDesteIncisop) || !preDesteIncisop.length) {
            return preincp;
          }
          preincp.showDialog = false;
          preincp.precedentesConteudosp = preDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return preincp;
        });

        this.alineas.map(preali => {
          const preDestaAlinea = this.precedentes.filter(precedente => (preali.id === precedente.id_alinea && precedente.id_tipo === 16))
          preali.precedentesConteudos = null;
          if (!Array.isArray(preDestaAlinea) || !preDestaAlinea.length) {
            return preali;
          }
          preali.showDialog = false;
          preali.precedentesConteudos = preDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return preali;
        });



        //pega as observações

        this.artigos.map(obsart => {
          const obsDesteArtigo = this.observacoes.filter(observacao => (obsart.id === observacao.id_artigo && observacao.id_paragrafo === null && observacao.id_inciso === null && observacao.id_alinea === null && observacao.id_tipo === 17))
          obsart.observacoesConteudos = null;
          if (!Array.isArray(obsDesteArtigo) || !obsDesteArtigo.length) {
            return obsart;
          }
          obsart.showDialog = false;
          obsart.observacoesConteudos = obsDesteArtigo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsart;
        });


        this.paragrafos.map(obspar => {
          const obsDesteParagrafo = this.observacoes.filter(observacao => (obspar.id === observacao.id_paragrafo && observacao.id_inciso === null && observacao.id_alinea === null && observacao.id_tipo === 17))
          obspar.observacoesConteudos = null;
          if (!Array.isArray(obsDesteParagrafo) || !obsDesteParagrafo.length) {
            return obspar;
          }
          obspar.showDialog = false;
          obspar.observacoesConteudos = obsDesteParagrafo
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obspar;


        });

        this.incisos.map(obsinc => {
          const obsDesteInciso = this.observacoes.filter(observacao => (obsinc.id === observacao.id_inciso && observacao.id_paragrafo === null && observacao.id_alinea === null && observacao.id_tipo === 17))
          obsinc.observacoesConteudos = null;
          if (!Array.isArray(obsDesteInciso) || !obsDesteInciso.length) {
            return obsinc;
          }
          obsinc.showDialog = false;
          obsinc.observacoesConteudos = obsDesteInciso
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsinc;
        });
        this.incisos.map(obsincp => {
          const obsDesteIncisop = this.observacoes.filter(observacao => (obsincp.id === observacao.id_inciso && observacao.id_paragrafo != null && observacao.id_alinea != null && observacao.id_tipo === 17))
          obsincp.observacoesConteudosp = null;
          if (!Array.isArray(obsDesteIncisop) || !obsDesteIncisop.length) {
            return obsincp;
          }
          obsincp.showDialog = false;
          obsincp.observacoesConteudosp = obsDesteIncisop
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsincp;
        });

        this.alineas.map(obsali => {
          const obsDestaAlinea = this.observacoes.filter(observacao => (obsali.id === observacao.id_alinea && observacao.id_tipo === 17))
          obsali.observacoesConteudos = null;
          if (!Array.isArray(obsDestaAlinea) || !obsDestaAlinea.length) {
            return obsali;
          }
          obsali.showDialog = false;
          obsali.observacoesConteudos = obsDestaAlinea
            .reduce((conteudo, currentValue) => {
              return conteudo + `<li>${currentValue.conteudo}</li>`;
            }, '<ul>') + '</ul>'

          return obsali;
        });





      })
  },

  data() {

    return {
      artigo: '',
      caput: '',
      artigos: [],
      incisos: [],
      paragrafos: [],
      alineas: [],
      conteudos: [],
      notas: [],
      showDialog: false,



    }

  },


});

</script>
<style>
.carousel__item {
  font-size: 20px;
  border-radius: 8px;
  justify-content: left;
  align-items: top;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
