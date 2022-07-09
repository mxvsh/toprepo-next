import { configureStore } from '@reduxjs/toolkit';

// slices
import repoReducer from './features/repo';

// services
import { repoApi } from './services/repo';

export const store = configureStore({
	reducer: {
		repo: repoReducer,
		[repoApi.reducerPath]: repoApi.reducer,
	},
	middleware: (defMid) => defMid().concat(...[repoApi.middleware]),
});
