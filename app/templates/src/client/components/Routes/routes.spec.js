import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import Routes from './Routes'
import Todos from '../Todos/Todos'

describe('<Routes />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render Todos component when location is "/"', () => {
    const component = mount(
      <Wrapper>
        <MemoryRouter
          initialEntries={['/']}
          initialIndex={1}
        >
          <Routes />
        </MemoryRouter>
      </Wrapper>
    )

    expect(component.find(Todos)).toHaveLength(1)

    component.unmount()
  })
})
