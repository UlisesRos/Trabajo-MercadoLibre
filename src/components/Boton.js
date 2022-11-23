import {  Box, Image } from "@chakra-ui/react";

const Boton = () => {
    return(
        <Box>
            <Box
            h="35px"
            w="35px"
            bg="#CBD5E0"
            borderRadius="50px"
            opacity="0.3"
            >
            </Box>

            <Box
            as="a"
            href="#">
                    <Image
                    position="absolute"
                    top="10px"
                    left="10px"
                    src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png" 
                    alt="corazon" 
                    w="15px" 
                    h="15px"/>
            </Box>

        </Box>
    )
}


export default Boton