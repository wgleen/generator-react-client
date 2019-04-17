import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Wrapper from '../Wrapper/Wrapper'
import TodosForm from './TodosForm'

describe('<TodosForm />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <TodosForm />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should contain an input :title name', () => {
    const component = mount(
      <Wrapper>
        <TodosForm />
      </Wrapper>
    )

    expect(
      component
        .find('TextFieldRedux')
        .filter({ name: 'title' })
    ).toHaveLength(1)

    component.unmount()
  })

  it('should contain a button submit', () => {
    const component = mount(
      <Wrapper>
        <TodosForm />
      </Wrapper>
    )

    expect(
      component
        .find('Button')
        .filter({ type: 'submit' })
    ).toHaveLength(1)

    component.unmount()
  })

  it('should call function onSubmit form', () => {
    const onSubmit = sinon.spy()

    const component = mount(
      <Wrapper>
        <TodosForm onSubmit={onSubmit} />
      </Wrapper>
    )

    const button = component.find('Button').first()

    button.simulate('submit')

    expect(onSubmit.callCount).toEqual(1)

    component.unmount()
  })
})
