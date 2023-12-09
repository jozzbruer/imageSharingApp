import { useMutation, useQueryClient } from 'react-query';

const deletItem = async (id: string) => {
	const apiURL = `http://localhost:3001/api/files/${id}`;

	const result = await fetch(apiURL, { method: 'DELETE' });
	if (!result.ok) {
		throw new Error('Failed to delete image');
	}
	const response = await result.json();
	return response;
};

export const useDeleteItem = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation(deletItem, {
		onSuccess: () => {
			queryClient.invalidateQueries('myImages');
		},
	});
	return mutation;
};
