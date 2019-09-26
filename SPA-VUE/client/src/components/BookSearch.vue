<template>
<div>
    <input 
    type="search"
    v-model="searchWord"
    placeholder="search...">
</div>

</template>

<script>

import { mapGetters, mapActions } from "vuex";
 


export default {
  name: 'BookSearch',

    methods:{
     ...mapActions(["searchBooks"])
   
    },
    computed: {
    ...mapGetters(["getSearchedBooks", "getquery"]),
     
    searchWord: {
      get () {
        return this.getquery;
      },
      set (value) {
        this.searchBooks(value)
      }
    }
 }, 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

 
</style>
