"use client"
import React, { useState } from 'react'
import { PasswordInput, TextInput, Title, createStyles } from '@mantine/core';
import LoginForm from './LoginForm'
import { useRouter } from 'next/navigation'
import { MainButton } from '@components/Buttons/MainButton';

const useStyles = createStyles((theme) => ({
     title: {
          marginTop: '45px',
          textAlign: 'center'
          
     },
     centered: {
          textAlign: 'center'
     },
     button: {
          textAlign: 'center',
          margin: '15px'
     },
     
}))

export default function ClientRegisterForm() {
     const { classes } = useStyles();
     
     const router = useRouter()
     const [data, setData] = useState({
          name: '',
          firstname: '',
          email: '',
          password: '',
          phone: '',
          number: '',
          street: '',
          city: '',
          postcode: '',
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
          router.push('/login')
     }
     
     return (
          <>
          <form  onSubmit={registerUser}>
          {/* < LoginForm /> */}
          <Title className={classes.title} order={4}>Informations de connexion</Title>
          <TextInput
          placeholder="Email"
          area-label="Email"
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
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <Title className={classes.centered} order={4}>Informations personnelles</Title>
          
          <TextInput
          placeholder="Nom"
          area-label="Nom"
          size="md"
          value={data.name}
          onChange={(e) => {setData({...data, name: e.target.value})}}
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "2vh",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Prénom"
          area-label="Prénom"
          size="md"
          value={data.firstname}
          onChange={(e) => {setData({...data, firstname: e.target.value})}}
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "2vh",
               marginBottom: "10px",
          }}}
          />
          <TextInput
          placeholder="Téléphone"
          area-label="Téléphone"
          size="md"
          value={data.phone}
          onChange={(e) => {setData({...data, phone: e.target.value})}}
          
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          
          <Title className={classes.centered} order={4}>Votre adresse postale</Title>
          <TextInput
          placeholder="Numéro"
          area-label="Numéro"
          size="md"
          value={data.number}
          onChange={(e) => {setData({...data, number: e.target.value})}}
          
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
          value={data.street}
          onChange={(e) => {setData({...data, street: e.target.value})}}
          
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
          value={data.postcode}
          onChange={(e) => {setData({...data, postcode: e.target.value})}}
          
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
          value={data.city}
          onChange={(e) => {setData({...data, city: e.target.value})}}
          
          styles={{input: {
               width:"80vw",
               height:"50px",
               marginTop: "10px",
               marginBottom: "10px",
          }}}
          />
          <div className={classes.button}>
          <button  type='submit' >
          Je minscris
          </button>
          </div>
          </form>
          
          </>
          )
     }
     