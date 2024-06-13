import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  backgroundColor: 'red',
  height: 40,
  paddingTop: '20px',
  overflow: 'hidden',
  position: 'relative',
  whiteSpace: 'nowrap',
});

export default function TextAnimation  ()  {
  const texts = [
    'DÉCOUVREZ NOS NOUVEAUX ARTICLES! Explorez notre dernière collection et profitez de 10% de réduction sur votre prochain achat en utilisant le code : PROMO10. DÉCOUVREZ NOS NOUVEAUX ARTICLES! Explorez notre dernière collection et profitez de 10% de réduction sur votre prochain achat en utilisant le code : PROMO10. DÉCOUVREZ NOS NOUVEAUX ARTICLES! Explorez notre dernière collection et profitez de 10% de réduction sur votre prochain achat en utilisant le code : PROMO10. DÉCOUVREZ NOS NOUVEAUX ARTICLES! Explorez notre dernière collection et profitez de 10% de réduction sur votre prochain achat en utilisant le code : PROMO10.',
  ];

  const combinedText = texts.join(' '); // Combine les deux lignes de texte

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const textWidth = combinedText.length * 20; // Ajuster la vitesse de l'animation
    const timeout = setTimeout(() => {
      setOffset((prevOffset) =>
        prevOffset > -textWidth ? prevOffset - 1 : window.innerWidth
      );
    }, 30); // Ajuster la vitesse de l'animation

    return () => clearTimeout(timeout);
  }, [offset, combinedText]);

  return (
    <StyledBox sx={{marginTop:-8}}>
      <Typography
        variant="h5"
        sx={{
          position: 'absolute',
          left: offset,
          transition: 'left 0.03s linear', // Ajuster la vitesse de l'animation
          zIndex: 1
        }}
      >
        {combinedText}
      </Typography>
    </StyledBox>
  );
}

