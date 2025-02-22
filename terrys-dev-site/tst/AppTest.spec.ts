import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../src/App.vue'
import NavBar from '../src/components/NavBar.vue'
import NavItem from '../src/components/NavItem.vue'
import DropdownMenu from '../src/components/DropdownMenu.vue'

describe('App.vue', () => {
    it('renders the NavBar component', () => {
        const wrapper = mount(App)
        expect(wrapper.findComponent(NavBar).exists()).toBe(true)
    })

    it('renders the NavItem components', () => {
        const wrapper = mount(App)
        const navItems = wrapper.findAllComponents(NavItem)
        expect(navItems.length).toBe(3)
        expect(navItems[0].props('text')).toBe("Terry's Dev Site")
        expect(navItems[1].props('text')).toBe('About')
        expect(navItems[2].props('text')).toBe('Contact')
    })

    it('renders the DropdownMenu component', () => {
        const wrapper = mount(App)
        const dropdownMenu = wrapper.findComponent(DropdownMenu)
        expect(dropdownMenu.exists()).toBe(true)
        expect(dropdownMenu.props('text')).toBe('Services')
    })
})