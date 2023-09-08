import { createStyles } from '@mantine/core'

export const useHomepageStyles = createStyles((theme) => ({
  h1: {
    background:'#FFC478',
    padding: '20px',
  },
  
  containerPrimaryText: {
    background:'#FFC478',
    padding: '20px',
    width: "100%",
    textAlign: "center"
  },
  
  aboutUs: {
    background:'#BBDFC8',
    borderRadius:'15px',
    padding: '20px',
    marginTop: '40px',
    marginBottom: '40px',
    textAlign: "center", 
    width: '80%',
    '@media (min-width: 1200px)': {
      width: '30%',
      position: 'relative',
      top: 0,
      left: 220,
      zIndex: 1,
    },
    '@media (min-width: 1800px)': {
      width: '20%',
      position: 'relative',
      top: 0,
      left: 220,
      zIndex: 1,
    },
  },
  
  discoveryText: {
    background:'#F0E5D8',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '40px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 1200px)': {
      width: '80%',
      position: 'relative',
      left: 60,
      top: -110,
    },
  },
  
  inscriptionText: {
    background:'#BBDFC8' ,
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '40px',
    textAlign: "center",
    width: '80%',
    '@media (min-width: 1200px)': {
      width: '80%',
      position: 'relative',
      left: 60,
      top: -110,
    },
    '@media (min-width: 1800px)': {
      width: '30%',
      position: 'relative',
      left: 460,
      top: -260,
    },
  },
  
  body: {
  },
  
  button: {
    textAlign: "center"
  },
  heroImage: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    }
  },
  imageDiv: {
    marginTop: -100,
    textAlign: 'center',
    background:'#ADC4CE',
    width: '100%',
  }
  
}))