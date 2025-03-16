"use client";

import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Image,
    VStack,
    Dialog,
    Portal,
    CloseButton,
    HStack,
    Button,
    Link,
} from "@chakra-ui/react";

const projects = [
    {
        title: "TokyoQuest",
        image: "/image/TokyoQuest/TokyoQuest.jpg",
        description: "TokyoQuestは訪日外国人向けのツアー型冒険ゲームです。各Questを通して日本の文化や歴史を学ぶことができます。",
        github: "https://github.com/K-suk/TokyoQuest",
        techStack: "Next.js, Django, Render, Vercel",
    },
    {
        title: "UBC Buddies",
        image: "/image/UbcBuddies/ubcBuddies.png",
        description: "UBC Buddiesは私の通っているUBCの生徒向けのマッチングサイトです。同性のみとマッチングすることを条件に100%マッチングを実現しています。",
        github: "https://github.com/K-suk/Next-Buddies",
        techStack: "Next.js, Django, Render, Vercel, Supabase",
    },
    {
        title: "Asian Coffee",
        image: "/image/AsianCoffee/Asian1.jpg",
        description: "私が高校生の頃にコロナ下で学校の売店が閉じてしまったことをきっかけに、ミニ売店のような形でコーヒーを作って販売してました。私のコーヒーをオンラインで購入できるようにしたサイトです。",
        github: "https://github.com/asian-coffee",
        techStack: "Python, Django",
    },
    {
        title: "Sebastian",
        image: "/image/Sebastian/sebastian.png",
        description: "信頼度のようなシステムを用意、効率的合理的な自動シフト割り当てシステムを実現したシフト管理システムです。",
        github: "https://github.com/K-suk/Sebastian",
        techStack: "Python, Django",
    },
];

export default function Projects() {
    return (
        <Box as="section" bg="black" color="white" py={20} px={6} id="projects">
            <Heading fontSize="4xl" textAlign="center" mb={10}>
                Projects
            </Heading>
            <Text textAlign="center" color="gray.400" mb={12}>
                これまでに開発したプロジェクトの一部をご紹介します。
            </Text>

            <SimpleGrid columns={[1, 2, 3]} gap={5} maxW="1200px" mx="auto">
                {projects.map((project, index) => (
                    <Dialog.Root key={index}>
                        <Dialog.Trigger>
                            <VStack
                                borderRadius="md"
                                p={5}
                                transition="transform 0.3s ease"
                                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    borderRadius="md"
                                    width="400px"
                                    height="250px"
                                    objectFit="contain"
                                />
                                <Text fontSize="xl" fontWeight="bold" mt={4}>
                                    {project.title}
                                </Text>
                            </VStack>
                        </Dialog.Trigger>

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
                                        <VStack align="start">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                borderRadius="md"
                                            />
                                            <Text>{project.description}</Text>
                                            <HStack>
                                                {project.github && (
                                                    <Button
                                                        as={Link}
                                                        href={project.github}
                                                        colorScheme="gray"
                                                        isExternal
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
                    </Dialog.Root>
                ))}
            </SimpleGrid>
        </Box>
    );
}