**Branch 4: redux-setup** Estimated time 3 days Fibonnaci complexity 9

1. Set up store
2. Move state out of login form component into reducer
3. Set up action types (constants) and actions for loading (unauthenticated user) 
4. Set up action creators for loading
5. Check and clean-up redux flow - ensure store with initial state correctly set up
6. Spin up FE and check 
![branch-4 Redux initial setup]()
7. Add error handlers in actions, reducer and connect check that errors object registered in store
![branch-4 Errors handlers]()
8. Connects component to state
9. Creates auth action types, action creators and dispatch method with post method and get methods as described by the challenge requirements 
10. Imports these action creators and error creators into the component
11. Maps these utility functions as props to state in the reducers
12. Adds the reducer update state switch case statements
13. Checks functionality and successfully gets the same response as curl get request with user Lizeth.White payload
![branch-4 Success path]()