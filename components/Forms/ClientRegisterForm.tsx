"use client"
import React from 'react'
import { TextInput, Title } from '@mantine/core';
import LoginForm from './LoginForm'


export default function ClientRegisterForm() {
    
    
    return (
        <>
        <Title order={4}>Informations de connexion</Title>
        < LoginForm />
        <Title order={4}>Informations personnelles</Title>
        <TextInput
             placeholder="Nom"
             area-label="Nom"
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

        <Title order={4}>Votre adresse postale</Title>
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
        </>
        )
    }
    