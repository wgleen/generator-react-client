import React from 'react'
import { mount } from 'enzyme'
import Wrapper from './Wrapper'
import store from '../../lib/store'

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper><div /></Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should contain Provider component with store prop', () => {
    const component = mount(
      <Wrapper><div /></Wrapper>
    )

    expect(
      component
        .find('Provider')
        .props()
        .store
    ).toEqual(store)

    component.unmount()
  })
})
