<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content fluid>
      <slot></slot>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>
