<template>
    <div class="q-ma-md">
        <div class="text-h5 q-mt-sm q-mb-xs">Авіакомпанії</div>
        <q-separator class="q-my-md q-mx-none" inset />

        <q-select v-model="chooseOption" :options="options" label="Авіакомпанії" style="width: 300px" />

        <div class="text q-mt-md" v-if="!chooseOption">Дані відсутні. Виберіть компанію</div>
        
        <q-card v-if="chooseOption" class="q-mt-md">
            <q-card-section>
                <div class="text-h6" style="min-width: 400px">{{getCurrentAirline.name}}</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                Країна: {{ getCurrentAirline.country }}
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import data from '../data/data.json'

const chooseOption = ref()

const options = data.airlines.map(airline => airline.name)

const getCurrentAirline = computed(() => {
    return data.airlines.find(airport => airport.name === chooseOption.value)
})
</script>
