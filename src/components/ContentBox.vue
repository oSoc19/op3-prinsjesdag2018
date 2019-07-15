<template>
    <div class="circle">
      <div class="circle__inner">
        <div class="circle__wrapper">
          <h1 class="title" v-if="title" slot="title" v-html="title" :style="{ backgroundColor: backgroundTitleColor, color: textTitleColor}"></h1>
          <p class="circle__content">
            <span class="euro">{{ blockAmount}} euro</span>
            <span class="content">{{ content }}</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    blockAmount: {
      type: Number
    },
    backgroundTitleColor: {
      type: String
    },
    textTitleColor: {
      type: String
    }
  }
};
</script>
<style lang="scss">
.circle {
  position: relative;
  display: block;
  margin: 0 auto;
  background-color: transparent;
  text-align: center;
  width: 250px;
  height: 250px;

  @include desktop {
    width: 350px;
    height: 350px;
  }
}

.circle:after {
  display: block;
  padding-bottom: 100%;
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: rgb(233, 233, 233);
  content: "";
}

.circle__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circle__wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: white;
    background-color: #ff6666;
    font-weight: 600;
    text-transform: lowercase;
    border-radius: 50px;
    padding: 7px;
    width: 100%;
  }
}

.circle__content {
  display: flex;
  padding: 0 1.4em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;

  .euro {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .text {
    color: #3c3c3c;
    font-weight: 500;
    font-size: 0.9em;
    margin-bottom: 5px;

    @include desktop {
      font-size: 1em;
    }
  }

  .content {
    color: #3c3c3c;
    font-size: 0.9em;
    width: 100%; // IE11

    @include desktop {
      font-size: 1em;
    }
  }
}
</style>
