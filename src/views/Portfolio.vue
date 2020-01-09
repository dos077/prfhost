<template>
  <div
    id="maindiv"
    :class="{ content: true, vertical: !isDesktop, horizontal: isDesktop }"
  >
    <section class="nav" style="background-color: #ef6c00">
      <v-card flat dark color="rgba(0, 0, 0, 0)">
        <v-card-title>
          <h1 class="display-2 mb-4">Portfolio</h1>
        </v-card-title>
        <v-tabs
          v-model="tab"
          :vertical="isDesktop"
          grow
          background-color="rgba(0,0,0,0)"
          :slider-size="isDesktop ? '0' : '2'"
          active-class="current"
          style="justify-content: center;"
        >
          <v-tab>
            Impact Weather
          </v-tab>
          <v-tab>
            Task-man
          </v-tab>
        </v-tabs>
      </v-card>
    </section>
    <section class="main">
      <v-tabs-items v-model="tab" vertical>
        <v-tab-item>
          <short-read
            :cover="tabOne.cover"
            :title="tabOne.title"
            :lines="tabOne.lines"
            :github="tabOne.github"
            :demo="tabOne.demo"
            :showing="tab == 0"
          ></short-read>
        </v-tab-item>
        <v-tab-item>
          <short-read
            :cover="tabOne.cover"
            :title="tabOne.title"
            :lines="tabOne.lines"
            :github="tabOne.github"
            :demo="tabOne.demo"
            :showing="tab == 1"
          ></short-read>
        </v-tab-item>
      </v-tabs-items>
    </section>
  </div>
</template>

<script>
import ShortRead from './components/ShortRead.vue'

const sampleRead = {
  cover:
    'https://drive.google.com/uc?export=view&id=1InoxJSYoxnEIuuYZCjfIt1s6qstII1sc',
  title: 'Impact Weather',
  github: 'https://github.com/dos077/impact-weather',
  demo: 'https://dos077.github.io/impact-weather/',
  lines: [
    {
      text:
        'A single page vue app with Zeitnow serverless backend handling api requests to Gyphy and Open Weather Map. Styled after popular meme formats with weather related gif and font that resembles Impact.'
    },
    {
      image: {
        src:
          'https://drive.google.com/uc?export=view&id=1FicCIyM_ejDkak3fP4HoKcvcU0YGY4y4'
      }
    },
    {
      text:
        'A single page vue app with Zeitnow serverless backend handling api requests to Gyphy and Open Weather Map. Styled after popular meme formats with weather related gif and font that resembles Impact.'
    },
    {
      image: {
        caption:
          "MOMA - New York. When you don't know what to believe in, let me be your religion.",
        src:
          'https://drive.google.com/uc?export=view&id=1c2mkMUR_KH4raCz8wdsWg7lP4IbxRjhU'
      }
    },
    {
      text:
        'A single page vue app with Zeitnow serverless backend handling api requests to Gyphy and Open Weather Map. Styled after popular meme formats with weather related gif and font that resembles Impact.'
    },
    {
      small: true,
      image: {
        src:
          'https://drive.google.com/uc?export=view&id=1ZvvvELJ3e6VPt_BkwHoZ9WfjMm2-eoIq'
      }
    },
    {
      small: true,
      image: {
        src:
          'https://drive.google.com/uc?export=view&id=1a8RSEN_plYogwrYCqMt3kNsa-sVUFDJK'
      }
    },
    {
      text:
        'A single page vue app with Zeitnow serverless backend handling api requests to Gyphy and Open Weather Map. Styled after popular meme formats with weather related gif and font that resembles Impact.'
    },
    {
      text:
        'A single page vue app with Zeitnow serverless backend handling api requests to Gyphy and Open Weather Map. Styled after popular meme formats with weather related gif and font that resembles Impact.'
    }
  ]
}

export default {
  name: 'Portfolio',
  components: {
    ShortRead
  },
  data() {
    return {
      tab: null,
      tabOne: sampleRead
    }
  },
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: grid;
  &.vertical {
    grid-template-columns: 1fr;
    grid-template-rows: 168px auto;
    section {
      width: 100%;
    }
  }
  &.horizontal {
    height: 100%;
    grid-template-columns: 384px auto;
    section {
      height: 100%;
    }
    .nav {
      position: sticky;
      top: 0;
      padding: 8vh 0 16vh;
    }
  }
  .nav {
    display: flex;
    max-height: 100vh;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .current {
    color: white;
  }
}
</style>
