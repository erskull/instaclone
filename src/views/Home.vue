<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="d-flex" cols="12">
          <div class="text-h5 font-weight-bold">
            Stories
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn text> <v-icon left> fal fa-play</v-icon>Watch All </v-btn>
          </div>
        </v-col>
        <v-col
          class="d-flex align-center py-0"
          style="overflow-y:hiidden;"
          cols="12"
        >
          <div
            class="mr-4"
            v-for="i in 100"
            :key="i"
            style="border:2px solid red;padding:5px;border-radius:100px;"
          >
            <v-avatar>
              <v-img src="https://ui-avatars.com/api/?name=John+Doe"></v-img>
            </v-avatar>
          </div>
        </v-col>
        <v-col class="d-flex align-center pb-0" cols="12">
          <div class="text-h5 font-weight-bold">
            Feed
          </div>
          <v-tabs
            v-model="model"
            right
            background-color="transparent"
            slider-color="yellow"
          >
            <v-tab v-for="i in tab" :key="i" :href="`#tab-${i.id}`">
              {{ i.title }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col class="pb-0" cols="12">
          <v-tabs-items v-model="model" class="transparent">
            <v-tab-item v-for="i in tab" :key="i" :value="`tab-${i.id}`">
              <masonry :cols="3" :gutter="20">
                <!-- <div v-for="(item, index) in items" :key="index">Item: {{index + 1}}</div> -->
                <!-- <div class="d-flex flex-wrap">
                  <div> -->
                <div v-for="i in 50" :key="i" class="mb-4">
                  <!-- height="400" -->
                  <v-card
                    max-height="350"
                    class="rounded-xl"
                    style="overflow:hidden;"
                  >
                    <v-img
                      eager
                      height="auto"
                      :src="'https://source.unsplash.com/random/' + i"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="accent"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <!-- <v-card-text class="pa-0">
                    </v-card-text> -->
                  </v-card>
                  <v-card flat class="mt-2" color="transparent">
                    <v-card-actions class="d-flex align-center ma-0 pa-0">
                      <div style="border:1px solid red;border-radius: 100px;">
                        <v-avatar class="ma-1" size="30">
                          <v-img
                            :src="
                              'https://randomuser.me/api/portraits/women/' +
                                i +
                                '.jpg'
                            "
                          ></v-img>
                        </v-avatar>
                      </div>
                      <v-card-title class="pa-0 ml-2">
                        erskull
                        <v-icon></v-icon>
                      </v-card-title>
                      <v-spacer></v-spacer>
                      <v-btn text class="d-flex align-center">
                        <v-icon small class="mr-2">
                          fal fa-heart
                        </v-icon>
                        12
                      </v-btn>
                      <v-btn text class="d-flex align-center">
                        <v-icon small class="mr-2">
                          fal fa-comment-alt
                        </v-icon>
                        12
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>
              </masonry>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tab: [
        {
          id: "0",
          title: "Latest",
        },
        {
          id: "1",
          title: "Popular",
        },
      ],
      model: "Latest",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style lang="scss">
a.v-tab {
  text-transform: none;
}
</style>
