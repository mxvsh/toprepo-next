import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { useGetRepoMutation, useGetTrendingQuery } from 'lib/app/services/repo';
import RepoList from 'lib/components/repo-list';
import RepoInfo from 'lib/components/repo-info';

const Index = () => {
	const { selected_lang, selected_repo } = useSelector((state) => state.repo);
	const { data, isLoading } = useGetTrendingQuery(selected_lang);

	if (isLoading) {
		return <Box p={4}>Loading...</Box>;
	}

	return (
		<Flex gap={4}>
			<Box w='80' h='100vh' overflow={'auto'} p={4}>
				<RepoList repos={data.items} />
			</Box>
			<Box w='full' h='100vh' overflow={'auto'} p={4}>
				<RepoInfo repo={selected_repo} />
			</Box>
		</Flex>
	);
};

export default Index;
