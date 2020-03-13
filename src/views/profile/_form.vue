<template>
  <v-container v-if="user" width="90%" style="max-width: 40rem; margin: 0 auto">
    <v-overlay :value="loading" absolute>
      <v-progress-circular indeterminate />
    </v-overlay>
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title>
            Profile Customization
          </v-card-title>
          <v-card-subtitle v-if="alias">
            {{ `url to your page: placeholder.com/${alias.id}` }}
          </v-card-subtitle>
          <v-form>
            <v-card-text>
              <v-alert v-if="saveError" color="red lighten-3" class="mb-2">
                {{ saveError }}
              </v-alert>
              <v-text-field
                label="Alias"
                hint="an alias for web directory"
                :value="alias ? alias.id : ''"
                :disabled="loading"
                @input="v => (newAlias = v)"
              />
              <v-text-field
                v-if="alias"
                label="Display Name"
                :value="alias.displayName"
                :disabled="loading"
                @input="v => (newDisplayName = v)"
              />
              <v-select
                label="Profile Color"
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
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="newAlias || newDisplayName || newColor"
                outlined
                color="green"
                :disabled="loading"
                @click="saveChanges"
              >
                save
                <v-icon>
                  mdi-content-save
                </v-icon>
              </v-btn>
              <v-spacer />
              <v-btn outlined @click="addSection">
                lines<v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn outlined @click="addSection({ isChips: true })">
                chips<v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="section in sections" :key="section.id" cols="12">
        <chips-form v-if="section.chips" :section="section" />
        <lines-form v-if="section.lines" :section="section" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ChipsForm from './_chips.vue'
import LinesForm from './_lines.vue'
import presetColors from '@/helpers/presetColors'

export default {
  name: 'AliasForm',
  components: {
    ChipsForm,
    LinesForm
  },
  data: () => ({
    newAlias: null,
    newDisplayName: null,
    newColor: null,
    colorItems: presetColors.map(c => ({ text: c, value: c })),
    saveError: null
  }),
  computed: {
    ...mapState('alias', {
      alias: 'current',
      aliastCreating: 'creationPending',
      aliasUpdating: 'updatePending',
      aliasDeleting: 'deletionPending'
    }),
    ...mapState('profile', {
      sections: 'items',
      sectionCreating: 'creationPending',
      sectionUpdating: 'updatePending',
      sectionDeleting: 'deletionPending',
      color: 'color'
    }),
    ...mapState('authentication', ['user']),
    loading() {
      return (
        this.aliastCreating ||
        this.sectionCreating ||
        this.aliasUpdating.length > 0 ||
        this.sectionUpdating.length > 0 ||
        this.aliasDeleting.length > 0 ||
        this.sectionDeleting.length > 0
      )
    }
  },
  watch: {
    user: {
      async handler(to) {
        if (to && (!this.alias || this.alias.userId !== to.id)) {
          await this.loadAlias()
          await this.loadProfile()
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('alias', {
      loadAlias: 'loadAlias',
      createAlias: 'createAlias',
      changeAlias: 'changeAlias',
      updateAlias: 'update'
    }),
    ...mapActions('profile', {
      loadProfile: 'getAll',
      addSection: 'addSection',
      setColor: 'setColor'
    }),
    async submitAlias() {
      try {
        if (!this.alias) await this.createAlias(this.newAlias)
        else await this.changeAlias({ to: this.newAlias, from: this.alias.id })
      } catch (e) {
        this.saveError = e
      }
      this.newAlias = ''
    },
    async saveChanges() {
      this.saveError = null
      try {
        if (this.newAlias) {
          await this.submitAlias()
          this.newAlias = null
        }
        if (this.newDisplayName) {
          const clone = { ...this.alias }
          clone.displayName = this.newDisplayName
          await this.updateAlias(clone)
          this.newDisplayName = null
        }
        if (this.newColor) {
          await this.setColor({ color: this.newColor })
          this.newColor = null
        }
      } catch (e) {
        console.log(e)
        this.saveError = e
      }
    }
  }
}
</script>
