<template>
  <v-card outlined style="margin: 2rem auto; max-width: 480px" class="pa-2">
    <v-card-title>No Project Selected</v-card-title>
    <v-card-actions>
      <v-btn :disabled="pending" color="success" @click="create">
        <v-icon>mdi-plus</v-icon>new project
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SelectNotice',
  data: () => ({
    pending: false
  }),
  computed: {
    ...mapState('profolio', ['current'])
  },
  methods: {
    ...mapActions('profolio', ['createBlank']),
    async create() {
      this.pending = true
      await this.createBlank()
      this.$router.push(`/profolio/edit/${this.current.id}`)
      this.pending = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
