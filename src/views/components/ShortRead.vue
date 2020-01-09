<template>
  <div>
    <v-img
      ref="titleImg"
      aspect-ratio="1.5"
      width="100%"
      max-height="50vh"
      class="sticky-img"
      :src="cover"
    />
    <v-container id="container" :class="{ desktop: isDesktop }">
      <v-row>
        <v-col>
          <div ref="title" class="sticky-caption">
            <span class="display-3">{{ title }}</span>
            <div></div>
            <span>
              <v-btn v-if="github" text>Github</v-btn>
              <v-divider vertical></v-divider>
              <v-btn v-if="demo" text>Live Demo</v-btn>
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(line, index) in lines"
          :key="index"
          :cols="line.small ? '6' : '12'"
        >
          <v-img
            v-if="line.image"
            :id="`stickyImg${index}`"
            :src="line.image.src"
            width="100%"
            :aspect-ratio="line.small ? '0.8' : '1.8'"
          />
          <p
            v-if="line.image && line.image.caption"
            :id="`stickyCap${index}`"
            class="sticky-caption"
          >
            <span>{{ line.image.caption }}</span>
          </p>
          <p v-if="line.text">
            {{ line.text }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import stickyCaptionsController from '../../helpers/stickyCaptions'

export default {
  name: 'ShortRead',
  props: {
    cover: String,
    title: String,
    lines: Array,
    isDesktop: Boolean,
    github: String,
    demo: String,
    showing: Boolean
  },
  data() {
    return {
      stickyController: null
    }
  },
  mounted() {
    this.mountStickyController()
    this.$watch('showing', this.stickySwitch, { immediate: true })
  },
  destroyed() {
    this.stickyController.stop()
  },
  methods: {
    mountStickyController() {
      const { titleImg, title } = this.$refs
      const pairs = [{ img: titleImg.$el, caption: title }]
      this.lines.forEach((line, index) => {
        if (line.image && line.image.caption) {
          const img = document.getElementById(`stickyImg${index}`)
          const caption = document.getElementById(`stickyCap${index}`)
          if (img && caption) pairs.push({ img, caption })
        }
      })
      this.stickyController = stickyCaptionsController()
      this.stickyController.set(pairs)
    },
    stickySwitch(showing) {
      if (showing) {
        this.stickyController.start()
      } else this.stickyController.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 94%;
  max-width: 66em;
  margin: 0 auto;
  background-color: white;

  &.desktop {
    width: 75%;
  }

  p {
    margin: 0 12px 1px;
  }
}
.sticky-img {
  z-index: 0;
}
.sticky-caption {
  position: relative;
  z-index: 1;
  span {
    display: inline-block;
    padding: 4px 4px 6px;
    margin-bottom: 16px;
    background-color: white;
  }
}
</style>
