<template>
  <section :style="containerStyle" class="container">
    <div class="container__wrapper">
      <vector src="../assets/img/koffer.svg" class="svg" alt=""></vector>
      <div class="title__wrapper">
        <h1>Hier gaat jouw geld dus heen:</h1>
        <p>Maar de overheid geeft natuurlijk véél meer uit dan 1000 euro. Volgend jaar is dat  <strong>{{ total }} miljard euro</strong>. Zo zien de werkelijke bedragen eruit.</p>
        <p style="font-size: .8em">Balk leeg? Klik erop!</p>
      </div>
      <bar-chart :sections="sections.slice().reverse()"></bar-chart>
    </div>
    <colofon></colofon>
  </section>
</template>
<script>
import { trackChapter } from "../utils/track";
import BarChart from "../components/dataviz/BarChart";
import Colofon from "../components/Colofon";
import data from "@/data.json";

export default {
  components: {
    BarChart,
    Colofon
  },
  props: {
    sections: {
      type: Array
    },
    activeSection: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    sectionId: {
      type: String,
      default: ""
    },
    trackerId: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: "#000"
    }
  },
  data() {
    return {
      total: data.total,
      tracked: false,
      showTooltip: false
    };
  },
  methods: {},
  computed: {
    containerStyle() {
      return `background-color: ${this.bgColor}`;
    }
  },
  watch: {
    activeSection() {
      if (this.activeSection === this.sectionId && !this.tracked) {
        trackChapter(this.trackerId);
        this.tracked = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 130vh;
  position: relative;
  z-index: $index-summary-section;
  background: white;

  .title__wrapper {
    padding: 200px 20px 10px 20px;

    @include tablet {
      padding: 200px 0 10px 0;

    }
  }

  h1 {
    margin: 0;
    font-weight: 500;
    text-align: center;
    font-size: 1.8em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5em;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: $brute-force;
    max-width: $container-width;
    margin: 0 auto;
    background: white;
    background-size: 100%;
  }

  .svg {
    position: absolute;
    top: -30px;
    width: 300px;
    left: 50%;
    transform: translate(-50%, 0)
  }
}
</style>
