"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import { RedirectionButton } from "@components/Buttons/Redirect/RedirectionButton";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex, Input, PasswordInput } from '@mantine/core';
import MasterLogo from '@logo/icone_maitre.png';
import PetsitterLogo from '@logo/icone_petsiter.png';
import { useRegisterRedirectStyles } from '@styles/registerRedirect.styles'


export default function RedirectToRegistration() {
    
    const { classes } = useRegisterRedirectStyles();
    
    return (
        <Flex direction="column" align="center">
        
        <Input
        placeholder="Adresse email"
        size="md"
        />
        <PasswordInput
        placeholder="Mot de passe"
        label="Mot de passe"
        // error="Votre mot de passe ne correspond pas"
        />
        <MainButton text="Je me connecte" href="#" />
        </Flex>
        )
    }
    