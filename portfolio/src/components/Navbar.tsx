"use client";

import { Box, Flex, Link, Spacer, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box as="header" w="100%" p={4} bg="white" boxShadow="sm">
            <Flex maxW="1200px" mx="auto" align="center">
                <Link href="/" fontWeight="bold" fontSize="xl">
                    Kosuke Kumamoto
                </Link>

                <Spacer />

                <Flex display={{ base: "none", md: "flex" }} gap={6}>
                    <Link href="#projects">Projects</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#about">About Me</Link>
                </Flex>

                {isOpen ? (
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open menu"
                        variant="ghost"
                    >
                        <IoMdCloseCircle />
                    </IconButton>)
                    :
                    (<IconButton
                        display={{ base: "flex", md: "none" }}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open menu"
                        variant="ghost"
                    >
                        <IoMenu />
                    </IconButton>)
                }


                {isOpen && (
                    <Box
                        position="absolute"
                        top="60px"
                        left="0"
                        w="100%"
                        bg="white"
                        boxShadow="md"
                        p={4}
                        display={{ base: "block", md: "none" }}
                    >
                        <Flex direction="column" gap={4}>
                            <Link href="#projects">Projects</Link>
                            <Link href="#skills">Skills</Link>
                            <Link href="#about">About Me</Link>
                        </Flex>
                    </Box>
                )}
            </Flex>
        </Box>
    );
}
