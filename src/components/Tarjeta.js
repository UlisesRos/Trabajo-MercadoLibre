import { useState } from "react";
import { Card, CardBody, Divider, Heading, Image, Stack, Text, Box, useMediaQuery } from "@chakra-ui/react";
import Boton from "../components/Boton";
import TarjetaCelular from "../components/TarjetaCelular";

const Tarjeta = (props) => {

    const [visible, setvisible] = useState(false);

    function over(e) {
        setvisible(true);
    }
    function out(e) {
        setvisible(false);
    }

    const [mayora550] = useMediaQuery("(max-width: 550px)")

    return(
            

            <Box
            as="a"
            target="_blank"
            href={props.objeto.href}>

                <TarjetaCelular objeto={props.objeto}/>

                <Card
                w="224px" 
                h="330px"
                borderTopRadius="0px"
                bg="white"
                _hover={{
                    h: "390px",
                    boxShadow: "dark-lg",
                }}
                transition="0.2s"
                onMouseOver={over}
                onMouseOut={out}
                cursor="pointer"
                display={mayora550 ? "none" : "block"}
                >

                    <Box
                    position="absolute"
                    left="170px"
                    m="20px 10px 0 0"
                    _hover={{
                        bg:"#E2E8F0",
                        borderRadius:"50px"
                    }}
                    visibility={visible ? "visible" : "hidden"}
                    >
                        <Boton />
                    </Box>

                    <Image 
                        src={props.objeto.img} 
                        alt="imagen-producto"
                        w="224px"
                        h="224px"
                        objectFit="cover"
                    ></Image>

                    <Divider />

                    <Text
                    display={visible ? "inline" : "none"}
                    variant="font"
                    m="0px 0px 0px 20px"
                    as="s"
                    color="#718096"
                    >
                        ${props.objeto.precioAnt}</Text>
                    
                    <CardBody 
                    overflow="hidden"
                    paddingTop="0px"
                    >

                        <Stack 
                        spacing="0px">

                            <Heading 
                            size="md"
                            fontWeight="semibold"
                            marginTop={visible ? "0px" : "13px"}
                            paddingBottom="10px"
                            display="flex"
                            columnGap="8px"
                            >
                                ${props.objeto.precio} <Text as="span" fontSize="xs" alignSelf="center" paddingTop="3px" color="#00a650">%{props.objeto.descuento} OFF</Text></Heading>
                            
                            <Text
                            variant="font"
                            color="#00a650">
                                {props.objeto.cuotas}</Text>
                            
                            <Text
                            variant="font"
                            color="#00a650"
                            fontWeight="semibold">
                                {props.objeto.envio} <Text as="span" fontWeight="bold" fontSize="8px" textTransform="uppercase" fontStyle="italic" color="#00a650">{props.objeto.full}</Text></Text>
                            
                            <Text
                            display={visible ? "inline" : "none"}
                            paddingTop="8px"
                            fontSize="xs"
                            color="#718096"
                            textOverflow="ellipsis"
                            transition="0.2s"
                            >
                                {props.objeto.descripcion}</Text>

                        </Stack>

                    </CardBody>

                </Card>

            </Box>
    )
}

export default Tarjeta 