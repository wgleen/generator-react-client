const Generator = require('yeoman-generator')
const helpers = require('../lib/helpers')
const config = require('./config')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)

    this.appName = process.argv[3]

    this.log('Initializing React-Client generator')
  }

  start () {
    this.prompt([
      {
        type: 'input',
        name: 'appName',
        message: `Enter a name for the application ${this.appName ? `or keep ${this.appName}` : ''}`
      },
      {
        type: 'input',
        name: 'serverMiddleware',
        message: `The backend server is a middleware (y|n)`
      },
      {
        type: 'input',
        name: 'serverlessInfrastructure',
        message: `The infrastructure of the aplication is serverless (y|n)`
      }
    ])
    .then(answers => {
      const _appName = answers.appName || this.appName
      const appTitle = helpers.toTitle(_appName)
      const _serverMiddleware = answers.serverMiddleware == 'y'
      const serverlessInfrastructure = answers.serverlessInfrastructure == 'y'

      let destinationPath = _appName
      let templatePath = '/'

      //Root files

      this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath(`${destinationPath}/.babelrc`)
      )

      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath(`${destinationPath}/.gitignore`)
      )

      this.fs.copy(
        this.templatePath('nodemon.json'),
        this.destinationPath(`${destinationPath}/nodemon.json`)
      )

      this.fs.copyTpl(
        this.templatePath('package.json.ejs'),
        this.destinationPath(`${destinationPath}/package.json`),
        { 
          appName: _appName,
          serverlessInfrastructure
        }
      )

      this.fs.copy(
        this.templatePath('postcss.config.js'),
        this.destinationPath(`${destinationPath}/postcss.config.js`)
      )

      this.fs.copyTpl(
        this.templatePath('README.md.ejs'),
        this.destinationPath(`${destinationPath}/README.md`),
        { appName: appTitle }
      )

      this.fs.copy(
        this.templatePath('webpack.config.babel.js'),
        this.destinationPath(`${destinationPath}/webpack.config.babel.js`)
      )

      //Public files
      templatePath = 'public'
      destinationPath = `${_appName}/public`

      this.fs.copy(
        this.templatePath(`${templatePath}/.gitkeep`),
        this.destinationPath(`${destinationPath}/.gitkeep`)
      )

      //Client files

      templatePath = 'src/client'
      destinationPath = `${_appName}/src/client`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/index.html.ejs`),
        this.destinationPath(`${destinationPath}/index.html`),
        { appName: appTitle }
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/index.js`),
        this.destinationPath(`${destinationPath}/index.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/initializer.js`),
        this.destinationPath(`${destinationPath}/initializer.js`)
      )

      //Actions files

      templatePath = 'src/client/actions'
      destinationPath = `${_appName}/src/client/actions`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/todosActions.ejs`),
        this.destinationPath(`${destinationPath}/todosActions.js`),
        { serverMiddleware: _serverMiddleware }
      )

      //Components files

      templatePath = 'src/client/components'
      destinationPath = `${_appName}/src/client/components`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Client config files

      templatePath = 'src/client/config'
      destinationPath = `${_appName}/src/client/config`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/environments.js.ejs`),
        this.destinationPath(`${destinationPath}/environments.js`),
        {
          apiURL: _serverMiddleware ?
            config.baseURL :
            config.fakeAPIBaseURL
        }
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/index.js`),
        this.destinationPath(`${destinationPath}/index.js`)
      )

      //Constants files

      templatePath = 'src/client/constants'
      destinationPath = `${_appName}/src/client/constants`

      this.fs.copy(
        this.templatePath(`${templatePath}/actionTypes.js`),
        this.destinationPath(`${destinationPath}/actionTypes.js`)
      )

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/routes.js.ejs`),
        this.destinationPath(`${destinationPath}/routes.js`),
        { appName: appTitle }
      )

      //Lib files

      templatePath = 'src/client/lib'
      destinationPath = `${_appName}/src/client/lib`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Mocks files

      templatePath = 'src/client/mocks'
      destinationPath = `${_appName}/src/client/mocks`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Reducers files

      templatePath = 'src/client/reducers'
      destinationPath = `${_appName}/src/client/reducers`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Styles files

      templatePath = 'src/client/styles'
      destinationPath = `${_appName}/src/client/styles`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Config files

      templatePath = 'src/config'
      destinationPath = `${_appName}/src/config`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Server files

      templatePath = 'src/server'
      destinationPath = `${_appName}/src/server`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/index.js.ejs`),
        this.destinationPath(`${destinationPath}/index.js`),
        { serverMiddleware: _serverMiddleware }
      )

      //API files

      if (_serverMiddleware) {
        templatePath = 'src/server/api'
        destinationPath = `${_appName}/src/server/api`

        this.fs.copyTpl(
          this.templatePath(`${templatePath}/controllers.js.ejs`),
          this.destinationPath(`${destinationPath}/controllers.js`),
          { appName: appTitle }
        )

        this.fs.copy(
          this.templatePath(`${templatePath}/middlewares.js`),
          this.destinationPath(`${destinationPath}/middlewares.js`)
        )

        this.fs.copy(
          this.templatePath(`${templatePath}/routes.js`),
          this.destinationPath(`${destinationPath}/routes.js`)
        )

        //Todos resource files

        this.fs.copy(
          this.templatePath(`${templatePath}/todos`),
          this.destinationPath(`${destinationPath}/todos`)
        )
      }

      //Server config files

      templatePath = 'src/server/config'
      destinationPath = `${_appName}/src/server/config`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/environments.js.ejs`),
        this.destinationPath(`${destinationPath}/environments.js`),
        { apiURL: config.fakeAPIBaseURL }
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/index.js`),
        this.destinationPath(`${destinationPath}/index.js`)
      )

      //Server lib files

      templatePath = 'src/server/lib'
      destinationPath = `${_appName}/src/server/lib`

      this.fs.copy(
        this.templatePath(`${templatePath}/api.js`),
        this.destinationPath(`${destinationPath}/api.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/logger.js`),
        this.destinationPath(`${destinationPath}/logger.js`)
      )
    })
  }
}