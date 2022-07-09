import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useGetTrendingQuery } from 'lib/app/services/repo';
import RepoList from 'lib/components/repo-list';
import { useSelector } from 'react-redux';

const Index = () => {
	const selected_lang = useSelector((state) => state.repo.selected_lang);
	const { data, isLoading } = useGetTrendingQuery(selected_lang);

	if (isLoading) {
		return <Box p={4}>Loading...</Box>;
	}

	return (
		<Flex>
			<Box w='72' h='100vh' overflow={'auto'} p={4}>
				<RepoList repos={data.items} />
			</Box>
			<Box></Box>
		</Flex>
	);
};

export default Index;
