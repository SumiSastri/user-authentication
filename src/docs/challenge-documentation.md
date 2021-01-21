## Scaffolding

The app has been scaffolded with the CRA (create-react-app) for speed and ability to transpile code into webpack-babel transpilers.

## Testing frameworks

- Jest and Enzyme

## SPA routing - React-Router

Dependencies: ```npm install -D react-router react-router-dom```for the history object ```npm install history```

 ## Branching strategy

 - Separate branches have been created for each task to chunk-debug code and push clean code into the repo.
 - Branches have been refactored in stages with tests and decisions on state management
 
 ## State-management strategy

 - State will be lifted out of React components into Redux  as the brief requests a type with the payload   ``` "type": "USER_PASSWORD_AUTH"``` the assumption is that state will need to be lifted into a Redux store
