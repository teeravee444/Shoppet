import React, { useState } from "react";
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Stepper/Stepper.home";
//import MUI
import countries from "../config/countries";
import AutoComplete from '../components/inp/AutoComplete'
import AutoComplete1 from '../components/inp/AutoComplete1'
import {Box,Paper,Grid} from '@mui/material';

import Imagescrool from "../components/imgscrool/Imagescrool";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   alignItems: 'center',
//   textAlign: 'center',
  
  
// }));
const Home = () => {
    const [data, setData] = useState()

  return (
    // <div>
    //   {/* <h1>Home Page</h1> */}
    //   {/* <p>Country: {data}</p>
    //   <AutoComplete data={countries} val={data} changeVal={()=>setData()} />
    //   <AutoComplete1 /> */}
    //   {/* <Box sx={{ flexGrow: 1 }} >
    //   <Grid container spacing={3}>
    //     <Grid item xs= {5}>
    //       <Item>

    //       </Item>
    //     </Grid>
        
    //     <Grid item xs = {7}>
    //       <Item>
    //       <Imagescrool />
    //       </Item>
    //     </Grid>
    //   </Grid>
    // </Box> */}

    

    // </div>
    <Layout Theme={Theme}>
      <DivSlide>
        <SwipeableTextMobileStepper />
      </DivSlide>
      <DivSlide>
        <Imagescrool />
      </DivSlide>
    </Layout>
  );
};

const Layout = styled.div `
margin: 20px 20px 10px 20px;
display: flex;
justify-content: space-between;
border: ${props => props.Theme.border};
`
const DivSlide = styled.ul `
margin-right: 10px;
`

export default Home;
