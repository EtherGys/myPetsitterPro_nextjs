"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import LoginForm from "@components/Forms/LoginForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex } from '@mantine/core';
import { useLoginPageStyles } from '@styles/LoginPage.styles'


export default function Login() {

    const { classes } = useLoginPageStyles();

    return (
        <Flex direction="column" align="center">
            <PageTitle title='Connexion' />
            <LoginForm />
            <div className={classes.loginButtonDiv}>
                <MainButton text="Je me connecte" href="#" />
            </div>
            <div className={classes.goToLoginDiv}>
                <p>Vous n&apos;avez pas encore de compte ?</p>
                <a href="/redirect">Je m&apos;inscris</a>
            </div>
        </Flex>
    )
}
