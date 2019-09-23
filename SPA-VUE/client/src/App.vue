<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background-color: $lightYellow;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   
    max-width: 800px;
    width: 100%;
    height:100%;
    margin: 0 auto;

          -webkit-box-shadow: -2px 0px 3px 5px rgba(0,0,0,0.25);
    box-shadow: -2px 0px 3px 5px rgba(0,0,0,0.25);
}

img{
  width:100%;
  border-radius: $borderRadius;
}
 
</style>
