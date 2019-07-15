<template>
  <div class="colofon-social">
    <colofon-social-link href="https://app.nos.nl/op3/prinsjesdag2018">
      <vector src="@/assets/img/social-icons/copy.svg" class="svg"></vector>
    </colofon-social-link>
    <colofon-social-icon
      :target="true"
      href="https://www.facebook.com/share.php?u=https://app.nos.nl/op3/prinsjesdag2018">
      <vector src="@/assets/img/social-icons/facebook.svg" class="svg"></vector>
    </colofon-social-icon>
    <colofon-social-icon
      :target="true"
      href="https://twitter.com/intent/tweet?text=Prinsjesdag 2018: als de overheid maar 1000 euro zou uitgeven, hoe zag de verdeling er dan uit?&url=https://nosop3.nl/prinsjesdag">
      <vector src="@/assets/img/social-icons/twitter.svg" class="svg"></vector>
    </colofon-social-icon>
    <colofon-social-icon href="mailto:?subject=Prinsjesdag 2018: als de overheid maar 1000 euro zou uitgeven, hoe zag de verdeling er dan uit?&body=https://app.nos.nl/op3/prinsjesdag2018">
      <vector src="@/assets/img/social-icons/mail.svg" class="svg"></vector>
    </colofon-social-icon>
  </div>
</template>

<script>
import ColofonSocialLink from "./ColofonSocialLink";
import ColofonSocialIcon from "./ColofonSocialIcon";

export default {
  components: {
    ColofonSocialLink,
    ColofonSocialIcon
  }
};
</script>

<style lang="scss" scoped>
.colofon-social {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 50px 0;

  .svg {
    width: 16px;
    height: 16px;
  }
}
</style>
