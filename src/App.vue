<template>
  <article>
    <side-menu :active-section-id="activeSection"/>
    <blocks :activeSectionId="activeSection" :sections="sections" :class="activeSection"/>

    <component
      v-in-viewport="-400"
      v-for="(section, key) in sections"
      ref="containerSection"
      :is="section.component"
      :active-section="activeSection"
      :sections="sections"
      :bg-color="section.bgColor"
      :height="section.height"
      :id="section.id"
      :key="key"
      :blockAmount="section.blockAmount"
      :barChartPercentage="section.barChartPercentage"
      :amountInBillions="section.amountInBillions"
      :section-id="section.id"
      :backgroundTitleColor="section.blockColor"
      :textTitleColor="section.textTitleColor">

        <div class="content" v-if="section.content">
          <content-box :title="section.title" :backgroundTitleColor="section.blockColor" :textTitleColor="section.textTitleColor" :content="section.content" :blockAmount="section.blockAmount"></content-box>
        </div>

        <component
          v-for="(component, index) in section.components"
          :key="index"
          :index="key"
          :is="component.name"
          :amount="component.amount"
          :bgColor="component.bgColor"
          :slot="component.slot"
          :file="component.file">
          {{ component.contents }}
        </component>
        <scroll-arrow v-scroll-to="section.scrollTo" v-if="section.scrollTo" slot="outsideWrapper"/>
    </component>
  </article>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import inViewport from "vue-in-viewport-directive";
import data from "@/data.json";

// Sections
import IntroSection from "@/sections/IntroSection";
import ContainerSection from "@/sections/ContainerSection";
import SummarySection from "@/sections/SummarySection";

// Components
import Blocks from "components/dataviz/Blocks";
import Logo from "components/Logo";
import ScrollArrow from "components/ScrollArrow";
import SideMenu from "components/SideMenu";
import IntroAnimation from "components/IntroAnimation";
import ContentBox from "components/ContentBox";
import Colofon from "components/Colofon";

export default {
  directives: {
    "scroll-to": VueScrollTo,
    inViewport
  },
  components: {
    IntroSection,
    ContainerSection,
    SummarySection,
    Blocks,
    Logo,
    ScrollArrow,
    IntroAnimation,
    SideMenu,
    ContentBox,
    Colofon
  },
  data() {
    return {
      sections: data.sections,
      activeSection: data.sections[0].id,
      bodyHeight: 0,
      scrollPosition: 0
    };
  },
  mounted() {
    this.setActiveSection();
    this.setBodyHeight();
    this.setScrollPosition();
    window.addEventListener("scroll", () => {
      this.setActiveSection();
      this.setBodyHeight();
      this.setScrollPosition();
    });
    window.addEventListener("resize", () => {
      this.setBodyHeight();
    });
  },
  methods: {
    setActiveSection() {
      const sections = this.$refs.containerSection;
      sections.forEach(section => {
        if (section.$el.classList.contains("in-viewport", "above-viewport")) {
          this.activeSection = section.$el.id;
        }
      });
    },
    setBodyHeight() {
      this.bodyHeight = document.body.offsetHeight - window.innerHeight;
    },
    setScrollPosition() {
      this.scrollPosition = Math.round(
        (window.scrollY / this.bodyHeight) * 100
      );
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: $main-font;
}

img {
  width: 100%;
}

#summary {
  z-index: $brute-force;
}
</style>
