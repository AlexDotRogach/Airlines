<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Сайт довідник
        </q-toolbar-title>

        <q-icon name="mdi-airplane" size="24px" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="q-mt-md">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const leftDrawerOpen = ref(false)

const linksList = [
  {
    title: 'Польоти',
    caption: 'Пошук польотів',
    icon: 'mdi-airplane',
    link: '/flying'
  },
  {
    title: 'Історія',
    caption: 'Історія пошуку',
    icon: 'mdi-note-multiple',
    link: '/history'
  },
  {
    title: 'Аеропорти',
    caption: 'Інформація про аеропорти',
    icon: 'mdi-airplane-takeoff',
    link: '/airport-info'
  },
  {
    title: 'Авіакомпанії',
    caption: 'Інформація про авіакомпанії',
    icon: 'mdi-home-map-marker',
    link: '/company-info'
  },
  {
    title: 'Контакти',
    caption: 'Контактна інформація',
    icon: 'mdi-contacts',
    link: '/contacts'
  },
]

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// export default defineComponent({
//   name: 'MainLayout',

//   components: {
//     EssentialLink
//   },

//   setup () {
//     const leftDrawerOpen = ref(false)

//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer () {
//         leftDrawerOpen.value = !leftDrawerOpen.value
//       }
//     }
//   }
</script>
