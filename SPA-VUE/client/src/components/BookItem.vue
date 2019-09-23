<template>    
  <li class="book">
      
        <div class="desc">
               
                <h2 
                  v-on:click="goTodetail(book.slug)"
                >{{book.title}}  <span class="text-rating">
                ({{book.rating}} /{{bookslength}} ) 
                </span></h2>
            
    
          <p class="text-italic">{{book.author}}</p>
         
          <p class="text-synopsis">{{shorten(book.synopsis)}}...</p>
            <div class="actions">
              <button :class="book.upvoted ? `upvoted` : `upvote`">
              {{book.upvoted ? `upvoted` : `upvote`}}
              </button>

                <span>upvoted {{book.upvotes}} times</span> 
            </div>  
      </div>
        <div class="image-container">
            
          <img 
           v-bind:src="book.cover"
           v-bind:img-alt="book.title" 
             v-on:click="goTodetail(book.slug)">
        
        </div> 
  </li>       
</template>

<script>

import {mapGetters, mapActions } from "vuex";
export default {
  name: 'Book', 
      /** props from parent BooksList  */
    props:{
        book:{
            type:Object,
            required:true,
        },
        bookslength:{
            type:Number,
            required:true,
        },
        
    },
    computed: {
      ...mapGetters(["formatSynopsys"]),
    
    },  
      methods:{
         ...mapActions([ "fetchSingleBook" ]),
    // Shorten a string to less than maxLen characters without truncating words.
        shorten(str,  separator = ' '){
          let maxLen= 200;
          if (!str || str.length <= maxLen) return str;
          return str.substr(0, str.lastIndexOf(separator, maxLen));
        },
                   /** go to details page of item targeted */
       goTodetail(slug) {
      this.$router.push({name:'BookDetails', params:{slug:slug}});
      this.fetchSingleBook();
       }//goTodetail
      },
}
</script>

<style lang="scss">
/** book element */
 .book{ 
    position:relative;
    display: flex;
    height:100%;
    padding: 1.25rem;

      h2,
      .image-container{/** pointer only in the book list */
      cursor:pointer;
      }

      h2{ /** target span in h2 */
        span{
          margin-left: .5rem;
          color:#000;
          font-weight: 200;
        }//end span
      }//end h2

      .desc,
      .actions{ /** same display for both elements  */
        display: flex;
      }

      .text-italic,
      .text-synopsis,
      .actions{ /** align with list num */
        margin-left: -1rem;
      }

    .desc{
        flex-direction: column;
        margin-right: 1rem;

        .actions{
          align-items: center;
          justify-content: flex-start;
          /**to push buttom @ the bottom */
          margin-top: auto;
        }//end .actions
    } //end desc
 } // end .book

 /**global  -- for both booklist and single book display*/

 h2{
  color: $darkYellow;
  font-weight: 900;
 }

  .text-synopsis{
  text-align: justify;
  }
  .text-italic{
    font-style: italic;
    color:$mainGrey;
  }

 button{
    border:none;
    padding:.75rem;
    cursor:pointer;
    border-radius:15px;
    text-transform: capitalize;
    font-size: 1.25rem;
    font-weight: bold;
    margin-right:1rem; 
  }

  button.upvote{
    background-color:$mainYellow;
    color:$mainWhite;
  }
  button.upvoted{
    color:$mainYellow;
    border:2px solid $mainYellow;
    background-color:$mainWhite;
  }

    // FOR ANY BROWSER WITH LESS THAN 660PX
@media(max-width:660px){

/** global */
  button {
  padding: .5rem;
  margin-right: 0; 
  }

  h2 {
    font-size: 1rem;
  }

/** book element */
  .book{
    padding:.5rem;
    .desc{
      .actions{  
        margin-top: 1rem;
        margin-bottom: 1rem;
    
          span{
            margin-left: 1rem;
            font-size: .85rem;
          }
        }
    }
  }
}
</style>