"use client";

import { Box, Heading, Text, Image, Link, VStack, HStack } from "@chakra-ui/react";

export default function About() {
    return (
        <Box
            as="section"
            bg="black"
            color="white"
            py={20}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            mx="auto"
            id="about"
        >
            <Image
                src="/image/profile.png"
                alt="Profile Picture"
                borderRadius="full"
                boxSize={{ base: "120px", md: "180px" }}
                mr={{ md: 10 }}
                mb={{ base: 6, md: 0 }}
            />

            <VStack align="start" maxW="600px" p={4}>
                <Heading fontSize="3xl">About Me</Heading>
                <Text color="gray.300">
                    2003年9月21日生まれの熊本皓介です！現在カナダのブリティシュコロンビア大学でコンピューターサイエンスを専攻しています。大学ではassemblyや機械言語からアルゴリズムまではば広く全体的にコンピューターサイエンスを学んでいるだけでなく、Data Scienceも学習しています。
                    高校生のときにThe Social Networkという映画を見てからプログラミングに興味を持ち、勉強を始めました。
                    個人開発では、主にDjangoとNext.jsを使用し、Webアプリケーションの開発を行っています。訪日外国人向けのツアーを企画から運営まで一貫して行っており、企画力、実行力には自信があります。
                    趣味はサッカーで、バイエルンミュンヘンを愛しています。愛しすぎてドイツ語も独学で喋れるようになりました笑
                </Text>

                <HStack>
                    <Link href="https://github.com/K-suk" color="blue.400" target="_blank">
                        GitHub
                    </Link>
                    <Link href="https://atcoder.jp/users/KosKos" color="blue.400" target="_blank">
                        AtCoder
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100042335686106" color="blue.400" target="_blank">
                        Facebook
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
}