'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { PageTitle } from '@components/Sections/PageTitle/PageTitle'
import { Flex, createStyles } from '@mantine/core'
import { AiOutlinePlus, AiOutlineCalendar, AiOutlineCar, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { BsHouseDoor} from 'react-icons/bs';

const useStyles = createStyles((theme) => ({
  
  
  flexsInfos: {
    width: '80vw',
  },
  icon: {
    width: '50px',
    height: '30px',
    color: 'black',
  },
  infoText: {
    width:'180px',
  },
  flex : {
    display: 'flex',
    flexDirection:'row',
    paddingTop: '15px'
  },
  h2: {
    fontSize: '24px'
  }
}))

const DashboardPage = () => {
  
  const {data: session, status} = useSession()
  const { classes } = useStyles();
  console.log(session);
  
  return (
    <>
    
    <Flex       
    justify="center"
    align="center"
    direction="column">
    <PageTitle title='Mon profil'/>
    
    
    <h2 className={classes.h2}>Hello {session?.user.name} !</h2>
    <div className={classes.flexsInfos}>
    
    </div>
    <Flex
    justify="center"
    align="flex-start"
    direction="column"
    >
    
    
    <h2 className={classes.flexsInfos}>Informations</h2>
    <div className={classes.flex}>
    <AiOutlineMail  className={classes.icon} /><span className={classes.infoText}>{session?.user.email}</span>
    </div>
    {/* <div className={classes.flex}>
    <BsHouseDoor  className={classes.icon} /><span className={classes.infoText}>{session?.user.number}</span>
    </div> */}
    </Flex>
    </Flex>
    
    
    </>
    )
  }
  
  export default DashboardPage
  