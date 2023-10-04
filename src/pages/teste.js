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
              <q-expansion-item dense dense-toggle expand-separator icon="" label="STF - MS - ADI - HC" class="bg-teal-1">
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
