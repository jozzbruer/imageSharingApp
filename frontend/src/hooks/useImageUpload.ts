import { useMutation, useQueryClient } from 'react-query';

const apiURL = 'http://localhost:3001/api/files/upload';
const imageUpload = async (formData: FormData) => {
	const result = await fetch(apiURL, { method: 'POST', body: formData });
	if (!result.ok) {
		throw new Error('Failed to upload image');
	}
	const response = await result.json();
	return response;
};

export const useImageUpload = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation(imageUpload, {
		onSuccess: () => {
			queryClient.invalidateQueries('myImages');
		},
	});
	const uploadImage = async (file: File, name: string) => {
		const formData = new FormData();
		formData.append('imagePath', file);
		formData.append('name', name);

		await mutation.mutateAsync(formData);
	};

	return { uploadImage, isLoading: mutation.isLoading, isError: mutation.isError };
};
