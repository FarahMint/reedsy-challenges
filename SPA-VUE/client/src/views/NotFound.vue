<template>
<div class="not-found-page">
 <router-link to="/">Home</router-link>
  <h1>NOT FOUND</h1>
</div>
</template>

<script>
export default {
name:"NotFound"
}
</script>

<style>
 h1{
   margin: 5rem 0;
 }
 .not-found-page{
   height:100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 
</style>