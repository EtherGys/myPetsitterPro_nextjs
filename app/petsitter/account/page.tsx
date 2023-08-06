"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import { Flex, Title } from '@mantine/core';
import { useAboutPageStyles } from '@styles/AboutPage.styles'


export default function PetsitterValidation() {
    
    const { classes } = useAboutPageStyles();
    
    return (
        <Flex direction="column" align="center" >
        <PageTitle title='Comment se passe la validation de mon compte PetsitterPRO ?' />
        <div className={classes.txtContainer}>
        <p>
        Afin de valider votre profil, merci de nous joindre la copie de votre acaced ou CCAD, votre attestation d&apos;assurances, votre SIRET et votre déclaration d&apos;établissement.
        Merci de remplir votre fiche d&apos;établissement intégralement. Et D&apos;accepter les conditions Générale de Services.
        </p>
        <p>
        Plus qu&apos;une simple plateforme web nous sélections les profils de PetSitter qui répondent à notre charte qualité et d&apos;exigence mais surtout aux profils que recherche les propriétaires d&apos;animaux.
        </p>
        <p>
        Nous acceptons différents modes de garde tel que la garde en famille d&apos;accueil, la garde en pension , la pensions de types chenils ou semi chenils et les prestation de visites à domicile ou Home Sitting , tant que celui-ci respecte des conditions d&apos;accueil bienveillant pour l&apos;animal .
        </p>
        <p>
        Une visite de votre établissement sera organisée avant la validation officiel.
        </p>
        Votre profil de PetSitterPRO sera examiné manuellement par notre équipe dans les plus brefs délais
        <Title className={classes.Title} order={4}>Pour quelles raisons mon profil pourrait être refusé ?</Title>
        <p>
        La vérification et l&apos;approbation des PetSitterPro se base sur la conformité des documents légaux nécessaire à l&apos;exercice du métier de Petsitter Professionnel, du respect des CGS et de notre charte Qualités mais également liés à votre but personnel à travailler avec nous. Nous avons pour ambition de votre accompagnés dans votre développement afin de satisfaire de plus en plus de demande clients et de vous apporter un accompagnement privilégiés de sortes à améliorer votre conditions de travail .
        </p>

        Votre profil pourrait ne pas être approuvé pour de nombreuses raisons. Voici quelques-unes des plus importantes :
        <ul>
        <li>
        Les Petsitters n&apos;ont pas en leurs possession les documents légaux demander.
        </li>
        <li>
        Les locaux ne respectent pas les normes sanitaires nécessaire à une bonne qualité de services
        </li>
        <li>
        Votre ambition est limitée et ne souhaitez pas vous investir sur le long terme parmi nous.
        </li>
        <li>
        Vous ne proposez pas de disponibilité suffisante pour répondre a un minimum de demandes clients
        </li>
        <li>
        Votre amabilité et le sens de l&apos;accueil est un point essentiel à la satisfaction clients, nous y seront également attentif.
        </li>
        <li>
        Mais également l&apos;offre de services et il adaptés aux animaux qui vous seront confiés.
        </li>
        <li>
        Les informations contenues dans le profil seront également étudiées et vérifié afin d&apos;en garantir la véracité
        </li>
        </ul>
        <Title className={classes.Title} order={4}>Puis-je faire appel de la décision d&apos;approbation ?</Title>
        <p>
        Chez PetsitterPro , la sélection des PetSitter est prise très au sérieux.
        </p>
        <p>
        Si votre profil est refusé vous en connaitrait la raison, il vous sera donc facile de vous mettre en conformités avant de renouveler votre demande.
        Nous sommes attentifs dès le départ aux détails, afin de vous faire gagner du temps et commencer à participer a cette aventure Humaine.
        Votre profil sera évalué régulièrement par notre équipe et pourra être évaluer également par les clients.
        </p>
        <p>
        Cette plateforme à fait le choix de sélectionnées des profils professionnelle ambitieux et sérieux, afin de garantir la tranquillité d&apos;esprits des clients sur le long terme !
        </p>
        </div>
        </Flex>
        )
    }