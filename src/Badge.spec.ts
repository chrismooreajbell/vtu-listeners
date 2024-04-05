import { mount } from '@vue/test-utils'

import { vi } from 'vitest'

import Badge from './Badge.vue'

describe('SomeBadge.vue', () => {
  it('renders the correct contents (with prop)', () => {
    const deleteListener = vi.fn()
    const wrapper = mount(Badge, {
      props: {
        onDelete: deleteListener
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
  })

  it('renders the correct contents (with attrs)', () => {
    const deleteListener = vi.fn()
    const wrapper = mount(Badge, {
      attrs: {
        delete: deleteListener
      }
    })

    console.log(wrapper.vm.$props)

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
  })
})
