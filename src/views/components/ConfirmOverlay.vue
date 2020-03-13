<template>
  <v-overlay v-if="overlayOn" absolute>
    <v-card max-width="25rem">
      <v-card-title>
        {{ message ? message : 'Are you sure?' }}
      </v-card-title>
      <v-card-actions>
        <v-btn color="red" @click="$emit('confirm')">
          confirm
        </v-btn>
        <v-btn color="grey darken-1" outlined @click="$emit('cancel')">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: 'ConfirmOverlay',
  props: {
    overlayOn: Boolean,
    message: String
  }
}
</script>
