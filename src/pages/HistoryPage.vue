<template>
    <div class="q-ma-md">
        <div class="text-h5 q-mt-sm q-mb-xs">Історія</div>
        <q-separator class="q-my-md q-mx-none" inset />

        <q-table
            class="my-sticky-header-last-column-table"
            flat bordered
            title="Польоти"
            :rows="rows"
            :columns="columns"
            row-key="name"
            no-data-label="Дані відсутні"
            @row-click="goToFlights"
        />
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { getHistory } from '../utils/history'

    const router = useRouter()
 
    const columns = [
        { name: 'departureTime', label: 'Час відправлення', field: 'departureTime' },
        { name: 'arrivalTime', label: 'Час прибуття', field: 'arrivalTime' },
        { name: 'time', label: 'Час польоту', field: 'time' },
        { name: 'price', label: 'Ціна', field: 'price'},
    ]

    const rows = getHistory()

    const goToFlights = (t,d,index) => {
        router.push("/flying")
        localStorage.setItem("indexHistory", index)
    }
</script>
