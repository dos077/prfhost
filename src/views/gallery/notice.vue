<template>
  <v-card outlined style="margin: 2rem auto; max-width: 480px" class="pa-2">
    <v-card-title>Collection Customizations</v-card-title>
    <v-card-text>
      <v-form>
        <v-alert v-if="error" color="red lighten-3" class="mb-2">
          {{ error }}
        </v-alert>
        <v-text-field
          label="Collection Name"
          :value="collectionName"
          @input="v => (newName = v)"
        />
        <v-select
          label="Collection Color"
          filled
          :background-color="`${newColor || color} darken-2`"
          dark
          :item-color="newColor || color"
          :value="color"
          :items="colorItems"
          @input="v => (newColor = v)"
        >
          <template v-slot:item="{ item }">
            <v-list-item-avatar>
              <v-avatar :color="`${item.value} darken-2`" />
            </v-list-item-avatar>
            <v-list-item-title :class="`text--${item.value}`">
              {{ item.text }}
            </v-list-item-title>
          </template>
        </v-select>
        <v-btn
          v-if="newColor || newName"
          outlined
          color="green"
          @click="saveChanges"
        >
          <v-icon class="mr-2">mdi-content-save</v-icon> save
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="pending" color="success" @click="newGallery">
        <v-icon>mdi-plus</v-icon>new gallery
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import presetColors from '@/helpers/presetColors'

export default {
  name: 'SelectNotice',
  data: () => ({
    pending: false,
    newName: null,
    newColor: null,
    colorItems: presetColors.map(c => ({ text: c, value: c })),
    error: null
  }),
  computed: {
    ...mapState('galleries', ['current', 'collectionName', 'color'])
  },
  methods: {
    ...mapActions('galleries', ['createBlank', 'rename', 'setColor']),
    async newGallery() {
      this.pending = true
      await this.createBlank()
      this.$router.push(`/galleries/edit/${this.current.id}`)
      this.pending = false
    },
    async saveChanges() {
      this.error = null
      if (this.newName) {
        try {
          await this.rename({ name: this.newName })
          this.newName = null
        } catch (e) {
          this.error = e
        }
      }
      if (this.newColor) {
        try {
          await this.setColor({ color: this.newColor })
          this.newColor = null
        } catch (e) {
          this.error = e
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
