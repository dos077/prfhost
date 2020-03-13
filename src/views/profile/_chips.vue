<template>
  <v-card outlined>
    <confirm-overlay
      :overlay-on="confirmScreen"
      :message="'Delete this section?'"
      @cancel="confirmScreen = false"
      @confirm="deleteSection(section.id)"
    />
    <v-toolbar color="blue darken-2" dark>
      <v-toolbar-items>
        <v-text-field
          :value="nameDisplay"
          single-line
          dense
          label="Section Name"
          style="position: relative; top: 8px"
          @input="nameInput"
        />
      </v-toolbar-items>
      <v-spacer />
      <v-btn v-if="changes" icon @click="saveChanges">
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-chip-group v-if="section.chips" column>
        <v-chip
          v-for="(c, index) in section.chips"
          :key="index"
          close
          :class="{ 'd-none': deleteIndices.includes(index) }"
          @click:close="deleteIndices.push(index)"
        >
          <v-icon v-if="c.icon" class="mr-1">{{ c.icon }} </v-icon>{{ c.text }}
        </v-chip>
      </v-chip-group>
      <v-chip-group column>
        <v-chip
          v-for="(c, index) in newChips"
          :key="index"
          color="green lighten-4"
          close
          @click:close="newChips.splice(index, 1)"
        >
          <v-icon v-if="c.icon">{{ c.icon }} </v-icon>{{ c.text }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-container style="width: 100%">
        <v-row>
          <v-col cols="5">
            <v-text-field v-model="newIcon" label="Mdi Icon" />
          </v-col>
          <v-col cols="7">
            <v-text-field v-model="newText" label="Text" />
          </v-col>
        </v-row>
        <v-row class="justify-between">
          <v-col>
            <v-btn outlined @click="newChip">
              new chip <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
          <v-spacer />
          <v-col>
            <v-btn outlined color="red" @click="confirmScreen = true">
              remove section <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import ConfirmOverlay from '@/views/components/ConfirmOverlay.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ChipForm',
  components: {
    ConfirmOverlay
  },
  props: {
    section: Object
  },
  data: () => ({
    newChips: [],
    deleteIndices: [],
    newIcon: null,
    newText: null,
    newName: null,
    confirmScreen: false
  }),
  computed: {
    changes() {
      return (
        (!!this.newChips && this.newChips.length > 0) ||
        !!this.newName ||
        this.deleteIndices.length > 0
      )
    },
    nameDisplay() {
      return this.newName || this.section ? this.section.name : ''
    }
  },
  methods: {
    ...mapActions('profile', {
      deleteSection: 'delete',
      updateSection: 'update'
    }),
    nameInput(v) {
      this.newName = v
    },
    newChip() {
      if (this.newText) {
        const text = this.newText
        const icon = this.newIcon
        this.newChips.push({ text, icon })
        this.newIcon = null
        this.newText = null
      }
    },
    async saveChanges() {
      const clone = { ...this.section }
      let chips = null
      if (this.section.chips) {
        chips = this.deleteIndices
          ? this.section.chips.filter(
              (c, index) => !this.deleteIndices.includes(index)
            )
          : [...this.section.chips]
      }
      if (!!this.newChips && this.newChips.length > 0) {
        if (!chips) chips = []
        chips.push(...this.newChips)
      }
      clone.chips = chips
      if (this.newName) clone.name = this.newName
      await this.updateSection(clone)
      this.newChips = []
      this.deleteIndices = []
      this.newName = null
    }
  }
}
</script>
