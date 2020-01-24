<template>
  <v-card outlined style="margin: 2rem auto; max-width: 480px" class="pa-2">
    <v-card-title>No Gallery Selected</v-card-title>
    <v-card-actions>
      <v-btn color="success" @click="$emit('new-gallery')">
        <v-icon>mdi-plus</v-icon>new gallery
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SelectNotice'
}
</script>

<style lang="scss" scoped></style>
