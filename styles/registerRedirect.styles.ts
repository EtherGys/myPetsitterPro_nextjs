import { createStyles } from '@mantine/core'

export const useRegisterRedirectStyles = createStyles({
    btnFlex: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        padding: "30px", 
    },
    
    goToConnectionDiv: {
        paddingTop: "10px",
        paddingBottom: "20px",
        textAlign: "center"
    }
    
    // /* media queries */
    // @media all and (min-width: 1000px) {
    //     .btnFlex {
    //         display: flex,
    //         flex-direction: row,
    //     }
    
    //     .btnFlexPosition {
    //         marginRight: 30px,
    //         marginRight: 30px,
    //     }
    // }
})