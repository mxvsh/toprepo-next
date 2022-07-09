import '@fontsource/ubuntu/400.css';
import '@fontsource/roboto/700.css';

import '../../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from 'lib/app/store';
import theme from 'theme';

function TopRepo({ Component, pageProps }) {
	return (
		<ReduxProvider store={store}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</ReduxProvider>
	);
}

export default TopRepo;
