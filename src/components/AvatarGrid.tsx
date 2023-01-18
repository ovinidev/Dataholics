import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AvatarGridProps {
	children: ReactNode;
}

export const AvatarGrid = ({ children }: AvatarGridProps) => {
	return (
		<SimpleGrid position="absolute" columns={3} gap="4">
			{children}
		</SimpleGrid>
	);
};
