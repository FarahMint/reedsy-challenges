<template>
<div  class="container">
     <h1>Top book of all times</h1>
     <BookSearch/>
    <BooksList/>
</div>
</template>

<script>
// @ is an alias to /src
import BooksList from '@/components/BooksList.vue'
import BookSearch from '@/components/BookSearch.vue'

export default {
  name: 'home',
  components: {
    BooksList,
     BookSearch
  }
}
</script>

<style  lang="scss">
 .container{
    width: 100%;
    height:100%;
    padding-top: 1rem;

    h1{
      margin:0;
      margin-bottom:2rem;
      text-align: center;
      color:$mainYellow;
      font-weight: 900;
    }
 }
</style>