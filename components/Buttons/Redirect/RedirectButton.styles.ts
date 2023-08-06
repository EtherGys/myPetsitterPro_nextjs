import { createStyles } from '@mantine/core'

export const useRegisterButtonStyles = createStyles((theme) => ({
btnLight: {
    width: "300px",
    height: "255px",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderRadius:"25px",
    borderColor: "#FFC478",
    borderWidth: "7px",
    marginTop:"20px",
    marginBottom:"20px",
    
    [theme.fn.largerThan('md')]: {
            marginRight: '100px',
            marginLeft: '100px',
    },
},

}))