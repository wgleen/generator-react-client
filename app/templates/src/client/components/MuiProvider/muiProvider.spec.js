import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../Wrapper/Wrapper'
import MuiProvider from './MuiProvider'

describe('<MuiProvider />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <MuiProvider><div /></MuiProvider>
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
