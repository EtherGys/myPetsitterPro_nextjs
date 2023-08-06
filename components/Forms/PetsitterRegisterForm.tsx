"use client"
import React from 'react'
import { TextInput, Title, Switch, Checkbox } from '@mantine/core';
import LoginForm from './LoginForm'
import { usePetsitterRegistrationStyles } from '@styles/PetsitterRegistration.styles'


export default function PetsitterRegisterForm() {
     
     const { classes } = usePetsitterRegistrationStyles();
     
     return (
          <>
          <Title className={classes.Title} order={4}>Informations de connexion</Title>
          < LoginForm />
          <div  className={classes.row}>
          
          <Title className={classes.Title} order={4}>Informations de votre entreprise</Title>
          <TextInput
          placeholder="Nom de votre entrerpise"
          area-label="Nom de votre entrerpise"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10vh",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Numéro SIRET"
          area-label="Numéro SIRET"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Numéro ACECED/CCAD"
          area-label="Numéro ACECED/CCAD"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Téléphone"
          area-label="Téléphone"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          </div>
          <div  className={classes.row}>
          <Title className={classes.Title} order={4}>Votre adresse postale</Title>
          <TextInput
          placeholder="Numéro"
          area-label="Numéro"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Rue"
          area-label="Rue"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Code postal"
          area-label="Code postal"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
               
          }}}
          />
          <TextInput
          placeholder="Ville"
          area-label="Ville"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          </div>
          <div  className={classes.row}>
          <Title className={classes.Title} order={4}>Dirigeant de votre entreprise</Title>
          <TextInput
          placeholder="Nom"
          area-label="Nom"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
               
          }}}
          />
          <TextInput
          placeholder="Prénom"
          area-label="Prénom"
          size="md"
          // icon=
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          </div>
          <div  className={classes.row}>
          <Title className={classes.Title} order={4}>Informations supplémentaires</Title>
          <div className={classes.checkedInfos}>
          <Switch
          label="J'accepte les chiens de catégories"
          color="teal"
          // value="putValue"
          styles={{label: {
               fontSize: '1.1rem',
          }}}
          />
          <Switch
          label="J'accepte les animaux non castrés"
          color="teal"
          // value="putValue"
          className={classes.checksPosition}
          styles={{label: {
               fontSize: '1.1rem',
          }}}
          />
          <Switch
          label="J'accepte les femelles en chaleur"
          color="teal"
          // value="putValue"
          className={classes.checksPosition}
          styles={{label: {
               fontSize: '1.1rem',
          }}}
          />
          <Switch
          label="J'accepte les animaux nécessitant un traitement"
          color="teal"
          // value="putValue"
          className={classes.checksPosition}
          styles={{label: {
               fontSize: '1.1rem',
          }}}
          />
          <div className={classes.checkboxes}>
          
          <Checkbox
          label="Je déclare avoir pris connaissance des CGU et je les accepte"
          color="teal"
          styles={{label: {
               fontSize: '1.1rem',
          }}}
          />
          <Checkbox
          label="
          Je déclare avoir pris connaissance de l'accord sur la protection des données personnel et j'accepte de le respecter"
          color="teal"
          className={classes.checksPosition}
          
          styles={{label: {
               fontSize: '1.1rem',
          }}}
          />
          </div>
          </div>
          </div>
          </>
          )
     }
     