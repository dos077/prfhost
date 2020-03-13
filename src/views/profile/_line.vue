<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-text-field
          v-model="title"
          label="Title"
          @input="changesMade = true"
        />
        <v-text-field
          v-model="subTitle"
          label="Subtitle"
          @input="changesMade = true"
        />
      </v-col>
      <v-col cols="5">
        <v-text-field
          v-model="secondTitle"
          label="Secondary Title"
          @input="changesMade = true"
        />
        <v-text-field
          v-model="secondSub"
          label="Secondary Subtitle"
          @input="changesMade = true"
        />
      </v-col>
      <v-col cols="12">
        <v-list color="grey lighten-4">
          <v-list-item v-for="(pb, index) in bulletPb" :key="index">
            <v-list-item-content>
              <v-text-field
                prepend-icon="mdi-circle-small"
                :value="pb"
                single-line
                @input="v => pbInput(v, index)"
              />
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="pbDelete(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item link @click="bulletPb.push('')">
            <v-list-item-icon><v-icon>mdi-plus</v-icon></v-list-item-icon>
            <v-list-item-content>
              New Bullet Point
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row class="justify-between">
      <v-col>
        <v-btn v-if="changes" color="green lighten-2" @click="saveChanges">
          save<v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-col>
      <v-col class="text-right">
        <v-btn outlined color="red" @click="$emit('delete-line', line.id)">
          delete<v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LineForm',
  props: {
    line: Object
  },
  data: () => ({
    title: '',
    subTitle: '',
    secondTitle: '',
    secondSub: '',
    bulletPb: [],
    changesMade: false
  }),
  computed: {
    changes() {
      if (!this.changesMade) return null
      const { bulletPb, line } = this
      const diffs = { id: line.id }
      const keys = ['title', 'subTitle', 'secondTitle', 'secondSub']
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i]
        if (this[key] !== line[key]) diffs[key] = this[key]
      }
      if (
        bulletPb.length !== line.bulletPb.length ||
        line.bulletPb.some((pb, i) => pb !== bulletPb[i])
      ) {
        diffs.bulletPb = bulletPb
      }
      return diffs
    }
  },
  watch: {
    line: {
      handler(to) {
        this.title = to.title
        this.subTitle = to.subTitle
        this.secondTitle = to.secondTitle
        this.secondSub = to.secondSub
        this.bulletPb = [...to.bulletPb]
        this.valuesInput = false
      },
      immediate: true
    }
  },
  methods: {
    pbInput(v, index) {
      this.bulletPb[index] = v
      this.changesMade = true
    },
    pbDelete(index) {
      this.bulletPb.splice(index, 1)
      this.changesMade = true
    },
    saveChanges() {
      if (this.changes) {
        const { changes, line } = this
        const clone = { ...line }
        Object.keys(changes).forEach(key => {
          clone[key] = changes[key]
        })
        this.$emit('update-line', clone)
        this.changesMade = false
      }
    }
  }
}
</script>
