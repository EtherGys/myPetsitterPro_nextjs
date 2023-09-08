"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import { RedirectionButton } from "@components/Buttons/Redirect/RedirectionButton";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex } from '@mantine/core';
import MasterLogo from '@logo/icone_maitre.png';
import PetsitterLogo from '@logo/icone_petsiter.png';
import { useRegisterRedirectStyles } from '@styles/RegisterRedirect.styles';


export default function RedirectToRegistration() {

    const { classes } = useRegisterRedirectStyles();

    return (
        <Flex direction="column" align="center">

            <PageTitle title="Inscription" />
            <div className={classes.btnFlex}>
                <RedirectionButton src={MasterLogo} alt="Petsitter" text="Je suis un maitre" subtitle="J'ai un animal à confier" href="/register" />
                <RedirectionButton src={PetsitterLogo} alt="Maitre avec un chien en laisse" text="Je suis Petsitter Pro" subtitle="J'offre mes services" href="/register" />
            </div>
            <div className={classes.goToConnectionDiv}>
                <p>Vous avez déjà un compte ?</p>
                <MainButton text="Je me connecte" href="/login" />
            </div>
        </Flex>
    )
}
