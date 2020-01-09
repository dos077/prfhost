<template>
  <div id="maindiv">
    <div id="frametop" class="frame-top"></div>
    <div id="frameright" class="frame-right"></div>
    <div id="framebottom" class="frame-bottom"></div>
    <div id="frameleft" class="frame-left"></div>
  </div>
</template>

<script>
export default {
  name: 'Frames',
  data() {
    return {
      contentWidth: 0
    }
  },
  watch: {
    contentWidth: {
      handler(newWidth) {
        const w = document.body.clientWidth
        document.getElementById('frametop').style.left = `${w - newWidth + 5}px`
        document.getElementById('frameleft').style.left = `${w -
          newWidth +
          5}px`
        document.getElementById('framebottom').style.left = `${w -
          newWidth +
          5}px`
      }
    }
  },
  mounted() {
    this.updateWidth()
    window.onresize = this.updateWidth
  },
  methods: {
    updateWidth() {
      this.contentWidth = document.getElementById('maindiv').offsetWidth
    }
  }
}
</script>

<style lang="scss" scoped>
#maindiv {
  width: 100%;
  height: 0;
  overflow: visible;
}
[class*='frame-'] {
  position: fixed;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.8);
  &[class*='top'],
  &[class*='bottom'] {
    left: 5px;
    right: 5px;
    height: 1px;
    &[class*='top'] {
      top: 5px;
    }
    &[class*='bottom'] {
      bottom: 5px;
    }
  }
  &[class*='left'],
  &[class*='right'] {
    top: 5px;
    bottom: 5px;
    width: 1px;
    &[class*='left'] {
      left: 5px;
    }
    &[class*='right'] {
      right: 5px;
    }
  }
}
</style>
