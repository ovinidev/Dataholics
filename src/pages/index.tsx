import { Button, Flex, Image, Stack } from '@chakra-ui/react';
import { useRef } from 'react';

import { Dataholic } from '../components/Dataholic';
import { useReactToPrint } from 'react-to-print';
import React from 'react';
import { ContentToPrint } from '../components/ContentToPrint';

const images = [
	{
		id: '43241',
		src: '/vinidev.png',
		name: 'Vinicius Medeiros',
		department: 'development',
	},
	{
		id: '2442323',
		src: '/vinidev.png',
		name: 'Mauro césar',
		department: 'development',
	},
	{
		id: '1423',
		src: '/vinidev.png',
		name: 'Vinicius Medeiros',
		department: 'development',
	},
	{
		id: '23423',
		src: '/vinidev.png',
		name: 'Mauro césar',
		department: 'development',
	},
	{
		id: '1432',
		src: '/vinidev.png',
		name: 'Vinicius Medeiros',
		department: 'development',
	},
];

export default function Page() {
	const componentRef = useRef(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<Flex h="100vh" align="center" justify="center" direction="column">
			<ContentToPrint ref={componentRef}>
				<Image src="/wp.png" alt="wp" h={750} />
				<Stack spacing="4" position="absolute" direction="column">
					<Flex gap="4" align="center" justify="center">
						{images.slice(0, 3).map((image) => {
							return (
								<Dataholic
									key={image.id}
									image={image.src}
									department={image.department}
									name={image.name}
								/>
							);
						})}
					</Flex>
					<Flex gap="4" align="center" justify="center">
						{images.slice(3, images.length).map((image) => {
							return (
								<Dataholic
									key={image.id}
									image={image.src}
									department={image.department}
									name={image.name}
								/>
							);
						})}
					</Flex>
				</Stack>
			</ContentToPrint>
			<Button colorScheme="blue" onClick={handlePrint} mt="2rem">
				Printar
			</Button>
		</Flex>
	);
}
