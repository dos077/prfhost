<template>
  <nav-content :title="'Photography'" :bg-color="'#283593'">
    <template v-slot:nav>
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
    </template>
    <template v-slot:content>
      <v-tabs-items v-model="tab" vertical>
        <v-tab-item>
          <image-grid />
        </v-tab-item>
        <v-tab-item>
          <h1 class="display-4">Candids</h1>
        </v-tab-item>
      </v-tabs-items>
    </template>
  </nav-content>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'
import NavContent from '@/views/components/NavContent.vue'

export default {
  name: 'Gallery',
  components: {
    ImageGrid,
    NavContent
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

<style lang="scss" scoped></style>
