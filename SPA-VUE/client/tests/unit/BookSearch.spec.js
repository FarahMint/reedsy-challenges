import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BookSearch from '@/components/BookSearch'
 

const localVue = createLocalVue()
localVue.use(Vuex)


jest.mock('@/api')

describe('BookSearch', () => {
  let wrapper
  let store
  let actions
  let getters
  // eslint-disable-next-line
 
  beforeEach(() => {
   getters ={
    getquery: (state) => state.query,
    getSearchedBooks: (state) => state.searchedBooks,
   }
    actions={ 
        searchBooks:jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        books: {
          actions,
          getters
        }
      }
    })
    wrapper = shallowMount(BookSearch, {
      localVue,
      store
    })

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })
  it('component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders input tag', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

  it('dispatches "searchWord"', () => {
    const input = wrapper.find('input')
    input.trigger('input')
    expect(actions.searchBooks).toHaveBeenCalled()
  })
})