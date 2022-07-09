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
			query: (name) => `/repos/${name}`,
		}),
	}),
});

export const { useGetTrendingQuery, useGetRepoMutation } = repoApi;
