import React from 'react'
import { mount } from 'enzyme'
import { random } from 'lodash'
import Wrapper from '../Wrapper/Wrapper'
import TodosList from './TodosList'

describe('<TodosList />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <TodosList />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should contain a h2 tag with "Todo list" text', () => {
    const component = mount(
      <Wrapper>
        <TodosList />
      </Wrapper>
    )

    expect(
      component
        .find('h2')
        .text()
    ).toEqual('Todo list')

    component.unmount()
  })

  it('should contain a Table with TableCells with "ID" and "Title" texts', () => {
    const component = mount(
      <Wrapper>
        <TodosList />
      </Wrapper>
    )

    const table = component.find('TableHead').find('TableCell')

    expect(table.at(0).text()).toEqual('ID')
    expect(table.at(1).text()).toEqual('Title')

    component.unmount()
  })

  it('should have a list of todos into TableRows', () => {
    const component = mount(
      <Wrapper>
        <TodosList />
      </Wrapper>
    )

    const _component = component.find('TodosList')
    const list = _component.props().todos
    const index = random(0, list.length - 1)
    const item = list[index]
    const row = component
      .find('TableBody')
      .find('TableRow').at(index)
    const cell = row.find('TableCell')

    expect(cell.at(0).text()).toEqual(String(item.id))
    expect(cell.at(1).text()).toEqual(item.title)

    component.unmount()
  })
})
