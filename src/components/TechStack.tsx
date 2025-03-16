"use client";

import { Box, Heading, SimpleGrid, VStack, Icon, Text } from "@chakra-ui/react";
import {
    SiNextdotjs,
    SiReact,
    SiDjango,
    SiPython,
    SiSupabase,
    SiRender,
    SiVercel
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const techStacks = [
    { name: "Next.js", icon: SiNextdotjs, description: "個人開発で8ヶ月ほど使用" },
    { name: "React", icon: SiReact, description: "主にNext.jsの理解度を高めるために使用" },
    { name: "Django", icon: SiDjango, description: "個人開発で3年ほど使用" },
    { name: "Python", icon: SiPython, description: "個人開発および、競技プログラミングで3年ほど使用" },
    { name: "Java", icon: FaJava, description: "大学の授業で1年ほど使用" },
    { name: "C++", icon: SiCplusplus, description: "大学の授業で6ヶ月ほど使用" },
    { name: "Supabase", icon: SiSupabase, description: "個人開発で8ヶ月ほど使用" },
    { name: "Render", icon: SiRender, description: "主にAPIなどバックエンドのデプロイに使用" },
    { name: "Render", icon: SiVercel, description: "主にフロントエンドのデプロイに使用" },
];

export default function TechStack() {
    return (
        <Box as="section" bg="black" color="white" py={20} px={6} id="skills">
            <Heading fontSize="4xl" textAlign="center" mb={10}>
                Tech Stack
            </Heading>
            <Text textAlign="center" color="gray.400" mb={12}>
                使用経験のある主な技術スタックです。
            </Text>
            <SimpleGrid columns={[3, 4, 5]} gap={8} maxW="800px" mx="auto">
                {techStacks.map((stack, idx) => (
                    <VStack key={idx} m={2}>
                        <Icon as={stack.icon} boxSize={12} color="teal.300" />
                        <Text>{stack.name}</Text>
                        <Text>{stack.description}</Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    );
}
