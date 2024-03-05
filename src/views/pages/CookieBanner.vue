<script>
export default {
  name: "CookieBanner",
  data() {
    return {
      cookiesShow: true,
    };
  },
  methods: {
    acceptCookies() {
      this.$posthog.opt_in_capturing();
      this.cookiesShow = false;
    },
    declineCookies() {
      this.$posthog.opt_out_capturing();
      this.cookiesShow = false;
    },
    showCookies() {
        return !( this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing() );
    }
  }

};
</script>

<template>
    <div class="cookie-banner" v-if="showCookies() && cookiesShow">
        <div>
            <div class="container">
                <div>
                    <p>This website stores cookies on your computer, which collect information about how you interact with our website and allow us to remember you. We use this information to improve your browsing experience and for metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.

                    <br>If you decline, your information won’t be tracked for marketing purposes. Cookies required for basic functioning of the website will still be in use.</p>
                    <button class="btn-accept" @click="acceptCookies">Accept</button>
                    <button class="btn-decline" @click="declineCookies">Decline</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.cookie-banner{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 50px 0;
    background: #CA0F20;
    z-index: 9;
}
.cookie-banner p{
    color: #fff;
    font-size: 16px;
}
.cookie-banner .btn-accept{
    padding: 6px 12px;
    margin-right: 10px;
    border: none;
    border-radius: 8px;
    background-color: #fff;
}
.cookie-banner .btn-accept:hover{
    background-color: #f0f0f0;
}
.cookie-banner .btn-decline{
    padding: 6px 12px;
    margin-right: 10px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
}
.cookie-banner .btn-decline:hover{
    background-color: #fff;
    color: #000;
}
</style>