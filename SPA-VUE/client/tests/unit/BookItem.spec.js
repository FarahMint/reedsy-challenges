import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BookItem from '@/components/BookItem'
 

const localVue = createLocalVue()
localVue.use(Vuex)


jest.mock('@/api')

describe('BookItem', () => {
  let wrapper
  let store
  let actions
  // eslint-disable-next-line
 let goTodetail
 
  beforeEach(() => {
   
      actions={ 
        fetchSingleBook:jest.fn()
    }

   
    
    store = new Vuex.Store({
      modules: {
        books: {
          actions
        }
      }
    })
    wrapper = shallowMount(BookItem, {
      localVue,
      store,
      propsData: {
        book: {author:'red', title:"blue"},
        bookslength: 2,
        
      }
      
    })

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })
 

  it('component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
 
  it('renders li tag', () => {
    expect(wrapper.contains('.book')).toBe(true)
  })

  test('calls goTodetail when h2 is clicked', () => {             
    expect(wrapper.contains('h2')).toBe(true)

    wrapper.vm.goTodetail = jest.fn();
    wrapper.find("h2").trigger('click');
    expect(wrapper.vm.goTodetail).toBeCalled();
 
              
  })
})