
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Stepper/Stepper.home";


//import MUI


import Imagescrool from "../components/imgscrool/Imagescrool";
import Footer from '../components/Footer';

//Userstate and api 
import React, { useState } from "react";
import ReactDOM from "react-dom";

import API from "../components/Cart/mockAPI";
import { ListedItems } from "../components/Cart/ListedItems";
import { FixedCart } from "../components/Cart/FixedCart";
import { CartDetails } from "../components/Cart/Carddetails";
import { Overlay } from "../components/Cart/Overlay";

import { GlobalStyles, lightGray } from "../components/Cart/GlobalStyles";
import Cartcomponent from '../components/Cart/Cartcomponent';


const Home = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(API);
  const [cartOpen, isCartOpen] = useState(false);

  const addToCart = i => {
    setItems(state =>
      state.map((item, p) => {
        if (i === p) {
          setCart([
            ...cart,
            { name: item.name, price: item.price, quantity: item.quantity }
          ]);
          return { ...item, inCart: true };
        }
        return item;
      })
    );
  };

  const increaseQuantity = {
    inCart: i => {
      setCart(state =>
        state.map((item, o) => {
          if (i === o && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (o === i && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

  const decreaseQuantity = {
    inCart: i => {
      setCart(prevCart =>
        prevCart.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

  const removeFromCart = i => {
    let chosenItem, index;
    index = 0;
    while (index < cart.length) {
      if (index === i) {
        chosenItem = cart[index].name;
        break;
      }
      index++;
    }
    setCart(state => state.filter(item => chosenItem !== item.name));
    setItems(state =>
      state.map(item => {
        if (item.name === chosenItem) {
          return { ...item, inCart: false, quantity: 1 };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

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
    <Cartcomponent />
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
margin: 20px 20px 10px 10px;
justify-content: flex-start;
/* border-radius: ${props => props.Theme.border}; */
border-radius: 10px;
`



export default Home;
