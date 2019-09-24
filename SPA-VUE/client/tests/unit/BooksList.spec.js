import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BooksList from '@/components/BooksList'
import flushPromises from 'flush-promises'
 

const localVue = createLocalVue()
localVue.use(Vuex)

// jest.mock('@/api', () => ({
//     getAllBooks: jest.fn(() => {
            
//     return new Promise(resolve => {
//       process.nextTick(() => {
//         resolve({ books: [{ title: 'title 1' }, { title: 'title 2' }] })
//       })
//     })
//   })
// }))

jest.mock('@/api')

describe('BooksList', () => {
  let wrapper
  let store
  let actions
  let getters
  // eslint-disable-next-line
 
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
          actions
        }
      }
    })
    wrapper = shallowMount(BooksList, {
      localVue,
      store,
    })

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })
 

  it('component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
 
  it('books have loaded', async () => {
    await flushPromises()
    jest.runAllTimers()
    //   expect(wrapper.find("BookItem").length).toBe(2);
    expect(wrapper.contains('.container')).toBe(true)

  })

//   it('books have loaded', async () => {
//     await flushPromises()
//     jest.runAllTimers()
  
//   })

})