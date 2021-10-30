
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Stepper/Stepper.home";
import {CardProduct1,CardProduct2,CardProduct3,CardProduct4,CardProduct5,CardProduct6,CardProduct7,CardProduct8}  from '../components/Card/CardProduct';

//import MUI


import Imagescrool from "../components/imgscrool/Imagescrool";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   alignItems: 'center',
//   textAlign: 'center',
  
  
// }));
const Home = () => {
    

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
    <ContainerDiv Theme={Theme}>

    <Layout>
      <DivSlide>
        <SwipeableTextMobileStepper />
        
      </DivSlide>
      <DivSlide>
        <Imagescrool />
      </DivSlide>
    </Layout>
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
    </ContainerDiv>
  );
};

const Layout = styled.div `
margin: 20px 20px 10px 20px;
display: flex;
justify-content: space-between;

`
const DivSlide = styled.ul `
margin-right: 10px;
`

const ContainerDiv =styled.div ` 
margin: 20px 20px 10px 20px;
justify-content: flex-start;
/* border-radius: ${props => props.Theme.border}; */
border-radius: 10px;
`

export default Home;
