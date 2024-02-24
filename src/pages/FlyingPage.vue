<template>
    <div class="q-ma-md">
        <div class="text-h5 q-mt-sm q-mb-xs">Довідник</div>

        <q-separator class="q-my-md q-mx-none" inset />
    
        <div class="row no-wrap items-center justify-between" style="gap: 16px">
            <div class="row no-wrap items-center" style="width: 500px">
                <DatePicker v-model="departureTime" label="Відправляння"></DatePicker>
                <DatePicker v-model="arrivalTime" label="Прибуття"></DatePicker>
            </div>

            <div class="row no-wrap items-center" style="gap: 16px">
                <q-input v-model="time" placeholder="Час" min="0" type="number" />
                <q-input v-model="price" placeholder="Ціна" min="0" type="number"/>
            </div>

            <q-btn @click="startSearch">Пошук</q-btn>
        </div>
        <q-separator class="q-my-md q-mx-none" inset />
    </div>

    <div class="q-ma-md">
        <q-table
            class="my-sticky-header-last-column-table"
            flat bordered
            title="Польоти"
            :rows="filterRows"
            :columns="columns"
            row-key="name"
            no-data-label="Дані відсутні"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import DatePicker from '../components/DatePicker.vue'

import data from '../data/data.json'

import { date } from 'quasar'

import { setHistory, getHistory } from '../utils/history'

onMounted(() => {
    const currentHistorySetting = getHistory().find((history, index) => {
        return index == localStorage.getItem("indexHistory") || ''
    })

    if (!currentHistorySetting) return;

    price.value = currentHistorySetting.price ;
    departureTime.value = currentHistorySetting.departureTime ;
    arrivalTime.value = currentHistorySetting.arrivalTime ;
    time.value = currentHistorySetting.time ;

    localStorage.removeItem("indexHistory")
})

const departureTime = ref('')
const arrivalTime = ref('')
const time = ref('')
const price = ref('')
const filterRows = ref(getRows())

const columns = [
  {
    name: 'airline',
    label: 'Авіакомпанія',
    field: 'airline',
    sortable: true
  },
  { name: 'departureAirport', label: 'Аеропорт з', field: 'departureAirport' },
  { name: 'arrivalAirport', label: 'Аеропорт в', field: 'arrivalAirport' },
  { name: 'departureTime', label: 'Час відправлення', field: 'departureTime' },
  { name: 'arrivalTime', label: 'Час прибуття', field: 'arrivalTime' },
  { name: 'duration', label: 'Час польоту', field: 'duration' },
  { name: 'price', label: 'Ціна', field: 'price'},
]

function getRows () {
    return data.flights.map(flight => {
        return {
            airline: data.airlines.find(airline => airline.airline_id === flight.airline_id).name,
            departureAirport: data.airports.find(airport => airport.airport_id === flight.departure_airport_id).name,
            arrivalAirport: data.airports.find(airport => airport.airport_id === flight.arrival_airport_id).name,
            departureTime: date.formatDate(flight.departure_time, 'YYYY/MM/DD, HH:mm:ss'),
            arrivalTime: date.formatDate(flight.arrival_time, 'YYYY/MM/DD, HH:mm:ss'),
            duration: flight.duration,
            price: `${flight.price}$`
        }
    })
}


const startSearch = () => {
    let filterValues = getRows();
    
    if (!price.value && !time.value && !departureTime.value && !arrivalTime.value) {
        filterRows.value = getRows();
        return
    };

    if (price.value) {
        filterValues = filterValues.filter((row) => {
            return !(+row.price.slice(0, -1) < +price.value)
        })
    }

    if (time.value) {
        filterValues = filterValues.filter((row) => {
            console.log(parseInt(row.duration))
            return parseInt(row.duration) === +time.value
        })
    }

    if (departureTime.value) {
        filterValues = filterValues.filter((row) => {
            return new Date(departureTime.value).getTime() < new Date(row.departureTime).getTime()
        })
    }

    if (arrivalTime.value) {
        filterValues = filterValues.filter((row) => {
            return new Date(arrivalTime.value).getTime() > new Date(row.arrivalTime).getTime()
        })
    }

    setHistory({
           price: price.value || '',
           time: time.value || '',
           departureTime: departureTime.value || '',
           arrivalTime: arrivalTime.value || ''
        })

    filterRows.value = [...filterValues]
}
</script>