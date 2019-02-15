## React Client Generator (generator-react-client)
> React client with Node/Express backend middleware

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-client using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-client
```

Then generate your new project:

```bash
yo react-client myproject
```

### Project Documentation
---
#### Requirements
- Node
- npm

#### Stack
- Node
- Serverless (AWS Lambda + API Gateway + S3)
- Webpack
- ES6 (Babel)
- React
- React Router
- Redux / Redux Form
- PostCSS / SASS
- Material UI
- Jest / Enzyme / Chai

#### Initialization
```bash
npm i && npm run dev
```

#### Build to production|stage
```bash
NODE_ENV=production ENV=production|stage npm run build
```

#### Testing
## Using jest with enzyme and chai (see examples on /components)
```bash
npm test
```

#### Deploy to AWS production|stage (with Serverless)
```bash
NODE_ENV=production ENV=production|stage npm run serverless:deploy
```