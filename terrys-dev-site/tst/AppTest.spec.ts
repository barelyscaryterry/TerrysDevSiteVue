import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../src/App.vue'
import DropdownMenu from '../src/components/DropdownMenu.vue'

describe('App.vue', () => {
    it('renders the DropdownMenu component', () => {
        const wrapper = mount(App)
        const dropdownMenu = wrapper.findComponent(DropdownMenu)
        expect(dropdownMenu.exists()).toBe(true)
    })
})