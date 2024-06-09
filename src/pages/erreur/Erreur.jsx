import React from 'react'
import {Stack} from '@mui/material'
import page404 from '../../assets/404.png'

export default function Erreur() {
  return (
    <>
        <Stack>
      <img
        src={page404}
        alt="error-page"
        loading="lazy"
      />
        </Stack>
     
    </>
  )
}
