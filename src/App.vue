<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'assets/css/reset.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
#app {
  padding: 100px 0;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  line-height: 1.4;
}
</style>
