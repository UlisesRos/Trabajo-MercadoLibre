import { useMediaQuery, Flex,  Image, Text, Heading } from "@chakra-ui/react"


const TarjetaCelular = (props) => {

    const [mayora500] = useMediaQuery("(max-width: 550px)")

    return(
        <Flex
        direction="row"
        align="center"
        h="224px"
        w="100%"
        gap="1"
        bg="white"
        borderRadius="3px"
        display={mayora500 ? "flex" : "none"}>

            <Image 
                src={props.objeto.img} 
                alt="imagen-producto"
                w="150px"
                h="150px"
                objectFit="cover"></Image>

            <Flex
            direction="column"
            justify="start"
            gap="0.5">
                <Text
                    paddingTop="8px"
                    fontSize="xs"
                    color="#718096"
                    textOverflow="elipsis"
                    >
                        {props.objeto.descripcion}</Text>
                
                <Text
                    variant="font"
                    as="s"
                    color="#718096"
                    >
                        ${props.objeto.precioAnt}</Text>

                <Heading 
                    size="md"
                    fontWeight="semibold"
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

            </Flex>

        </Flex>
    )
}


export default TarjetaCelular