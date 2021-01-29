<template>
  <div>
    <v-navigation-drawer v-model="drawer" width="300" app color="secondary">
      <div class="d-flex justify-center mt-5">
        <div style="border:2px solid red;padding:5px;border-radius:100px;">
          <v-avatar size="80">
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-avatar>
        </div>
      </div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">
            Sandra Adams
          </v-list-item-title>
          <v-list-item-subtitle class="text-center"
            >sandra_a88@gmail.com</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex align-center justify-space-between px-4">
        <div class="text-center">
          <div>
            46
          </div>
          <div>
            Posts
          </div>
        </div>
        <v-divider vertical></v-divider>
        <div class="text-center">
          <div>
            2.8K
          </div>
          <div>
            Follower
          </div>
        </div>
        <v-divider vertical></v-divider>
        <div class="text-center">
          <div>
            526
          </div>
          <div>
            Following
          </div>
        </div>
      </div>
      <v-list dense>
        <span v-for="navitem in navitems" :key="navitem.id">
          <v-list-item router link :to="navitem.routes">
            <v-list-item-icon>
              <v-icon>{{ navitem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="d-flex"
              >{{ navitem.title }} <v-spacer></v-spacer>
              <span class="grey--text">{{ navitem.count }}</span>
            </v-list-item-title>
          </v-list-item>
        </span>
        <!-- <v-divider inset class="my-2"></v-divider> -->
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn block v-bind="attrs" v-on="on">
                <v-icon left>info</v-icon>
                Info
              </v-btn>
            </template>

            <v-card>
              <v-card-title
                >The work done her is based on following link</v-card-title
              >
              <v-card-text>
                <ul>
                  <li>
                    <a
                      href="https://dribbble.com/shots/10584599-Instagram-Redesign-Desktop-Dark/attachments/2353953?mode=media"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Concept Design Link
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/Veno_Design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Designer's Profile
                    </a>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <v-btn
        v-if="drawer"
        class="nav-fab"
        color="info"
        transition="slide-x-reverse-transition"
        @click="closedrawer()"
      >
        <v-icon small>
          fal fa-arrow-left
        </v-icon>
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "nav",
  props: ["drawer"],
  data() {
    return {
      dialog: false,
      // drawer: drawer,
      navitems: [
        {
          id: "0",
          icon: "fal fa-grip-horizontal",
          title: "Feed",
          routes: "/",
        },
        {
          id: "1",
          icon: "fal fa-search",
          title: "Explore",
          // routes: "/explore",
        },
        {
          id: "2",
          icon: "fal fa-bell",
          title: "Notifications",
          count: "11",
          // routes: "/notifications",
        },
        {
          id: "3",
          icon: "fal fa-paper-plane",
          title: "Direct",
          count: "2",
          // routes: "/direct",
        },
        {
          id: "4",
          icon: "fal fa-tv-retro",
          title: "IG TV",
          // routes: "/ig-tv",
        },
        {
          id: "5",
          icon: "fal fa-signal-alt-3",
          title: "Stats",
          // routes: "/stats",
        },
        {
          id: "6",
          icon: "fal fa-cog",
          title: "Settings",
          // routes: "/settings",
        },
        {
          id: "7",
          icon: "fal fa-sign-out",
          title: "Log Out",
        },
      ],
    };
  },
  methods: {
    closedrawer() {
      this.$emit("close-drawer");
    },
  },
};
</script>
<style lang="scss">
.v-navigation-drawer__border {
  display: none;
}

.v-list-item {
  border-right: 5px solid transparent;
  &.v-list-item--active {
    border-right: 5px solid var(--v-primary-base);
    div.v-list-item__icon {
      i {
        color: var(--v-primary-base);
      }
    }
  }
}

button.nav-fab {
  position: absolute;
  right: -15px;
  top: 130px;
  border-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>
