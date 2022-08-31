<template>
  <div id="app">
    <button @click="_login()">Login with Goole</button>
    <p>{{ isLogin }}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { isLogin: false };
  },
  methods: {
    async _logout() {
      const logoutResponse = this.$gAuth.signOut();
      console.log("logoutResponse", logoutResponse);
    },
    async _login() {
      try {
        const googleUser = await this.$gAuth.signIn();
        console.log("User:", googleUser);
        console.log("ID:", googleUser.getId());
        console.log("Profile:", googleUser.getBasicProfile());
        console.log("Auth Response:", googleUser.getAuthResponse());
        console.log("Auth Response:", this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse());

        this.isLogin = this.$gAuth.isAuthorized;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
