import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BooksList from '@/components/BooksList'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('@/api')

describe('BooksList', () => {
  let wrapper
  let store
  let actions
  let getters
 
  beforeEach(() => {
      getters= {
        allBooks :(state)=> state.books,
        getSearchedBooks: (state) => state.searchedBooks,
        isLoading: state =>  state.isLoading ? false : state.books.length > 0,
        error:(state)=> state.error
      }

      actions={ 
          fetchAllBooks:jest.fn()
      }

      store = new Vuex.Store({
        modules: {
          books: {
            state: {
              books: []
            },
            getters,
            actions,
           
          }
        }
      })

    wrapper = shallowMount(BooksList, {
      localVue,
      store
    })

    jest.useFakeTimers()
  })

  afterEach(() => jest.useRealTimers())
  
  it("component mounts without errors", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })


  it("books have loaded" , async()=>{

      await flushPromises()
      jest.runAllTimers()
   
  })

  it("render bookItem component", ()=>{
    expect(wrapper.find("ol").isVisible()).toBe(true)
  })
})