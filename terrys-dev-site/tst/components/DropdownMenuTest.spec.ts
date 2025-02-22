import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DropdownMenu from '../../src/components/DropdownMenu.vue'

describe('DropdownMenu.vue', () => {
    it('renders the dropdown menu', () => {
        const wrapper = mount(DropdownMenu)
        expect(wrapper.exists()).toBe(true)
    })
})