import '@babel/polyfill'
import chai from 'chai'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.chaiExpect = chai.expect
