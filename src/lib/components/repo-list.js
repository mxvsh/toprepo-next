import React from 'react';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import millify from 'millify';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRepo } from 'lib/app/features/repo';

const RepoList = ({ repos = [] }) => {
	const dispatch = useDispatch();
	const { selected_repo } = useSelector((state) => state.repo);

	return (
		<Box>
			<Stack overflow={'auto'} spacing={4}>
				{repos.map((repo) => {
					let { name, description, stargazers_count, forks_count } = repo;
					const isSelected = selected_repo === name;

					return (
						<Box
							p={2}
							key={name}
							cursor='pointer'
							userSelect='none'
							onClick={() => {
								dispatch(setSelectedRepo(name));
							}}
							rounded='lg'
							borderWidth='2px'
							borderColor={isSelected ? 'purple.400' : ''}
						>
							<Text>{name}</Text>
							<HStack color='gray.400' spacing={1} fontSize='xs'>
								<HStack spacing={0}>
									<AiOutlineStar />
									<Text>{millify(stargazers_count)}</Text>
								</HStack>
								<Text>•</Text>
								<HStack spacing={0}>
									<AiOutlineFork />
									<Text>{millify(forks_count)}</Text>
								</HStack>
							</HStack>
							<Text noOfLines={2} textColor={'gray.500'} fontSize='sm'>
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
