**Branch 2: policy-page** Estimated time 3 hours Fibonnaci complexity 1
- Sets up component based on passing tests (elements render without crashing and with expected inputs)
- Sets up data-free component and vanilla css based on the wireframe
![branch-2](https://github.com/SumiSastri/user-authentication/blob/main/src/assets/branch-2-policy-page.png)

__Refactor 1__  Estimated time 4 days Fibonnaci complexity 13
- Sets up actions and action types for the section
- Sets up reducers and root reducers
- Reconfigures page with state-tree based on

**Example Curl command**
```shell
curl --request GET --url https://api.bybits.co.uk/policys/details --header "environment: mock" --header "authorization beaer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs"
```
- Sets up history object and tests the path from login submit to policy page works
- Connects pages to the store
- Redux-connection working
[branch-2 Redux connection working]()

- Tests render from authorisation headers

- Unable to unscramble auth code access via react-redux curl result stored in (src/client-side-data/mocks/policy.json)