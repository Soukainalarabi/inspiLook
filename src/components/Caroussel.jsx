import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils'
import TextAnimation from './TextAnimation';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: 'https://static.e-stradivarius.net/5/cms/assets/uploads/2400Bano_17.jpg?imwidth=1500&impolicy=stradivarius-itxmediumhigh&imformat=chrome&ts=20240611150208',
  },
  {
    label: 'Bird',
    imgPath: 'https://static.e-stradivarius.net/5/cms/assets/uploads/2400Str_194.jpg?imwidth=1500&impolicy=stradivarius-itxmediumhigh&imformat=chrome&ts=20240611024705',
  },
  {
    label: 'Bali, Indonesia',
    imgPath: 'https://static.e-stradivarius.net/5/cms/assets/uploads/2400NewIn_289.jpg?imwidth=1500&impolicy=stradivarius-itxmediumhigh&imformat=chrome&ts=20240611150208',
  },
  {
    label: 'Goč, Serbia',
    imgPath: 'https://static.e-stradivarius.net/5/cms/assets/uploads/2400CasualSport_49.jpg?imwidth=1500&impolicy=stradivarius-itxmediumhigh&imformat=chrome&ts=20240611150208',
  },
];

export default function Caroussel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
   
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        
        {images.map((step, index) => (
          <div key={step.label} >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100vh',
                  display: 'block',
                  objectFit:"cover",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
            
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
     
      <TextAnimation/>
    </Box>
  );
}