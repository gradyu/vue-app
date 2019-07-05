<template>
  <div>
    <app-drawer :drawer="drawer" @change="drawerChanged"></app-drawer>
    <app-toolbar @toggle="drawer = !drawer"></app-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  data: () => ({
    drawer: true
  }),
  methods: {
    drawerChanged(newState) {
      this.drawer = newState;
    }
  }
};
</script>
