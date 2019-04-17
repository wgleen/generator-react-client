import React from 'react'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import { reduxForm } from 'redux-form'
import Wrapper from '../Wrapper/Wrapper'
import TextFieldRedux from './TextFieldRedux'

describe('<TextFieldRedux />', () => {
  it('should render correctly', () => {
    const onSubmit = spy()
    const FakeForm = reduxForm({
      form: 'TodoForm'
    })(() => (
      <form onSubmit={onSubmit}>
        <TextFieldRedux name='test' />
      </form>
    ))

    const component = mount(
      <Wrapper>
        <FakeForm />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
