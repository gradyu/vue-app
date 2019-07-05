<template>
  <v-toolbar
    app
    dark
    fixed
    color="primary"
    :clipped-left="$vuetify.breakpoint.mdAndUp"
  >
    <v-toolbar-side-icon @click.stop="$emit(`toggle`)"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase white--text">
      {{ appTitle }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      append-icon="mic"
      class="mx-3"
      flat
      label="Search"
      prepend-inner-icon="search"
      solo-inverted
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <template v-for="(menu, idx) in menus">
        <v-btn icon :key="idx" :to="menu.router">
          <v-icon>{{ menu.icon }}</v-icon>
        </v-btn>
      </template>
      <v-menu bottom left>
        <template #activator="{ on: menu }">
          <v-tooltip bottom>
            <template #activator="{ on: tooltip }">
              <v-btn icon v-on="{ ...tooltip, ...menu }">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <span>More Menus</span>
          </v-tooltip>
        </template>
        <v-list class="pt-0" dense>
          <v-list-tile
            v-for="item in mores"
            :key="item.title"
            :to="item.router"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "AppToolbar",
  data: () => ({
    appTitle: "Hello Vuetify",
    menus: [
      { icon: "apps", title: "Apps", router: "/about" },
      { icon: "shop", title: "Shop", router: "/about" }
    ],
    mores: [
      { icon: "schedule", title: "History", router: "/about" },
      { icon: "local_see", title: "Photo", router: "/about" },
      { icon: "person", title: "Profile", router: "/about" },
      { icon: "info", title: "About", router: "/about" }
    ]
  })
};
</script>
