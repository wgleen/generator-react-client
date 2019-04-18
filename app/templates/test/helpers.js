import '@babel/polyfill'
import chai from 'chai'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-localstorage-mock'

configure({ adapter: new Adapter() })

const jsdom = require('jsdom')

const { JSDOM } = jsdom
const dom = new JSDOM()

global.window.location = dom.window.document
global.chaiExpect = chai.expect
global.window.scrollTo = jest.fn()
global.window.location.assign = jest.fn()

const originalConsoleError = console.error

console.error = (message) => {
  if (/(Failed prop type)/.test(message)) throw new Error(message)

  originalConsoleError(message)
}
