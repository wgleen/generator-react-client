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
        message: `Enter a name for the application${this.appName ? ` or keep ${this.appName}?` : '?'}`
      },
      {
        type: 'input',
        name: 'serverlessInfrastructure',
        message: 'The infrastructure of the aplication is serverless? (y|n)'
      },
      {
        when: answers => answers.serverlessInfrastructure == 'y',
        type: 'input',
        name: 'serverlessRegion',
        message: "What's the aws region?"
      },
      {
        type: 'input',
        name: 'herokuInfrastructure',
        message: 'The infrastructure of the stage is heroku? (y|n)'
      },
      {
        type: 'input',
        name: 'gitlab',
        message: 'Gitlab resources? (y|n)'
      },
      {
        when: answers => answers.gitlab == 'y',
        type: 'input',
        name: 'gitlabGroupOrUser',
        message: 'Gitlab group or user?'
      }
    ])
    .then(answers => {
      const rootPath = this.appName || answers.appName
      const _appName = answers.appName || this.appName
      const appTitle = helpers.toTitle(_appName)
      const serverlessInfrastructure = answers.serverlessInfrastructure == 'y'
      const serverlessRegion = answers.serverlessRegion
      const herokuInfrastructure = answers.herokuInfrastructure == 'y'
      const gitlab = answers.gitlab == 'y'
      const gitlabGroupOrUser = answers.gitlabGroupOrUser
      const gitlabRepo = `https://gitlab.com/${gitlabGroupOrUser}/${_appName}`

      let destinationPath = rootPath
      let templatePath = '/'

      //Root files
      
      this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath(`${destinationPath}/.babelrc`)
      )

      this.fs.copy(
        this.templatePath('.editorconfig'),
        this.destinationPath(`${destinationPath}/.editorconfig`)
      )

      this.fs.copy(
        this.templatePath('.eslintrc.js'),
        this.destinationPath(`${destinationPath}/.eslintrc.js`)
      )

      if (gitlab)
        this.fs.copyTpl(
          this.templatePath('.gitlab-ci.yml.ejs'),
          this.destinationPath(`${destinationPath}/.gitlab-ci.yml`),
          { appName: _appName }
        )

      this.fs.copyTpl(
        this.templatePath('jest.config.json.ejs'),
        this.destinationPath(`${destinationPath}/jest.config.json`),
        { appName: _appName }
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
          serverlessInfrastructure,
          serverlessRegion
        }
      )

      this.fs.copy(
        this.templatePath('postcss.config.js'),
        this.destinationPath(`${destinationPath}/postcss.config.js`)
      )

      this.fs.copyTpl(
        this.templatePath('README.md.ejs'),
        this.destinationPath(`${destinationPath}/README.md`),
        { 
          appName: appTitle,
          gitlab,
          gitlabRepo
        }
      )

      if (herokuInfrastructure)
        this.fs.copy(
          this.templatePath('Procfile'),
          this.destinationPath(`${destinationPath}/Procfile`)
        )

      this.fs.copy(
        this.templatePath('webpack.config.babel.js'),
        this.destinationPath(`${destinationPath}/webpack.config.babel.js`)
      )

      //Serverless Config

      if (serverlessInfrastructure) {
        this.fs.copy(
          this.templatePath('lambda.js'),
          this.destinationPath(`${destinationPath}/lambda.js`)
        )

        this.fs.copyTpl(
          this.templatePath('serverless.yml.ejs'),
          this.destinationPath(`${destinationPath}/serverless.yml`),
          { 
            appName: _appName,
            serverlessRegion
          }
        )
      }

      //Public files
      templatePath = 'public'
      destinationPath = `${rootPath}/public`

      this.fs.copy(
        this.templatePath(`${templatePath}/.gitkeep`),
        this.destinationPath(`${destinationPath}/.gitkeep`)
      )

      //Test files
      templatePath = 'test'
      destinationPath = `${rootPath}/test`

      this.fs.copy(
        this.templatePath(`${templatePath}/fileTransformer.js`),
        this.destinationPath(`${destinationPath}/fileTransformer.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/helpers.js`),
        this.destinationPath(`${destinationPath}/helpers.js`)
      )

      //Client files

      templatePath = 'src/client'
      destinationPath = `${rootPath}/src/client`

      this.fs.copy(
        this.templatePath(`${templatePath}/container.js`),
        this.destinationPath(`${destinationPath}/container.js`)
      )

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
      destinationPath = `${rootPath}/src/client/actions`

      this.fs.copy(
        this.templatePath(`${templatePath}/todosActions.js`),
        this.destinationPath(`${destinationPath}/todosActions.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/todosActions.spec.js`),
        this.destinationPath(`${destinationPath}/todosActions.spec.js`)
      )

      //Components files

      templatePath = 'src/client/components'
      destinationPath = `${rootPath}/src/client/components`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Client config files

      templatePath = 'src/client/config'
      destinationPath = `${rootPath}/src/client/config`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/environments.js.ejs`),
        this.destinationPath(`${destinationPath}/environments.js`),
        { apiURL: config.fakeAPIBaseURL }
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/index.js`),
        this.destinationPath(`${destinationPath}/index.js`)
      )

      //Constants files

      templatePath = 'src/client/constants'
      destinationPath = `${rootPath}/src/client/constants`

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
      destinationPath = `${rootPath}/src/client/lib`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Mocks files

      templatePath = 'src/client/mocks'
      destinationPath = `${rootPath}/src/client/mocks`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Reducers files

      templatePath = 'src/client/reducers'
      destinationPath = `${rootPath}/src/client/reducers`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Styles files

      templatePath = 'src/client/styles'
      destinationPath = `${rootPath}/src/client/styles`

      this.fs.copy(
        this.templatePath(`${templatePath}`),
        this.destinationPath(`${destinationPath}`)
      )

      //Config files

      templatePath = 'src/config'
      destinationPath = `${rootPath}/src/config`

      this.fs.copyTpl(
        this.templatePath(`${templatePath}/environments.js.ejs`),
        this.destinationPath(`${destinationPath}/environments.js`),
        {
          appName: _appName,
          serverlessInfrastructure
        }
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/index.js`),
        this.destinationPath(`${destinationPath}/index.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/webpackEnv.js`),
        this.destinationPath(`${destinationPath}/webpackEnv.js`)
      )

      //Server files

      templatePath = 'src/server'
      destinationPath = `${rootPath}/src/server`

      this.fs.copy(
        this.templatePath(`${templatePath}/app.js`),
        this.destinationPath(`${destinationPath}/app.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/server.js`),
        this.destinationPath(`${destinationPath}/server.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/cluster.js`),
        this.destinationPath(`${destinationPath}/cluster.js`)
      )

      //Server config files

      templatePath = 'src/server/config'
      destinationPath = `${rootPath}/src/server/config`

      this.fs.copy(
        this.templatePath(`${templatePath}/environments.js`),
        this.destinationPath(`${destinationPath}/environments.js`)
      )

      this.fs.copy(
        this.templatePath(`${templatePath}/index.js`),
        this.destinationPath(`${destinationPath}/index.js`)
      )

      //Server lib files

      templatePath = 'src/server/lib'
      destinationPath = `${rootPath}/src/server/lib`

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