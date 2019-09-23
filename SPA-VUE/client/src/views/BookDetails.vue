<template>
    <div class="content">
        
              <router-link to="/">Home</router-link>
        <div class="title-meta" v-if="singleBook">
            <h2>{{singleBook.title}} </h2>  
            <div class="actions">
                <span>upvoted {{singleBook.upvotes}} times</span> 
                <template v-if="singleBook.upvoted">
                <button class="upvoted">upvoted</button>
                </template>
                <template v-else >
                <button class="upvote">upvote</button>
                </template> 
            </div> 
        </div>
           
                <p class="text-italic">{{singleBook.author}}</p>
          
        <div class="image-container">
            <img 
                v-bind:src="singleBook.cover"
                v-bind:img-alt="singleBook.title">
        </div>
        <div class="desc">
            <h3>Synopsys</h3>
                <p class="text-synopsis">{{singleBook.synopsis}}</p>
          
                <p class="text-rating">Rating {{singleBook.rating}}/{{bookslength}}</p>
            </div>
    </div> 
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name:"BookDetails",
 
    computed: {
        ...mapGetters(["singleBook" , "bookslength"]), 
    },

 
  
}
</script>

<style scoped lang="scss">

.content{
    display:flex;
    flex-direction: column;
    align-items: center;
    background:$mainWhite;
    padding: 1.5rem;

    .title-meta{
        display: flex;
        align-items: center;
        width: 100%;
    }// end .title-meta

    .actions{
    margin-left: auto;
    }// .end actions

    .text-italic{
        align-self: flex-start;
    }//end .text-italic

    .text-rating{
        padding: 1rem 0;
        font-weight: bold;
    }//end .text-rating

    button {
        // margin-right: 0;
        margin-left: 1rem;
    }//end button
}

 


    // FOR ANY BROWSER WITH LESS THAN 660PX
@media(max-width:660px){
    /**global */
    button {
        padding: .5rem;
        margin-right: 0; 
    }

    /**single book displa */
    .content{
        .title-meta {
        flex-direction:column;
        align-items: flex-start;
        margin-top: 2rem;
        }

        .actions {
        margin-left: 0;
        }
    }
}
</style>