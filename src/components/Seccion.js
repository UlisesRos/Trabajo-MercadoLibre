import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react"
import ListaTarjetas from "../components/ListaTarjetas"
import "../index.css"

const Seccion = (props) => {

    const [mayor500] = useMediaQuery("(max-width: 550px)")

    return(
        <Box 
        minHeight="550px"
        bg="#ebebeb">
            <Flex
            columnGap="15px"
            paddingTop="30px"
            paddingLeft="55px"
            justify="start"
            align="center">

                <Text
                fontSize="26px"
                fontWeight="ligth"
                color={mayor500 ? "black" : "#666"}

                
                >Ofertas</Text>

                <Box
                as="a"
                href="#"
                textDecorationStyle="none"
                color="#3483fa"
                fontSize="16px"
                marginBottom="3px"
                alignSelf="end"
                _hover={{
                    color:"blue"
                }}
                >ver todas</Box>

            </Flex>

            <Box>
                <ListaTarjetas lista={props.lista}/>
            </Box>
        </Box>
    )
}

export default Seccion