import { Flex, useMediaQuery } from "@chakra-ui/react"
import Tarjeta from "./Tarjeta"

const ListaTarjetas = (props) =>{

    const [mayora550] = useMediaQuery("(max-width: 550px)")

    return(

        <Flex
        direction={mayora550 ? "column" : "row"}
        justify="space-evenly"
        wrap="wrap"
        rowGap={mayora550 ? "2px" : "20px"}
        columnGap="15px"
        m="30px 30px 0 30px">
            {
                props.lista.map(objeto => <Tarjeta key={objeto.id} objeto={objeto}/>)
            }
        </Flex>

    )
}


export default ListaTarjetas