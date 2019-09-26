import { getAllBooks } from '@/api'

import router from '@/router'
//https://stackoverflow.com/questions/42178851/getting-router-params-into-vuex-actions
 


//  const URL="http://localhost:3000/books";
 /**
  * LS use: save data to LS when page refresh in boo/:id
  */

 let book= window.localStorage.getItem("selection")

const state={
books:[],
book: book? JSON.parse(book): {},
bookslength:null,
query: null,
searchedBooks: null,
isLoading:false,
error:""
};
 //// We need these to be able to access
// their values outside of the store module.
const getters={
 allBooks :(state)=> state.books,
 singleBook:(state)=>state.book,
 getquery: (state) => state.query,
 getSearchedBooks: (state) => state.searchedBooks,
 isLoading: state =>  state.isLoading ? false : state.books.length > 0 ,

 bookslength:(state)=>  state.books ? state.books.length : null,
 error:(state)=> state.error
};

const actions={

    async fetchAllBooks({commit}){
        try{
            // const data = await getAllBooks();
            // const  {books}= await data.json();

            const books = await getAllBooks();
           commit("FETCH_ALL_BOOKS", books); 
        }catch(err){
          commit("ERROR", err);
        }
    }, 
   fetchSingleBook({ commit }) {
        commit('FETCH_SINGLE_BOOK');
    
      },
    searchBooks ({ commit }, word) {
        commit('SEARCH_BOOK', word)
      }
};
  /** mutations : responsible of modifying the state - ! no async call 
   *  We use these to update the values of the store.
  */

const mutations={
   FETCH_ALL_BOOKS:(state, books)=>(state.books = books),
   FETCH_SINGLE_BOOK(state){
 state.book= state.books.find(item => item.slug === router.currentRoute.params.slug);
 this.commit("SAVE_DATA");
    // router.push({name: "BookDetails",  slug:router.currentRoute.params.slug})
  },
  SEARCH_BOOK (state, word) {
    // remove any  prev err message before starting new search
    this.commit("ERROR", "")
      if (!(word) || word === {}) {
        state.query = null
        state.searchedBooks = null
    } else {
      state.query = word;  
      state.searchedBooks = state.books.filter((book) => book.title.toLowerCase().includes(word) || book.synopsis.toLowerCase().includes(word));

      // err message if no result found
      state.searchedBooks.length === 0 ?
      this.commit("ERROR", "Sorry no results found!")
      : 
      this.commit("ERROR", "");
    } 
  
 
  },
 
  ERROR: (state, message) => {
    state.error = message
  },
  SAVE_DATA:(state)=>{
    window.localStorage.setItem("selection", JSON.stringify(state.book));
      },
};

export default { 
state,
getters,
actions,
 mutations
}

