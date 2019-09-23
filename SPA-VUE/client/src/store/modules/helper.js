import store from "./books";
  

export function isValid(key) {
  /** when page refresh the url has to be valid */
     if( store.state.book && store.state.book.slug===key ){
        return true;
     }
// if url not valid return false
return store.state.books.some(item => item.slug ===key);
  
  }
