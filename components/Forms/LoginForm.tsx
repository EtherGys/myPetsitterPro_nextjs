"use client"
import React from 'react'
import { PasswordInput, TextInput } from '@mantine/core';
import { MainButton } from '@components/Buttons/MainButton';


export default function LoginForm() {
    
    
    return (
        <>
        <TextInput
        placeholder="Adresse mail"
        area-label="Adresse mail"
        size="md"
        // icon=
        styles={{input: {
            width:"80vw",
            height:"50px",
            marginTop: "10vh",
            marginBottom: "10px",
        }}}
        />
        <PasswordInput
        placeholder="Mot de passe"
        area-label="Mot de passe"
        size="md"
        // error="Votre mot de passe ne correspond pas"
        styles={{input: {
            width:"80vw",
            height:"50px",
            marginTop: "10px",
            marginBottom: "10px",
        }}}
        />
        {/* <div className={classes.loginButtonDiv}> */}
        <button  type='submit' >
        Je me connecte
          </button>
        {/* </div> */}
        </>
        )
    }
    