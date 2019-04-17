import React from 'react'
import { mount } from 'enzyme'
import Helmet from 'react-helmet'
import Head from './Head'

describe('<Head />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Head />
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should contain title tag with text "Testing environment"', () => {
    const component = mount(
      <Head />
    )

    expect(Helmet.peek().title).toEqual('Testing environment')

    component.unmount()
  })
})
