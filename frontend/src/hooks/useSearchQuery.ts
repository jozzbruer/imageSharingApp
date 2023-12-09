import { useQuery } from 'react-query';

const apiURL = 'http://localhost:3001/api/files/search';

const fetchSearchQuery = async (searchVal: string) => {
	if (searchVal.length === 0) {
		return;
	}
	const result = await fetch(`${apiURL}?q=${searchVal}`);
	if (!result.ok) {
		throw new Error('Failed to fetch data by searching');
	}
	const response = await result.json();
	return response;
};

export const useSearchQuery = (searchVal: string) => {
	const { data, isLoading, isError } = useQuery(
		['searchData', searchVal],
		() => fetchSearchQuery(searchVal),
		{
			staleTime: 60000,
			cacheTime: 300000,
		}
	);
	return { data, isLoading, isError };
};
