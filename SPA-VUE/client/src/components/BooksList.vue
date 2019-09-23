<template>
<div>
<p class="error" v-if="error">{{error}}</p>

<div v-if="!displayBooks.length">Sorry no results found!</div>

    <ol> <BookItem 
              v-for="(item , index) in  displayBooks"
            :book="item"
            :index="index"
            :key="item.slug"
            :bookslength="bookslength"
              /> </ol>

  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import BookItem from "./BookItem";
 


export default {
  name: 'BooksList',
    components:{ BookItem }, 
    methods:{
     ...mapActions(["fetchAllBooks"])
   
    },

    computed: {
    ...mapGetters(["allBooks" , "bookslength", "error", "getSearchedBooks"
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

// .container{
//     width: 100%;
//     height:100%;
//     padding-top: 1rem;

//     h1{
//       margin:0;
//       margin-bottom:2rem;
//       text-align: center;
//       color:$mainYellow;
//       font-weight: 900;
//     }

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
