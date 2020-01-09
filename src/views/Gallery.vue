<template>
  <div
    id="maindiv"
    :class="{ content: true, vertical: !isDesktop, horizontal: isDesktop }"
  >
    <section class="nav" style="background-color: #283593">
      <v-card flat dark color="rgba(0, 0, 0, 0)">
        <v-card-title>
          <h1 class="display-2 mb-4">Photography</h1>
        </v-card-title>
        <v-tabs
          v-model="tab"
          :vertical="isDesktop"
          grow
          background-color="rgba(0,0,0,0)"
          :slider-size="isDesktop ? '0' : '2'"
          active-class="current"
          style="justify-content: center;"
        >
          <v-tab>
            Architectures
          </v-tab>
          <v-tab>
            Candids
          </v-tab>
        </v-tabs>
      </v-card>
    </section>
    <section class="main">
      <v-tabs-items v-model="tab" vertical>
        <v-tab-item>
          <image-grid />
        </v-tab-item>
        <v-tab-item>
          <h1 class="display-4">Candids</h1>
        </v-tab-item>
      </v-tabs-items>
    </section>
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'

export default {
  name: 'Gallery',
  components: {
    ImageGrid
  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: grid;
  &.vertical {
    grid-template-columns: 1fr;
    grid-template-rows: 168px auto;
    section {
      width: 100%;
    }
  }
  &.horizontal {
    height: 100%;
    grid-template-columns: 384px auto;
    section {
      height: 100%;
    }
    .nav {
      position: sticky;
      top: 0;
      padding: 8vh 0 16vh;
    }
  }
  .nav {
    display: flex;
    max-height: 100vh;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .current {
    color: white;
  }
}
</style>
