<template>
    <vector src="../assets/img/intro.svg" class="intro-svg"></vector>
</template>
<style lang="scss">
.intro-svg {
  width: 300px;
  height: 200px;
  align-self: center;

  @include desktop {
    width: 400px;
    height: 300px;
  }
}
#blokje_1 {
  animation: blokje1 2s infinite alternate;
}

#blokje_2 {
  animation: blokje2 4s infinite normal;
}

#blokje_3 {
  animation: blokje3 4s infinite normal;
}

#blokje_4 {
  animation: blokje4 4s infinite normal;
}

#blokje_5 {
  animation: blokje5 4s infinite normal;
}

@keyframes blokje1 {
  0% {
    transform: translate(20px, 0px);
  }
  100% {
    transform: translate(10px, 0px);
  }
}

// pink
@keyframes blokje2 {
  0% {
    opacity: 1;
    transform: translate(10px, -10px);
  }
  100% {
    opacity: 0;
    transform: translate(30px, 60px) rotate3d(1, 1, 1, 20deg);
  }
}

// dark green
@keyframes blokje3 {
  0% {
    opacity: 1;
    transform: translate(30px, -100px);
  }
  100% {
    opacity: 0;
    transform: translate(100px, -60px) rotate3d(1, 1, 1, 25deg);
  }
}

@keyframes blokje4 {
  0% {
    opacity: 1;
    transform: translate(-50px, -100px);
  }
  100% {
    opacity: 0;
    transform: translate(20px, 40px) rotate3d(1, 1, 1, 25deg);
  }
}

@keyframes blokje5 {
  0% {
    opacity: 1;
    transform: translate(0px, -40px);
  }
  100% {
    opacity: 0;
    transform: translate(-20px, 0px) rotate3d(1, 1, 1, 25deg);
  }
}

// These are for the animation right before the colofon
// Why not put these in Colofon.vue? Cause its styles are scoped and we can't reach this SVG from there, even
// though it's inside the Colofon component ¯⁠\_(ツ)_/⁠¯
#blokjes_7 {
  animation: blokjes7 3s infinite normal linear;
}

@keyframes blokjes7 {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(30px, 0px);
  }
  60% {
    transform: translate(32px, 15px);
  }
  100% {
    transform: translate(32px, 15px);
  }
}
</style>
