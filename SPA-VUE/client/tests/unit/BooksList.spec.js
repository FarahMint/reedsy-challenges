import { shallowMount } from '@vue/test-utils'

import BooksList from '@/components/BooksList.vue'

describe('BooksList.vue', () => {

    it('renders a vue instance', () => {
        expect(shallowMount(BooksList).isVueInstance()).toBe(true);
      });
})