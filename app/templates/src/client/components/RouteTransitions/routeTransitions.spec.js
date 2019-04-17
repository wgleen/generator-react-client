import React from 'react'
import { mount } from 'enzyme'
import { ConnectedRouter } from 'connected-react-router'
import history from '../../lib/history'
import Wrapper from '../Wrapper/Wrapper'
import RouteTransitions from './RouteTransitions'

describe('<RouteTransitions />', () => {
  it('should render correctly', () => {
    const component = mount(
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
