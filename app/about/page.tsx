"use client"
import React from 'react';
import Image from 'next/image';
import HeroPhoto from '@photo/GARDEDECHIEN.jpeg';
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import { Flex } from '@mantine/core';
import { useAboutPageStyles } from '@styles/AboutPage.styles'


export default function AboutPage() {
    
    const { classes } = useAboutPageStyles();
    
    return (
        <Flex direction="column" align="center">
        <PageTitle title='À propos' />
        <div className={classes.txtContainer}>
        <p>
        PetSitterPRO, C&apos;est avant tout l&apos;histoire de Cindy Ventrella, moi-même ! 
        <br/>
        Petsitter Professionnel passionnée par les animaux et l&apos;entrepreneuriat, et qui durant neuf ans à côtoyé des centaines de clients insatisfaits des solutions existantes sur internet.
        L&apos;idée a mûri lorsque, régulièrement, mes clients me témoignaient leurs difficultés à trouver pendant mes indisponibilités, un PetSitter professionnel similaire aux services que j&apos;offrais ; mais également de leur attente envers moi de les accompagner dans leur recherche.
        </p>
        <p>
        D&apos;autre part, en tant que PetSitter Professionnelle, je me suis rendu compte de la charge mentale, non négligeable, de ce métier ! Entre la gestion des clients, des pensionnaires, les Rendez-vous, les demandes de garde urgente, les imprévus, l&apos;administratif, et les horaires de travail interminable… difficile de ne pas avoir d&apos;impact sur notre vie personnelle ! C&apos;est aujourd&apos;hui l&apos;une des principales causes de la cessation d&apos;activité des Petsitters.
        </p>
        <p>
        J&apos;ai donc mûri ce projet en me basant sur les différentes problématiques, les différentes expériences de mes clients, mais aussi les problématiques spécifiques du Petsitter.
        </p>
        <p>
        Il était clair, que l&apos;offre du marché n&apos;est absolument plus adaptée à la mentalité des clients et qu&apos;il fallait tout revoir à zéro
        </p>
        <p>
        Je me suis donc intéressée à ces différentes problématiques, pour trouver « Mes » solutions, que j&apos;ai proposées à ma clientèle, qui a été immédiatement séduite. Et puis l&apos;envie de mettre un coup d&apos;accélérateur à l&apos;installation de ce métier en France a suivi.
        </p>
        <div className={classes.imgFlex}>
        
        <Image width={500} height={300} src={HeroPhoto} alt="Petsitter et animal" className={classes.imgContainer} />
        <p className={classes.textFlex}>
        Je souhaite travailler avec des Petsitters déjà installés, mais surtout accompagner tous les passionnés d&apos;animaux qui voudraient se lancer dans une carrière de Petsitter Professionnel. Et apporter au client cet accompagnement de recherche, de façon plus intuitive et autonome. 
        </p>         
        </div>
        <p>
        Le PetSitting est un chouette métier, trop peu connu et quasiment jamais plébiscité. C&apos;est malheureux car bien encadré, avec un projet mûrement réfléchi, et un accompagnement au carré, il offre un épanouissement certain  et une clientèle impliquée.
        </p>
        <p>
        Révolutionner le monde du PetSitting , c&apos;est le défi que je me suis lancé .
        </p>
        <p>
        c&apos;est pourquoi , PetSitterPro à vu le jour en 2023 et vous promet bien des surprises…
        </p>
        </div>
        </Flex>
        )
    }
    