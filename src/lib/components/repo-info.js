import React from 'react';
import { useGetRepoMutation } from 'lib/app/services/repo';

const RepoInfo = () => {
	const [getRepo, response] = useGetRepoMutation();
	return <div></div>;
};

export default RepoInfo;
