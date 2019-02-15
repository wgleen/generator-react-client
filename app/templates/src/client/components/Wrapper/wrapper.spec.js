import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../Wrapper/Wrapper'
import { store } from '../../lib/store'

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    let component = mount(
      <Wrapper><div /></Wrapper>
    )

    expect(component).toMatchSnapshot()
    
    component.unmount()
  })

  it('should contain Provider component with store prop', () => {
    let component = mount(
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