import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const repoApi = createApi({
	reducerPath: 'repoApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
	endpoints: (builder) => ({
		getTrending: builder.query({
			query: (lang) =>
				`/search/repositories?sort=stars&order=desc&q=language:${lang}`,
		}),
		getRepo: builder.mutation({
			query: ({ owner, name }) => `/repos/${owner}/${name}`,
		}),
		getRepoReadme: builder.query({
			query: ({ owner, name, default_branch }) => ({
				url: `https://raw.githubusercontent.com/${owner}/${name}/${default_branch}/README.md`,
				responseHandler: (response) => response.text(),
			}),
		}),
	}),
});

export const {
	useGetTrendingQuery,
	useGetRepoReadmeQuery,
	useGetRepoMutation,
} = repoApi;
