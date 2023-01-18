import { Flex, Image } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { AvatarGrid } from '../components/AvatarGrid';
import { Dataholic } from '../components/Dataholic';
import React from 'react';

interface ComponentToPrintProps {
	images: {
		id: string;
		src: string;
		name: string;
		department: string;
	}[];
}

export const ComponentToPrint: ForwardRefRenderFunction<
	HTMLDivElement,
	ComponentToPrintProps
> = ({ images }, ref: any) => {
	return (
		<Flex position="relative" align="center" justify="center" ref={ref}>
			<Image src="/wp.png" alt="wp" h={650} />
			<AvatarGrid>
				{images.map((image) => {
					return (
						<Dataholic
							key={image.id}
							image={image.src}
							department={image.department}
							name={image.name}
						/>
					);
				})}
			</AvatarGrid>
		</Flex>
	);
};

export const ContentToPrint = forwardRef(ComponentToPrint);
