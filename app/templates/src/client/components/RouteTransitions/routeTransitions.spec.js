import React from 'react'
import { mount } from 'enzyme'
import history from '../../lib/history'
import Wrapper from '../Wrapper/Wrapper'
import { ConnectedRouter } from 'connected-react-router'
import RouteTransitions from '../RouteTransitions/RouteTransitions'

describe('<RouteTransitions />', () => {
  it('should render correctly', () => {
    let component = mount(
      <Wrapper>
        <ConnectedRouter history={history}>
          <RouteTransitions />
        </ConnectedRouter>
      </Wrapper>
    )

    expect(component).toMatchSnapshot()
    
    component.unmount()
  })
})