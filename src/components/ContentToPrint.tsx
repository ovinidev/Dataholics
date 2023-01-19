import { Flex } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

interface ComponentToPrintProps {
	children: ReactNode;
}

export const ComponentToPrint: ForwardRefRenderFunction<
	HTMLDivElement,
	ComponentToPrintProps
> = ({ children }, ref: any) => {
	return (
		<Flex position="relative" align="center" justify="center" ref={ref}>
			{children}
		</Flex>
	);
};

export const ContentToPrint = forwardRef(ComponentToPrint);
