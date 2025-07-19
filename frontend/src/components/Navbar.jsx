import React from 'react'
import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react"
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            Product Store
          </Text>
        </Link>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus size={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar