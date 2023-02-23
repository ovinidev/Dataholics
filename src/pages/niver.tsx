import { Avatar, Flex, Heading, Image } from '@chakra-ui/react';

export default function Page() {
	return (
		<Flex align="center" justify="center" h="100vh">
			<Flex position="relative" align="flex-start" justify="center">
				<Image src="/niver.png" alt="wp" h={900} />
				<Avatar
					mt="7.6rem"
					mr="41rem"
					src="new.png"
					h={300}
					w={300}
					position="absolute"
				/>
				<Heading fontSize="3rem" mt="27.5rem" position="absolute" bg="pink">
					Juarez Amaral da Costa
				</Heading>
			</Flex>
		</Flex>
	);
}
