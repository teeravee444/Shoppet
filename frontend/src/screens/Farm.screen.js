import React from "react";

// component

  import Styled from 'styled-components';

// MUI 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Footer from "../components/Footer";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Cartcomponent from "../components/Cart/Cartcomponent";

// MUI layout 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
   
  }));
const Farm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
        <Grid item xs={1.5}>
          
          
          <FormControl component="fieldset">
            
      <FormLabel component="legend">หมวดหมู่</FormLabel>
      <RadioGroup
        aria-label="category"
        defaultValue="female"
        name="radio-buttons-group"
      >
        
        <FormControlLabel value="female" control={<Radio />} label="ผัก" />
        <FormControlLabel value="male" control={<Radio />} label="ผลไม้" />
        <FormControlLabel value="other" control={<Radio />} label="เนื้อสัตว์" />
        <FormControlLabel value="ae" control={<Radio />} label="เนื้อแช่แข็ง" />
        <FormControlLabel value="za" control={<Radio />} label="เบเกอรี่" />
      </RadioGroup>
    </FormControl>
          
        </Grid>
        <Grid item xs={10.5}>
          <Cartcomponent />
        </Grid>
        </Grid>
        <Footer />
        </Box>
        
  );
};


// Styled component  
const Layout = Styled.div `
margin: 20px 20px 10px 20px;
display: flex;
justify-content: space-between;

`
const DivSlide = Styled.ul `
margin-right: 10px;
`

export default Farm;
