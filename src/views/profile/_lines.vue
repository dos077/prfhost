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
        <v-btn v-if="changes" icon @click="saveChanges">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
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
      <v-btn icon @click="downPriority">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      {{ newPriority ? newPriority : 0 }}
      <v-btn icon @click="upPriority">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text v-for="line in section.lines" :key="line.id">
      <line-form
        :line="line"
        @delete-line="deleteLine"
        @update-line="updateLine"
      />
      <v-divider />
    </v-card-text>
    <v-card-actions>
      <v-btn outlined @click="newLine">
        new line<v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn outlined color="red" @click="confirmScreen = true">
        remove section <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import ConfirmOverlay from '@/views/components/ConfirmOverlay.vue'
import LineForm from './_line.vue'

export default {
  name: 'LinesForm',
  components: {
    ConfirmOverlay,
    LineForm
  },
  props: {
    section: Object
  },
  data: () => ({
    newName: null,
    newPriority: null,
    confirmScreen: false
  }),
  computed: {
    changes() {
      return this.newName !== null || this.newPriority !== this.section.priority
    },
    nameDisplay() {
      return this.newName || this.section ? this.section.name : ''
    }
  },
  mounted() {
    this.newPriority = this.section.priority || undefined
  },
  methods: {
    ...mapActions('profile', {
      deleteSection: 'delete',
      updateSection: 'update'
    }),
    newLine() {
      const newLines = [...this.section.lines]
      newLines.push({
        id: Date.now(),
        title: '',
        subTitle: '',
        secondTitle: '',
        secondSub: '',
        bulletPb: []
      })
      this.saveChanges({ lines: newLines })
    },
    nameInput(v) {
      this.newName = v
    },
    deleteLine(lineId) {
      const newLines = this.section.lines.filter(l => l.id !== lineId)
      this.saveChanges({ lines: newLines })
    },
    updateLine(line) {
      const newLines = this.section.lines.map(l => {
        if (l.id !== line.id) return l
        return line
      })
      this.saveChanges({ lines: newLines })
    },
    upPriority() {
      if (!this.newPriority) this.newPriority = 1
      else this.newPriority += 1
    },
    downPriority() {
      if (!this.newPriority) this.newPriority = -1
      else this.newPriority -= 1
    },
    async saveChanges({ lines }) {
      const clone = { ...this.section }
      if (this.newName) clone.name = this.newName
      if (this.newPriority) clone.priority = this.newPriority
      if (lines) clone.lines = lines
      await this.updateSection(clone)
    }
  }
}
</script>
