<template>
  <v-card outlined :loading="loading || imgSrc === ''">
    <v-dialog v-model="dConfirm" :width="isDesktop ? '500px' : '80vw'">
      <v-card dark="" :loading="loading">
        <v-card-title> Press confirm to delete {{ image.title }} </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dConfirm = false">Cancel</v-btn>
          <v-btn color="red" outlined @click="confirmDelete">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-img
      :aspect-ratio="isDesktop ? '1.67' : '2.2'"
      width="100%"
      :src="imgSrc"
      class="align-start text-right pa-1"
    >
      <v-btn color="red" dark icon @click="dConfirm = true">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-img>
    <v-card-text>
      <v-text-field :value="image.title" label="title" />
      <v-text-field :value="image.caption" label="caption" />
    </v-card-text>
  </v-card>
</template>

<script>
import storage from '@/helpers/galleries/storage'
import { mapActions } from 'vuex'

export default {
  name: 'ImageGridCell',
  props: {
    image: Object,
    loading: Boolean
  },
  data: () => ({
    imgSrc: '',
    dConfirm: false,
    newTitle: null,
    newCap: null
  }),
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.lgAndUp
    }
  },
  async mounted() {
    this.imgSrc = await storage.downUrl(this.image.path)
  },
  methods: {
    ...mapActions('galleries', { deleteImage: 'deleteImage' }),
    confirmDelete() {
      this.deleteImage(this.image)
      this.dConfirm = false
    }
  }
}
</script>
