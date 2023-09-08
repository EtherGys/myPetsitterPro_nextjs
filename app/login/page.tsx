"use client"
import React, { useState } from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import LoginForm from "@components/Forms/LoginForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex, PasswordInput, TextInput } from '@mantine/core';
import { useLoginPageStyles } from '@styles/LoginPage.styles'
import {signIn, useSession} from "next-auth/react"
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const {data: session, status} = useSession()
    console.log('session', session);
    console.log('status', status);
    const { classes } = useLoginPageStyles();
    

    const loginUser = async (e) => {
        e.preventDefault()
        signIn('credential', {
            ...data, 
            redirect: false,
        })
        // const response = await fetch('/api/register', {
        //      method: 'POST',
        //      headers: {
        //           "Content-Type": 'application/json'
        //      },
        //      body: JSON.stringify({data})
        // })
        // const userInfo = await response.json()
        console.log('credentiales data', data);
        // router.push('/dashboard')
   }

    return (
        <Flex direction="column" align="center">
        <PageTitle title='Connexion' />
        {/* <LoginForm /> */}
        <form onSubmit={loginUser}>
        <TextInput
        placeholder="Adresse mail"
        area-label="Adresse mail"
        size="md"
        value={data.email}
        onChange={(e) => {setData({...data, email: e.target.value})}}

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
        value={data.password}
        onChange={(e) => {setData({...data, password: e.target.value})}}

        // error="Votre mot de passe ne correspond pas"
        styles={{input: {
            width:"80vw",
            height:"50px",
            marginTop: "10px",
            marginBottom: "10px",
        }}}
        />
        <div className={classes.loginButtonDiv}>
        <MainButton type="submit" text="Je me connecte" href="#" />
        </div>
        </form>
        <div className={classes.goToLoginDiv}>
        <p>Vous n&apos;avez pas encore de compte ?</p>
        <a href="/redirect">Je m&apos;inscris</a>
        </div>
        </Flex>
        )
    }
    