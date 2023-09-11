"use client"
import { useState } from 'react';
import {
    createStyles,
    Header,
    Container,
    Group,
    Burger,
    Paper,
    Transition,
    rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image'
import Logo from '@logo/logo_orange_bold_small.png'
import NameLogo from '@logo/logo_nom_petsitterpro_white.png'
import { useSession } from 'next-auth/react';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        backgroundColor: theme.fn.variant({ variant: 'light', color: "dark-green" }).background,
    },
    
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        width:'100%',
        
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
        [theme.fn.smallerThan('md')]: {
            textAlign:'center',
        },
         '@media (min-width: 800px) and (max-width: 1200px)': {
            width: '40%',
            right: 0
          },
    },
    
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        backgroundColor: theme.fn.variant({ variant: 'light', color: "dark-green" }).background,
        borderBottom: 0,
    },
    
    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },
    
    burger: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },
    
    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
        
        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },

    },
    
    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: "light-green" }).background,
            color: theme.fn.variant({ variant: 'light', color: "gray" }).color,
        },
    },
}));

// interface HeaderResponsiveProps {
//     links: { link: string; label: string }[];
// }



const labels = ["Accueil", "Créer un compte", "Trouver un professionnel", "Se connecter", "À propos", "Mon profil"]

export function HeaderResponsive() {
    const {data: session, status} = useSession()
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState();
    const { classes, cx } = useStyles();
    
    const links=[{ link:"/", label:`${labels[0]}` },{ link:"/redirect", label:`${labels[1]}` },{ link:"/register", label:`${labels[2]}` },{ link:"/login", label:`${labels[3]}` },{ link:"/about", label:`${labels[4]}` }, status === "authenticated" ? { link:"/profile", label:`${labels[5]}` } : '']
    const items = links.map((link) => (
        <a
        key={link.label}
        href={link.link}
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        onClick={(event) => {
            // event.preventDefault();
            // setActive(link.link);
            close();
        }}
        >
        {link.label}
        </a>
        ));
        
        return (
            <Header height={HEADER_HEIGHT} mb={100} className={classes.root}>
            <Container className={classes.header}>
            <span>
            <a href="/"><Image src={Logo} alt="myPetsitterPRO logo" width={40} height={45}/></a>
            <a href="/"><Image src={NameLogo} alt="myPetsitterPRO name logo" width={200} height={40}/></a>
            </span>
            <Group spacing={5} className={classes.links}>
            {items}
            </Group>
            
            <Burger color='white' opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            
            <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
                <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
                </Paper>
                )}
                </Transition>
                </Container>
                </Header>
                );
            }
            