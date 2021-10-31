import React from "react";

// component
import {
    CardProduct1,
    CardProduct2,
    CardProduct3,
    CardProduct4,
    CardProduct5,
    CardProduct6,
    CardProduct7,
    CardProduct8,
  } from "../components/Card/CardProduct";
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

// MUI layout 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Farm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
          <FormControl component="fieldset">
      <FormLabel component="legend">Category</FormLabel>
      <RadioGroup
        aria-label="category"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="ae" control={<Radio />} label="Female" />
        <FormControlLabel value="za" control={<Radio />} label="Male" />
        <FormControlLabel value="xa" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Layout>
      <DivSlide>
      <CardProduct1 />
      </DivSlide>
      <DivSlide>
      <CardProduct2 />
      </DivSlide>
      <DivSlide>
      <CardProduct3 />
      </DivSlide>
      <DivSlide>
      <CardProduct4 />
      </DivSlide>
    </Layout>
    <Layout>
    <DivSlide>
      <CardProduct5 />
      </DivSlide>
      <DivSlide>
      <CardProduct6 />
      </DivSlide>
      <DivSlide>
      <CardProduct7 />
      </DivSlide>
      <DivSlide>
      <CardProduct8 />
      </DivSlide>
    </Layout>
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
