"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import ClientRegisterForm from "@components/Forms/ClientRegisterForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex } from '@mantine/core';
import { useSession } from 'next-auth/react';



export default function Registration() {
    
    const {data: session, status} = useSession()
    
    return  (
        <Flex direction="column" align="center">
        {
            status == "authenticated" ? 'Vous êtes déjà connecté' 
            : 
            <>
            <PageTitle title="Créez votre compte" />
            <ClientRegisterForm/>
            </>
        }
        
        
        </Flex>
        )
    }
    