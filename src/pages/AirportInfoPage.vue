<template>
    <div class="q-ma-md">
        <div class="text-h5 q-mt-sm q-mb-xs">Аеропорти</div>
        <q-separator class="q-my-md q-mx-none" inset />

        <q-select v-model="chooseOption" :options="options" label="Аеропорти" style="width: 300px" />

        <div class="text q-mt-md" v-if="!chooseOption">Дані відсутні. Виберіть аеропорт</div>
        
        <q-card v-if="chooseOption" class="q-mt-md">
            <q-card-section>
                <div class="text-h6" style="min-width: 400px">{{getCurrentAirport.name}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Місто: {{ getCurrentAirport.city }}
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                Країна: {{ getCurrentAirport.country }}
            </q-card-section>


            <q-separator inset />

            <q-card-section>
                Code: {{ getCurrentAirport.code }}
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import data from '../data/data.json'

const chooseOption = ref()

const options = data.airports.map(airport => airport.name)

const getCurrentAirport = computed(() => {
    return data.airports.find(airport => airport.name === chooseOption.value)
})
</script>
