## TODO
- Data Handler (fetch from API)
- Root path (Start from /src directory)
- Tests
- Logging
- Linting
- Documentation (from comments)
- ..

## Folder Structure
```
- data
- public
- src
  - actions
  - components
  - config
    - index.js
  - containers
  - reducers
  - styles
    - *.scss
  - utils
  - index.jsx
  - index.html
- package.json
- webpack.config.js
```

## Environments
1. Production [prod]
> live code

2. Staging [uat]
> UAT code - low priority

3. Local [local]
> development code

4. Test [test]
> test code (includes unit and integration)

## Running the application

### Requirements
- Node && NPM v9.3.0
- webpack && webpack-dev-server `npm i -g webpack && npm i -g webpack-dev-server`

### Kickstart
1. `npm i`
2. `npm start`

### Testing
TBC

### Wins
- Documentations
- Webpack configuration to support ES6 syntax
- Foundation
  - Redux application
  - Routing
