import { createBrowserHistory } from 'history';

import { authTokenConfig } from '../../../users/auth-user-actions/AuthUserActions';

export default createBrowserHistory({
	authTokenConfig
	/* pass a configuration object here if needed */
});
