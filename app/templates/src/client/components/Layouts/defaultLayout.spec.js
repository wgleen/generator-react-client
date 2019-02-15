import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../Wrapper/Wrapper'
import DefaultLayout from './DefaultLayout'

describe('<DefaultLayout />', () => {
  it('should render correctly', () => {
    let component = mount(
      <Wrapper>
        <DefaultLayout />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()
    
    component.unmount()
  })
})