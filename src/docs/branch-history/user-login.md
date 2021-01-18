**Branch 1: user-login** Estimated time 8-hours (one-day) Fibonnaci complexity 3
  - Sets up folder structure for separation of concerns and modularisation of the page-ui
  - Sets up initial tests to ensure all components render correctly ```npm run test```
  - Sets up components based on passing tests ```App.js```, ```Button.js``` and ```AuthLoginForm```
  - Sets up a basic logic-free components and vanilla css based on the wireframe
  - Checks set up ```npm run start``` working in FE server 

![branch-1](https://github.com/SumiSastri/user-authentication/blob/main/src/assets/branch1-user-login.png)

__Refactor 1__ Estimated time 4-hours Fibonnaci complexity 5

- Tests on change event handlers
- Tests on submit event handler
- Removes common button component (replaces with JSX button - abstraction of button overkill for this test)
- Refactors tests for button component
- Spins up FE server and tests working
![branch-1/ refactor-1](https://github.com/SumiSastri/user-authentication/blob/main/src/assets/branch1-refactor1.png)

__Refactor 2__ Estimated time 4-hours Fibonnaci complexity 7

- Adds payload of submit button to a post-Api
- Tests worked on the mock api when actual api-called made to endpoint in challenge authentication failed with bad-request error
- Tests were removed as not in skill-set to write tests for authenticated routes
- Tested payload with console logs
![branch-1/ refactor-1](https://github.com/SumiSastri/user-authentication/blob/main/src/assets/post-payload-onsubmit.png)
