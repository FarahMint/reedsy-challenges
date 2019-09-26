<template>
<div class="container">
<p class="error" v-if="error">{{error}}</p>
<Loader  v-if="!isLoading" :text="'Loading books'"/>


      <ol> <BookItem 
            v-for="(item , index) in  displayBooks"
            :book="item"
            :index="index"
            :key="item.slug"
            :bookslength="bookslength"
              /> </ol>

<!-- <div v-if="!displayBooks.length">Sorry no results found!</div> -->
      </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import Loader from "./Loader";
import BookItem from "./BookItem";
 


export default {
  name: 'BooksList',
    components:{ 
      BookItem,
      Loader
      }, 
   
    methods:{
     ...mapActions(["fetchAllBooks"])
   
    },

    computed: {
    ...mapGetters( ["allBooks" , "bookslength", "error", "getSearchedBooks", "isLoading"
    ]),
       displayBooks () {
      return this.getSearchedBooks || this.allBooks;
    },
 },   

   async created(){
    this.fetchAllBooks()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

/** to style and change the color of num */
    ol {
    list-style: none;
    counter-reset: my-listBook-counter;
    }
    ol li {
      counter-increment: my-listBook-counter;
    }
    ol li::before {
      content: counter(my-listBook-counter) ". ";
      color: $darkYellow;
      font-weight: bold;
      font-size: 1.5rem;
    }

    /** change background color for each li tag odd num */
    li:nth-child(odd){
      background-color: $mainWhite;
    }
// }

   .error{
     border:1px solid red;
     color:red;
     padding:1rem;
   }


    // FOR ANY BROWSER WITH LESS THAN 660PX
@media(max-width:660px){

.container{
    ol li::before {
      font-size: 1rem;
    }
   .error{
     border:1px solid red;
     color:red;
     padding:1rem;
   }
  }
}
</style>
