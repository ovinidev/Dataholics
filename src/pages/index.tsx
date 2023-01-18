import { Button, Flex, Image } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useRef } from 'react';
import { AvatarGrid } from '../components/AvatarGrid';
import { Dataholic } from '../components/Dataholic';
import { useReactToPrint } from 'react-to-print';
import React from 'react';
import { ContentToPrint } from '../components/ContentToPrint';

const images = [
	{
		id: '1',
		src: '/vinidev.png',
		name: 'Vinicius Medeiros',
		department: 'development',
	},
	{
		id: '2',
		src: '/vinidev.png',
		name: 'Vinicius Medeiros',
		department: 'development',
	},
	{
		id: '3',
		src: '/vinidev.png',
		name: 'Vinicius Medeiros',
		department: 'development',
	},
	{
		id: '4',
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
			<ContentToPrint images={images} ref={componentRef} />
			<Button colorScheme="blue" onClick={handlePrint} mt="2rem">
				Printar
			</Button>
		</Flex>
	);
}
