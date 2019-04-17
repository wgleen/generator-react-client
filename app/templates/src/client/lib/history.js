import { createBrowserHistory } from 'history'

const _history = createBrowserHistory()

_history.listen(() => {
  window.scrollTo(0, 0)
})

export default _history
