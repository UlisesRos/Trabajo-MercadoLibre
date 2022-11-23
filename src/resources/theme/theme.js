import { extendTheme } from "@chakra-ui/react";


const Text = {
    variants: {
        font: {
            fontSize: "sm"
        }
    }
}


export const theme = extendTheme({ components: { Text }})