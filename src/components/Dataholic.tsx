import { Avatar, Flex, Text } from '@chakra-ui/react';

interface DataholicProps {
	image: string;
	name: string;
	department: string;
}

export const Dataholic = ({ image, department, name }: DataholicProps) => {
	return (
		<Flex direction="column" align="center">
			<Avatar src={image} h={200} w={200} />
			<Text fontSize="1.2rem">{name}</Text>
			<Text fontSize="1.2rem">{department}</Text>
		</Flex>
	);
};
