import { Stack, Typography, Box, TextField, Button} from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Connexion() {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("utilisateur")){
            navigate("/")
        }
    })
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    const onSubmit = (data) => {console.log(data)
        axios.get(`http://localhost:3000/utilisateurs?mailUtilisateur=${data.mailUtilisateur}&motDePasseUtilisateur=${data.motDePasseUtilisateur}`).then((res)=>{
            if(res.data.length>0){
                localStorage.setItem("utilisateur",JSON.stringify(res.data[0]))
                navigate("/")
            }else{
                toast.error("les identifiants sont incorrects")
            }
        })
       
    }
    return (
        <Stack alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"} backgroundColor="aliceblue">
            <Box width={500} sx={{ backgroundColor: "#fff", padding: 3 ,borderRadius:5,}}>
                <Typography variant="h4" textAlign={"center"} >Connexion</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 20, }}>
                    <Stack flexDirection={"column"} gap={2} alignItems={"center"} >
                        <TextField id="outlined-basic" label="Votre mail"
                            variant="outlined" type='email' fullWidth {...register("mailUtilisateur", { required: "Veuillez saisir un mail", minLength: { value: 5, message: "Veuillez saisir votre mail" } })}  />
                        <TextField id="outlined-basic" label="Mot de passe"
                            variant="outlined" fullWidth type='password' {...register("motDePasseUtilisateur", { required: "Veuillez saisir un mot de passe", minLength: { value: 6, message: "Veuillez saisir un mot de passe de plus de 6 caractères" } })} />                       
                    <Button variant="contained"sx={{ marginTop: "20px",height:"50px" }} type='submit' >Connexion</Button>
                    </Stack>
<Typography paddingTop={2}> Voulez-vous créer un compte?{""} <Link to="/inscription">Cliquer ici</Link></Typography>
                </form>
            </Box>
        </Stack>
    )
}
