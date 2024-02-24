<template>
    <div class="q-ma-md">
        <div class="text-h5 q-mt-sm q-mb-xs">Контакти</div>
        <q-separator class="q-my-md q-mx-none" inset />

        <div class="row items-start">
            <q-card
                class="my-card text-white"
                style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);"
            >
            </q-card>

            <q-card flat bordered class="my-card">
            <q-card-section>
                <div class="text-h6" style="min-width: 400px">Контакти 1</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
               Інформація 1
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                Інформація 2
            </q-card-section>
            </q-card>
        </div>
            <div class="row items-start q-mt-md">
        <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
        </q-card>

        <q-card flat bordered class="my-card">
            <q-card-section>
            <div class="text-h6" style="min-width: 400px">Контакти 2</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Інформація 1
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                Інформація 2
            </q-card-section>
        </q-card>
        </div>

        <div class="row items-start q-mt-md">
            <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
            </q-card>

            <q-card flat bordered class="my-card">
            <q-card-section>
                <div class="text-h6" style="min-width: 400px">Контакти 3</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Інформація 1
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                Інформація 2
            </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const options = []
</script>
