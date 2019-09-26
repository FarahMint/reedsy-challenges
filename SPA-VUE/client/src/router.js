/**https://www.amuponda.com/2019/01/28/handling-404-errors-with-vue-router/ */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BookDetails from './views/BookDetails.vue'
import NotFound from "./views/NotFound.vue";
//  import store from "./store"
import {isValid}from "./store/modules/helper"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      /** returns a list of books, with their info. */
      path: '/books',
      name: 'home',
      default: true, // indicate if it's the default route
      component: Home
    },
    {
      /** returns the book information for the given SLUG (404 otherwise). */
      path: '/books/:slug',
      name: 'BookDetails',
      component: BookDetails,
      props: true ,
      beforeEnter: (to, from, next) => {

      if (!isValid(to.params.slug) ) {
        next({ name: 'NotFound',  params: { '0': to.path }  });
      }
       next();
       }
    },
    { 
      path: '/', 
      redirect: { name: 'home' }
    },
    {path:"/*",
    name: 'NotFound',
     component:NotFound},
  
  ]
})

 