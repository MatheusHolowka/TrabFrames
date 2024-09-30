<template>
  <v-container>
    <v-btn @click="store.login">Google</v-btn>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore()
</script>

