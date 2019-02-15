import React from 'react'
import { mount } from 'enzyme'
import Head from './Head'
import Helmet from 'react-helmet'

describe('<Head />', () => {
  it('should render correctly', () => {
    let component = mount(
      <Head />
    )

    expect(component).toMatchSnapshot()
    
    component.unmount()
  })

  it('should contain title tag with text "Testing environment"', () => {
    let component = mount(
      <Head />
    )

    expect(Helmet.peek().title).toEqual('Testing environment')
    
    component.unmount()
  })
})