import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../Wrapper/Wrapper'
import App from './App'

describe('<App />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <App />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
