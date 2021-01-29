<template>
  <v-app>
    <v-app-bar app flat color="secondary" max-height="60">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center" cols="12">
              <div>
                <router-link class="d-flex align-center" to="/">
                  <img
                    class="mr-2"
                    height="30px"
                    src="https://en.instagram-brand.com/wp-content/themes/ig-branding/prj-ig-branding/assets/images/ig-logo.svg"
                  />
                  <img
                    class="hidden-sm-and-down"
                    height="50px"
                    src="@/assets/ilogo.png"
                    alt=""
                    srcset=""
                  />
                </router-link>
              </div>
              <v-spacer></v-spacer>
              <input
                class="search hidden-sm-and-down"
                type="text"
                placeholder="Search"
              />
              <v-spacer></v-spacer>
              <v-btn class="mr-2" icon>
                <v-icon>fal fa-search</v-icon>
              </v-btn>
              <v-btn class="mr-2" icon>
                <v-icon>fal fa-bell</v-icon>
              </v-btn>
              <v-btn class="mr-2" icon>
                <v-icon>fal fa-paper-plane</v-icon>
              </v-btn>
              <v-btn text large class="add-photo">
                <v-icon left>fal fa-file-plus</v-icon>
                Add Photos
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <Navbar :drawer="drawer" @close-drawer="drawer = false"></Navbar>
    <v-main class="secondary">
      <div style="overflow:hidden !important;">
        <v-btn
          transition="slide-x-transition"
          v-if="!drawer"
          color="info"
          class="nav-fab-return"
          @click="drawer = true"
        >
          <v-icon small>fal fa-arrow-right</v-icon>
        </v-btn>
        <router-view> </router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
<style lang="scss">
div.v-main__wrap {
  overflow: hidden;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 0px;
  background-color: #3c3f51;
}
button.nav-fab-return {
  z-index: 999999;
  position: absolute;
  left: -15px;
  top: 66px;
  border-radius: 0px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

div.v-toolbar__content {
  padding: 0px;
}

input.search {
  height: 44px;
  border-radius: 10px;
  background-color: #484b5b;
  padding-left: 15px;
  width: 250px;
  color: white;
}

button.add-photo {
  background: linear-gradient(
    45deg,
    var(--v-accent-base),
    var(--v-primary-base)
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
}
</style>
