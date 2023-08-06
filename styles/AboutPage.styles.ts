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
  },

  Title: {
    textAlign:'center',
    marginTop:'10px'
  }
  
}))

