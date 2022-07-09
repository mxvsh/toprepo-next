import React from 'react';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import millify from 'millify';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const RepoList = ({ repos = [] }) => {
	const dispatch = useDispatch();
	return (
		<Box p={4}>
			<Stack overflow={'auto'} spacing={4}>
				{repos.map((repo) => {
					let { name, description, stargazers_count, html_url } = repo;
					description = description?.replace(/<\:\w+\:/g, '');
					return (
						<Box key={name} cursor='pointer'>
							<Text>{name}</Text>
							<HStack>
								<HStack spacing={0}>
									<AiOutlineStar />
									<Text>{millify(stargazers_count)}</Text>
								</HStack>
							</HStack>
							<Text noOfLines={2} textColor={'gray.500'}>
								{description}
							</Text>
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
};

export default RepoList;
