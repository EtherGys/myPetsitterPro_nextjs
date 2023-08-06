import { createStyles } from '@mantine/core'

export const useRegisterRedirectStyles = createStyles((theme) => ({
    btnFlex: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        padding: "30px", 
        
        [theme.fn.largerThan('md')]: {
            flexDirection: 'row',
        },
    },
    
    goToConnectionDiv: {
        paddingTop: "10px",
        paddingBottom: "20px",
        textAlign: "center"
    },
    
}))