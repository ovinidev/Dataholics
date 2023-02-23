import { Button, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createTask, getTasks, TasksProps } from '../api/tasks';
import { queryClient } from './_app';

export default function Page() {
	const [taskInput, setTaskInput] = useState('');
	// const [tasks, setTasks] = useState<TasksProps[]>([]);

	// useEffect(() => {
	// 	(async () => {
	// 		const tasks = await getTasks();
	// 		setTasks(tasks);
	// 	})();
	// }, []);

	const { data: tasks } = useQuery(
		['tasks'],
		async () => {
			const tasks = await getTasks();

			return tasks;
		},
		{
			staleTime: 1000 * 60 * 60,
			onError: () => {
				alert('deu bom');
			},
		},
	);

	async function handleCreateTask() {
		await mutateAsync();
	}

	const { error, isLoading, isSuccess, mutateAsync } = useMutation(
		async () => {
			await createTask(taskInput);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['tasks']);
			},
		},
	);

	return (
		<Flex direction="column" align="center" justify="center" h="100vh">
			<Link href="/">Test</Link>
			<Stack w={400}>
				<Input onChange={(e) => setTaskInput(e.target.value)} />
				<Button
					isLoading={isLoading}
					onClick={handleCreateTask}
					colorScheme="pink"
				>
					Criar
				</Button>
				{tasks?.map((task) => {
					return <Heading key={task.id}>{task.name}</Heading>;
				})}
			</Stack>
		</Flex>
	);
}
