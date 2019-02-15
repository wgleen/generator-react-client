import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../Wrapper/Wrapper'
import { MemoryRouter } from 'react-router-dom'
import Routes from '../Routes/Routes'
import Todos from '../Todos/Todos'

describe('<Routes />', () => {
  it('should render correctly', () => {
    let component = mount(
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
    let component = mount(
      <Wrapper>
        <MemoryRouter 
          initialEntries={[ '/' ]}
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