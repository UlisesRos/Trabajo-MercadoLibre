import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react"
import ListaTarjetas from "../components/ListaTarjetas"
import "../index.css"

const Seccion = (props) => {

    const [mayor500] = useMediaQuery("(max-width: 550px)")

    return(
        <Box 
        minHeight="550px"
        bg="#ebebeb"
        p="30px 0">
            <Flex
                as = "a"
                href="#"
                justify="start"
                align="center"
                margin="0 10px"
                paddingLeft="5px"
                h="40px"
                borderRadius="3px"
                fontSize="20px"
                bg="white"
                display={mayor500 ? "flex" : "none"}>
                    Ofertas</Flex>

            <Flex
                columnGap="15px"
                paddingTop="30px"
                paddingLeft="55px"
                justify="start"
                display={mayor500 ? "none" : "flex"}>

                    <Text
                        fontSize="24px"
                        fontWeight="semibold"
                        >
                            Ofertas</Text>

                    <Box
                        as="a"
                        href="#"

                        textDecorationStyle="none"
                        color="#3483fa"
                        paddingTop="9px"
                        fontSize="16px"
                        _hover={{
                            color:"blue"
                        }}>
                            ver todas</Box>

            </Flex>

            <Box   
                display={mayor500 ? "flex" : "block"}
                marginTop="0px"
                justifyContent= "center" 
                alignItems="center">
                    <ListaTarjetas lista={props.lista}/>
            </Box>

            <Flex
                as = "a"
                href="#"
                justify="start"
                align="center"
                margin="0 10px"
                paddingLeft="5px"
                h="40px"
                borderRadius="3px"
                fontSize="20px"
                bg="white"
                color="#3483fa"
                _hover={{
                    color:"blue"
                }}
                display={mayor500 ? "flex" : "none"}>
                    Ver mas</Flex>

        </Box>
    )
}

export default Seccion