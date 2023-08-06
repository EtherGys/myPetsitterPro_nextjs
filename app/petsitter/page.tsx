"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import PetsitterRegisterForm from "@components/Forms/PetsitterRegisterForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex } from '@mantine/core';
import { usePetsitterRegistrationStyles } from '@styles/PetsitterRegistration.styles'


export default function RedirectToRegistration() {
    
    const { classes } = usePetsitterRegistrationStyles();
    
    
    return (
        <Flex direction="column" align="center">
        <PageTitle title='Créez votre compte PetsitterPRO' />
        <div className={classes.mainContainer}>
        <div className={classes.procedureInfos}>
        <p>
        Plus qu&apos;une simple plateforme web, nous sélectionnons les profils de petsitters qui répondent à notre charte qualité et d&apos;exigence, mais surtout aux profils que recherchent les propriétaires d&apos;animaux. C&apos;est pourquoi, après votre inscription votre compte devra être validé par nos équipes avant de pouvoir intéragir avec nos clients. 
        </p>
        <p>
        Afin d&apos;accéder à la validation de votre compte, nous vous invitons à remplir votre profil et à renseigner les types de prestations que vous allez proposer. Votre profil PetSitterPRO sera examiné manuellement par notre équipe dans les plus brefs délais, et une visite de votre établissement sera organisée avant la validation officiel. 
        </p>
        <p>
        Pour plus d&apos;informations, consultez la <a>procédure complète de validation</a>.
        </p>
        </div>
        <PetsitterRegisterForm/>
        </div>
        <MainButton text="Je m'inscris" href="#" />
        </Flex>
        )
    }
    