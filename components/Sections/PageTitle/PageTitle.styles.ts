import { createStyles } from '@mantine/core'

export const usePageTitleStyles = createStyles((theme) => ({
    h1: {
        color: "#090B44",
        height: "80px",
        backgroundColor: '#F0E5D8',
        width: "100%",
        fontWeight: "bold",
        fontSize: "1rem",
        fontFamily: "Roboto",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",

        [theme.fn.largerThan('md')]: {
            width: "80%",
        },
    },

}))