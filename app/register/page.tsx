"use client"
import React from 'react'
import { PageTitle } from "@components/Sections/PageTitle/PageTitle";
import ClientRegisterForm from "@components/Forms/ClientRegisterForm";
import { MainButton } from "@components/Buttons/MainButton";
import { Flex } from '@mantine/core';



export default function Registration() {
    
    
    return (
        <Flex direction="column" align="center">
        
        <PageTitle title="Créez votre compte" />
        <ClientRegisterForm/>
        
        
        </Flex>
        )
    }
    