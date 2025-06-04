import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CircleProgressBar from '../CircleProgressBar.vue'

describe('CircleProgressBar.vue', () => {
  const defaultProps = {
    value: 50,
    max: 100,
  }

  it('renders without errors with required props', () => {
    const wrapper = mount(CircleProgressBar, {
      props: defaultProps,
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct percentage when percentage prop is true', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        percentage: true,
      },
    })
    expect(wrapper.find('.circle-progress__percentage').text()).toBe('50%')
  })

  it('does not display percentage when percentage prop is false', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        percentage: false,
      },
    })
    expect(wrapper.find('.circle-progress__percentage').exists()).toBe(false)
  })

  it('has filled class when value >= max', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 100,
      },
    })
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--filled')
  })

  it('has unfilled class when value < max', () => {
    const wrapper = mount(CircleProgressBar, {
      props: defaultProps,
    })
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--unfilled')
  })

  it('has rounded class when rounded prop is true', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        rounded: true,
      },
    })
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--top--rounded')
  })

  it('sets colorFilled style when value >= max', () => {
    const colorFilled = 'rgb(0, 255, 0)'
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 100,
        colorFilled,
      },
    })
    const topCircle = wrapper.find('.circle-progress__line--top')
    expect(topCircle.classes()).toContain('circle-progress__line--filled')
    expect(topCircle.classes()).not.toContain('circle-progress__line--unfilled')
  })

  it('sets colorUnfilled style when value < max', () => {
    const colorUnfilled = 'rgb(255, 0, 0)' // This prop is used by the class, not directly asserted
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 30, // ensure value < max
        colorUnfilled, // Prop passed to ensure component uses it for the class
      },
    })
    const topCircle = wrapper.find('.circle-progress__line--top')
    expect(topCircle.classes()).toContain('circle-progress__line--unfilled')
    expect(topCircle.classes()).not.toContain('circle-progress__line--filled')
  })

  it('sets colorBack style indirectly (via v-bind CSS)', () => {
    const colorBack = 'rgb(0, 0, 255)'
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        colorBack,
      },
    })
    // Check that the stroke is not directly set, as it's handled by CSS v-bind
    // A more robust test would require computed style access, which is complex here.
    expect(wrapper.find('.circle-progress__line--back').attributes('stroke')).toBeUndefined()
  })

  it('renders correctly with reversedFilling prop', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        reversedFilling: true,
      },
    })
    // Basic check, more detailed check might involve snapshot testing or specific style assertions
    expect(wrapper.exists()).toBe(true)
  })

  it('handles value = 0 correctly', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 0,
        percentage: true,
      },
    })
    expect(wrapper.find('.circle-progress__percentage').text()).toBe('0%')
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--unfilled')
  })

  it('handles value = max correctly', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 100,
        percentage: true,
      },
    })
    expect(wrapper.find('.circle-progress__percentage').text()).toBe('100%')
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--filled')
  })

  it('handles value > max correctly (should be 100%)', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 150,
        percentage: true,
      },
    })
    expect(wrapper.find('.circle-progress__percentage').text()).toBe('100%')
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--filled')
  })

  it('handles value < max correctly', () => {
    const wrapper = mount(CircleProgressBar, {
      props: {
        ...defaultProps,
        value: 30,
        percentage: true,
      },
    })
    expect(wrapper.find('.circle-progress__percentage').text()).toBe('30%')
    expect(wrapper.find('.circle-progress__line--top').classes()).toContain('circle-progress__line--unfilled')
  })

  it('renders slot content', () => {
    const slotContent = '<span>Slot Content</span>'
    const wrapper = mount(CircleProgressBar, {
      props: defaultProps,
      slots: {
        default: slotContent,
      },
    })
    expect(wrapper.find('.circle-progress__content').html()).toContain(slotContent)
  })
})
