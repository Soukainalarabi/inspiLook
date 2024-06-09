import React,{useEffect} from 'react'
import { useForm } from "react-hook-form"
import { Stack, Typography, Box, TextField, Button } from '@mui/material'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Inscription() {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("utilisateur")){
            navigate("/")
        }
    })   
     const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        // if(!data.nomUtilisateur ||!data.mailUtilisateur||!data.motDePasseUtilisateur||!data.motDePasseConfirmationUtilisateur){
        //     toast.error("veuillez remplir le formulaire")

        // }
        console.log(data.nomUtilisateur)
        if (data.motDePasseConfirmationUtilisateur !== data.motDePasseUtilisateur) {
            toast.error("Veuillez vérifier votre mot de passe")

        } else {
            axios.get(`http://localhost:3000/utilisateurs?mailUtilisateur=${data.mailUtilisateur}`).then((res) => {
                if (res.data.length > 0) {
                    toast.error("un compte existe déja avec cette adresse mail")

                }else{
                    axios.post("http://localhost:3000/utilisateurs", data).then((res) => {
                        console.log(res)
                        toast.success('inscription réussie!');
                        navigate("/connexion")
            
                    }).catch((err) => {
                        console.log(err)
                        toast.error("Une erreur est survenue")
            
                    })
                }
            }
            )
        }

        


    }
    return (




        <Stack alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"} backgroundColor="aliceblue">
            <Box width={500} sx={{ backgroundColor: "#fff", padding: 3, borderRadius: 5, }}>
                <Typography variant="h4" textAlign={"center"} >Inscription</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 20, }}>
                    <Stack flexDirection={"column"} gap={2} alignItems={"center"}

                    >
                        <TextField id="outlined-basic" label="Veuillez entrer votre nom"
                            variant="outlined" fullWidth type='text'{...register("nomUtilisateur", {
                                required: "Veuillez saisir un nom",
                                minLength: { value: 5, message: "Veuillez saisir un nom de plus de 5 caractères" },
                                pattern: /^[A-Za-z]+$/i,
                            })} />
                        <TextField id="outlined-basic" label="Veuillez entrer votre mail"
                            variant="outlined" type='email' fullWidth
                            {...register("mailUtilisateur",
                                {
                                    required: "Veuillez saisir un mail",
                                    pattern: "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}",
                                })} />
                        <TextField id="outlined-basic" label="Mot de passe"
                            variant="outlined" fullWidth type='password' {...register("motDePasseUtilisateur", { required: "Veuillez saisir un mot de passe", minLength: { value: 6, message: "Veuillez saisir un mot de passe de plus de 6 caractères" } })}                             
                            />
                        <TextField id="outlined-basic" label="Confirmer votre mot de passe"
                            variant="outlined" fullWidth type='password' {...register("motDePasseConfirmationUtilisateur", { required: "Veuillez saisir un mot de passe", minLength: { value: 6, message: "Veuillez confirmer votre mot de passe de plus de 6 caractères" } })} />

                        <Button variant="contained" sx={{ marginTop: "20px", height: "50px" }} type='submit' >Inscription</Button>
                    </Stack>

                </form>
            </Box>
        </Stack>
    )
}
