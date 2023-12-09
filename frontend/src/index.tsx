import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from './theme/theme';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './hooks/useFetch';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>
);
