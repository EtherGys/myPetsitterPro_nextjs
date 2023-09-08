"use client"
import Image from 'next/image'
import HeroPhoto from '@photo/Homepage-picture.jpg';
import { MainButton } from "@components/Buttons/MainButton";
import { Flex } from '@mantine/core';
import { useHomepageStyles } from '@styles/Homepage.styles'


export default function Homepage() {
  const { classes } = useHomepageStyles();
  const redirectToRegister = "/redirect";

  return (
    <Flex className={classes.body} direction="column" align="center">
      <div className={classes.imageDiv}>
        <Image className={classes.heroImage} width={1200} height={500} src={HeroPhoto} alt="Petsitter et animal" />
      </div>
      <div className={classes.containerPrimaryText}>
        <h1>PetSitterPRO</h1>
        <p>
          La première plateforme de petsitters professionnels au service des animaux et de leurs maîtres dans le Nord !
        </p>
        <MainButton text="Trouver mon Petsitter pro" href="#" />
      </div>
      <div className={classes.aboutUs}>
        <p>
          Petsitterpro.com est né après 9 années d&apos;expériences en tant que petsitter professionnelle.
        </p>
        <p>
          Créée dans l&apos;unique but d&apos;accompagner les clients soucieux du bien-être de leurs animaux à trouver une garde professionnelle rapidement et facilement.
        </p>
          <MainButton text="M'inscrire" href={redirectToRegister} />
      </div>
      <div>

   
      <div className={classes.discoveryText}>
        <h2>Découvrez nos services</h2>
        <div>
          <h3>Trouvez votre petsitter professionnal local en quelques clics</h3>
          <p>
            Offrez à votre animal les services des meilleurs petsitter professionnels proches de chez vous, sélectionnés pour leur passion du métier et leur compétence.
          </p>
        </div>
        <div>
          <h3>Simplifier votre recherche</h3>
          <p>
            Gérez facilement vos réservations, vos paiements, vos rendez-vous et vos échanges avec un petsitter pro grâce à notre plateforme.
          </p>
        </div>
        <div>
          <h3>Comparez et choisissez</h3>
          <p>
            Comparez les petsitters en fonction de vos besoins, mais aussi ceux de votre animal de compagnie !
          </p>
          <p>
            Famille d&apos;accueil, chenil, visites à domicile,...
          </p>
        </div>
        <div>
          <h3>Réservez en toute sérénité</h3>
          <p>
            Avec PetSitterPRO, il est facile de trouver un petsitter professionnel de confiance, puisque nous les sélectionnons avec attention pour vous.
          </p>
          <p>
            Il ne vous reste qu&apos; à réserver et préparer vos valises !
          </p>
        </div>
        <div className={classes.button}>
          <MainButton text="Lancer ma recherche" href="#" />
        </div>
      </div>
      </div>
      <span className={classes.inscriptionText}>
        <h2>Vous proposez un service professionnel de garde d&apos;animaux ?</h2>
        <h2>Venez agrandir notre communauté PetSitterPRO !</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam esse autem tempore, sit neque quis earum eos natus modi ipsa beatae dolorem nihil quo dolorum vero? Totam, quas quasi!
          Dolorum, cupiditate! Aliquam temporibus fugiat ipsum harum nemo aspernatur eaque dolores deleniti, architecto exercitationem voluptate ipsa illo atque fuga quis voluptates sed optio! Tempora voluptates alias libero quidem tenetur quod!
          Consequatur voluptates magnam dicta tempora. Corrupti, nesciunt. Saepe, cum quae? Expedita voluptatum assumenda, odio repudiandae reiciendis nostrum deleniti asperiores necessitatibus similique est? Quae amet, dignissimos iste sint dolores eius odit.
        </p>
          <MainButton text="J'inscris mon établissement" href={redirectToRegister} />
        </span>
        {/* <h2>Nos clients sont satisfaits</h2> */}
    </Flex>
  )
}
