import React from 'react'
import { mount } from 'enzyme'
import { name } from 'faker'
import Wrapper from '../Wrapper/Wrapper'
import Todos from './Todos'

describe('<Todos />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <Todos />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it("should create a new todo and add to todos's list", () => {
    const component = mount(
      <Wrapper>
        <Todos />
      </Wrapper>
    )

    const text = name.title()

    component
      .find('input')
      .first()
      .simulate('change', {
        target: {
          value: text
        }
      })

    component
      .find('Button')
      .first()
      .simulate('submit')

    const list = component.find('TodosList')

    const newTodo = list
      .find('TableBody')
      .find('TableRow')
      .last()

    expect(newTodo.find('TableCell').at(1).text()).toEqual(text)

    component.unmount()
  })
})
