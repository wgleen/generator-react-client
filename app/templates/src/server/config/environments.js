import { merge } from 'lodash'

const development = {
  port: 4000
}

const production = {
  port: process.env.PORT || 8080
}

const stage = merge({}, production, {
  
})

export default {
  development,
  production,
  stage
}