"use client";

import { Box, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box
            as="section"
            h="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="black"
            color="white"
            textAlign="center"
        >
            <Text fontSize={{ base: "7xl", md: "9xl" }} fontWeight="bold">
                From Imagination to Reality
            </Text>

            <Text
                fontSize={{ base: "lg", md: "2xl" }}
                mt={4}
                fontWeight="bold"
            >
                Kosuke Kumamoto / The University of British Columbia
            </Text>
        </Box>
    );
}