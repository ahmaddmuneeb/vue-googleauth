<template>
  <div class="auth">
    <h1>{{ msg }}</h1>

    <h1>Auth Service Status: {{ Vue3GoogleOauth.isInit }}</h1>
    <h1>Is Authorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
    <h2 v-if="user">Logged in user: {{ user }}</h2>

    <button @click="handleSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">Sign In</button>
    <button @click="handleSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">Sign Out</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "GoogleAuth",
  props: {
    msg: String,
  },

  data() {
    return {
      user: "",
    };
  },

  methods: {
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();

        if (!googleUser) {
          return null;
        }

        this.user = googleUser.getBasicProfile().getEmail();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();

        this.user = "";
      } catch (error) {
        console.log(error);
      }
    },
  },

  setup() {
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    return {
      Vue3GoogleOauth,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
