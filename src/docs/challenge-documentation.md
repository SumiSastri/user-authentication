## Scaffolding

The app has been scaffolded with the CRA (create-react-app) for speed and ability to transpile code into webpack-babel transpilers.

## Testing frameworks

- Jest and Enzyme

__API-call-stubbing__

- No API tests as not in skill-set to test authenticated post requests

 ## Branching strategy

 - Separate branches have been created for each task to chunk-debug code and push clean code into the repo.
 - Branches have been refactored in stages with tests and decisions on state management
 
 ## State-management strategy

 - React stateful component not hooks as the brief asks for a string-constant  ``` "type": "USER_PASSWORD_AUTH"``` the assumption is that state will need to be lifted into a Redux store
 - The progression of state will be tested in vanilla React and then moved to Redux due to skill-limitations in testing with Redux