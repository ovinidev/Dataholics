import { Avatar, Flex, Heading, Image } from '@chakra-ui/react';

export default function Page() {
	return (
		<Flex align="center" justify="center" h="100vh">
			<Flex position="relative" align="flex-start" justify="flex-start">
				<Image src="/niver.png" alt="wp" h={900} />
				<Avatar
					mt="7.8rem"
					ml="5.5rem"
					src="vinidev.png"
					h={300}
					w={300}
					position="absolute"
				/>
				<Heading
					fontSize="3rem"
					marginTop="28rem"
					marginLeft="20rem"
					position="absolute"
					left="6rem"
					bg="pink"
				>
					Vinicius Medeiros
				</Heading>
			</Flex>
		</Flex>
	);
}
