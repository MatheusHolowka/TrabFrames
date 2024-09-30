<template>
  Dashboard do Admin

  <v-toolbar app color="primary" dark>
    <!-- usuario logado -->
     <v-avatar>
      <v-img :src="store.user.photoURL"/>
     </v-avatar>
      <v-toolbar-title>{{store.user.displayName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="store.logout">Sair</v-btn>
  </v-toolbar>
  <v-container>
    dashboard
  </v-container>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore()
</script>
