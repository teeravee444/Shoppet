import React from 'react'
import Pagination from '../components/Pagination/Pagination';
import styled from 'styled-components';
import {CardProduct1,CardProduct2,CardProduct3,CardProduct4,CardProduct5,CardProduct6,CardProduct7,CardProduct8}  from '../components/Card/CardProduct';

const Farm = () => {
    return (
        <ContainerDiv>
           <Layout>    
             <DivSlide30>
                 A
             </DivSlide30>
             <Divslide70>
                 <CardProduct1 />
                 <CardProduct2 />
                 <CardProduct3 />
                 <CardProduct4 />
             </Divslide70>
             <Divslide70>
             <CardProduct5 />
                 <CardProduct6 />
                 <CardProduct7 />
                 <CardProduct8 />
             </Divslide70>
           </Layout>
        </ContainerDiv>
    )
}


const ContainerDiv =styled.div ` 
margin: 20px 20px 10px 20px;
justify-content: flex-start;
border-radius: 10px;
`
const Layout = styled.div `
margin: 20px 20px 10px 20px;
display: flex;
justify-content: start;
`
const Divslide70 = styled.ul`
margin-right: 10px;
max-width: 70%;
display: flex;
justify-content: center;
`
const DivSlide30 = styled.ul `
margin-right: 10px;
max-width: 30%;
`
export default Farm
