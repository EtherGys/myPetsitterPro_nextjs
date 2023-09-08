import { createStyles } from '@mantine/core'

export const useAboutPageStyles = createStyles((theme) => ({
  txtContainer: {
    marginInline: '1rem',
    width: '80vw',
    
    [theme.fn.largerThan('md')]: {
      marginInline: '2rem',
    },
  },
  
  imgContainer: {
    textAlign: 'center',
    display: 'block',
    margin: '0 auto',
    [theme.fn.smallerThan('sm')]: {
      width: '80vw',
      height:'40%',
    },
  },
  
  imgFlex: {
    [theme.fn.largerThan('md')]: {
      paddingTop: '50px',
      paddingBottom: '50px',
      
      display: 'flex',
      textAlign: 'center'
    },
  },
  
  Title: {
    [theme.fn.largerThan('md')]: {
      textAlign:'center',
      marginTop:'10px'
    }
  },
    
    textFlex: {
      [theme.fn.largerThan('md')]: {
        margin:'auto',
        padding: '10px 50px'
      }
    },
      
    }))
    
    