"use client";

import {
    Button,
    CloseButton,
    Dialog,
    Portal,
    Image,
    Text,
    VStack,
    HStack,
    Link,
} from "@chakra-ui/react";

export default function ProjectDialog({ project }) {
    if (!project) return null;

    return (
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content bg="white" color="black" p={5} borderRadius="md">
                    <Dialog.Header>
                        <Dialog.Title fontSize="2xl" fontWeight="bold">
                            {project.title}
                        </Dialog.Title>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Header>
                    <Dialog.Body>
                        <VStack m={4} align="start">
                            <Image
                                src={project.image}
                                alt={project.title}
                                borderRadius="md"
                            />
                            <Text>{project.description}</Text>
                            <HStack m={4}>
                                {project.demo && (
                                    <Button
                                        as={Link}
                                        href={project.demo}
                                        colorScheme="blue"
                                    >
                                        Demo
                                    </Button>
                                )}
                                {project.github && (
                                    <Button
                                        as={Link}
                                        href={project.github}
                                        colorScheme="gray"
                                    >
                                        GitHub
                                    </Button>
                                )}
                            </HStack>
                            <Text fontWeight="bold" mt={4}>
                                使用技術:
                            </Text>
                            <Text>{project.techStack}</Text>
                        </VStack>
                    </Dialog.Body>
                </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
    );
}