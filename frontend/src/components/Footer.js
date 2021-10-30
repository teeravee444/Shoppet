import styled from 'styled-components';
import React from 'react'

const Footer = () => {
    return (
        <Footerdiv>
      <FigFooter>
        <p>ศูนย์ช่วยเหลือ</p>
        <p>About</p>
        <p>tel: 090-895-9301</p>
        
      </FigFooter>
      <FigFooter>
        <p>วิธีการชำระเงิน</p>
        
      </FigFooter>
      <FigFooter>
        <p>ติดตามเรา</p>
        
      </FigFooter>
    </Footerdiv>
    )
}

const Footerdiv = styled.footer `
margin-bottom: 0%;
background-color: white;
height: 200px;
display: flex;
justify-content: space-between;



`
const FigFooter = styled.div `
margin: 20px 20px ;

p{
  color:  black;
text-align: center;
font-weight: bold;
font-size: 100%;
:hover{
            background: white;
            
            color: red;
            transition: 1.25s;
        }
}



`
export default Footer
