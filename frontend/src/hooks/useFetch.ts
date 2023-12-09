import { useQuery, QueryClient } from 'react-query';

const apiURL = 'http://localhost:3001/api/files';

const queryClient = new QueryClient();

const useFetchData = () => {
	const { data, isLoading, isError } = useQuery(
		'myImages',
		async () => {
			const result = await fetch(apiURL);
			if (!result.ok) {
				throw new Error('Data fetching failed');
			}
			const response = await result.json();

			return response.data;
		},
		{
			staleTime: 60000,
			cacheTime: 300000,
		}
	);

	return { data, isLoading, isError };
};

export { useFetchData, queryClient };
