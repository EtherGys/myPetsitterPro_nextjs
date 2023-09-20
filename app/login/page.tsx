"use client"
import React, { useState } from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import LoginForm from "@components/Forms/LoginForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Button, Flex, PasswordInput, TextInput } from '@mantine/core';
import { useLoginPageStyles } from '@styles/LoginPage.styles'
import {signIn, useSession, getSession, getProviders, getCsrfToken } from "next-auth/react"
// import signIn from "next-auth"
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter()
    
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const {data: session, status} = useSession()
    const { classes } = useLoginPageStyles();
    
    
    const loginUser = async (e) => {
        e.preventDefault()
        signIn('credentials', {
            ...data, 
            redirect: false,
        })
        router.push('/')
        
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
        <button type="submit">
        Je me connecte
        </button>
        </div>
        </form>
        <div className={classes.goToLoginDiv}>
        <p>Vous n&apos;avez pas encore de compte ?</p>
        <a href="/redirect">Je m&apos;inscris</a>
        </div>
        </Flex>
        )
    }
    