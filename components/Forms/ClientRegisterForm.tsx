"use client"
import React, { useState } from 'react'
import { PasswordInput, TextInput, Title } from '@mantine/core';
import LoginForm from './LoginForm'
import { useRouter } from 'next/navigation'
import { MainButton } from '@components/Buttons/MainButton';


export default function ClientRegisterForm() {
     const router = useRouter()
     const [data, setData] = useState({
          name: '',
          email: '',
          password: ''
     })
     
     const registerUser = async (e) => {
          e.preventDefault()
          const response = await fetch('/api/register', {
               method: 'POST',
               headers: {
                    "Content-Type": 'application/json'
               },
               body: JSON.stringify({data})
          })
          // const userInfo = await response.json()
          console.log(data);
          // router.push('/login')
     }
     
     return (
          <>
          <form onSubmit={registerUser}>
          <Title order={4}>Informations de connexion</Title>
          {/* < LoginForm /> */}
          <Title order={4}>Informations personnelles</Title>
          <TextInput
          placeholder="Nom"
          area-label="Nom"
          size="md"
          value={data.name}
          onChange={(e) => {setData({...data, name: e.target.value})}}
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10vh",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="email"
          area-label="email"
          size="md"
          value={data.email}
          onChange={(e) => {setData({...data, email: e.target.value})}}
          
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <PasswordInput
          placeholder="Mot de passe"
          area-label="Mot de passe"
          value={data.password}
          onChange={(e) => {setData({...data, password: e.target.value})}}
          
          size="md"
          // error="Votre mot de passe ne correspond pas"
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          {/* <TextInput
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
     /> */}
     {/* <TextInput
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
/> */}
<MainButton type='submit' text="Je m'inscris"  />
</form>

</>
)
}
