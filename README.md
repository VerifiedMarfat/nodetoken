## TODO
- caching
- database (mongoDB using mongoose)
- linting
- documentation (from comments)
- ..

## Folder Structure
```
- src
  - app
    - routers
    - controllers
    - models
  - database
  - config
    - index.js
  - utils
    - logger.js

- test
  - *.spec.js
- package.json
- server.js
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

### Kickstart
1. `npm i`
2. `npm start`

### Testing
1. `npm i -g mocha`
2. `npm test`
3. Visit [Mocha's website](https://mochajs.org/#getting-started) for more information

### Wins
- Tests
- Documentations
- Root path (Start from /src directory)
- Foundation
  - Routing
  - Controllers
  - Models
  - Middlewares
- Logging
- Serializer
