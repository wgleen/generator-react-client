import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../Wrapper/Wrapper'
import TodosCreate from './TodosCreate'

describe('<TodosCreate />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <TodosCreate />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should contain a h2 tag with "Add Todo" text', () => {
    const component = mount(
      <Wrapper>
        <TodosCreate />
      </Wrapper>
    )

    expect(
      component
        .find('h2')
        .text()
    ).toEqual('Add Todo')

    component.unmount()
  })

  it('should contain a TodosForm component with onSubmit function', () => {
    const component = mount(
      <Wrapper>
        <TodosCreate />
      </Wrapper>
    )

    chaiExpect(
      component
        .find('TodosForm')
        .props()
        .onSubmit
    ).to.be.a('function')

    component.unmount()
  })
})
