import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		common: {
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzUwODYyODIsImV4cCI6MTY3NzY3ODI4Miwic3ViIjoiN2I3Mzk5YWEtMjg4ZC00ZmViLWJhODEtMjQ4NDU1ZWMzYmUwIn0.Y52q4QanXypDh0z5DKly0DiTmeUF6WyZRo43KZwN7bw`,
		},
	},
});

export function setAuthToken(token: string) {
	if (axiosInstance.defaults.headers) {
		axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
	}
}

export interface TasksProps {
	id: string;
	name: string;
}

export async function getTasks() {
	const { data } = await axiosInstance.get<TasksProps[]>('tasks');

	return data;
}

export async function createTask(name: string) {
	const { data } = await axiosInstance.post('tasks', { name });

	return data;
}
