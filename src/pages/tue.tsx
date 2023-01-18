import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
	const axiosInstance = axios.create({
		baseURL: 'api',
	});

	const [count, setCount] = useState(0);

	useEffect(() => {
		(async () => {
			const { data } = await axiosInstance.get('/counter');

			setCount(data);
		})();
	}, []);

	const handleCounter = async () => {
		const { data } = await axiosInstance.put('/counter');
		setCount(data);
	};

	return (
		<Flex direction="column" align="center" justify="center">
			<title>Tue</title>
			<video
				src="/tue.mp4"
				autoPlay
				muted
				style={{
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
				}}
			/>
			<Stack spacing="6" position="absolute">
				<Heading p="2" bg="blackAlpha.500">
					{count} pedidos
				</Heading>
				<Button onClick={handleCounter} colorScheme="whatsapp">
					Pedir
				</Button>
			</Stack>
		</Flex>
	);
}
