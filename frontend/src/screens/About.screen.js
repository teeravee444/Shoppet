
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Imgpath/ImgP";
import Footer from '../components/Footer';




const About = () => {
    

  return (
    <ContainerDiv Theme={Theme}>
        <h1>เรามีทุกอย่างที่คุณต้องการ</h1>
    <p>ไม่ว่าจะเป็นจะเป็นผักหรือผลไม้</p>
    <p>เนื้อหมู-เนื้อไก่-เนื้อวัว เราก็มึ</p>
    <Layout>
      <DivSlide>
        <SwipeableTextMobileStepper />
      </DivSlide>
    </Layout>
    <h1>สินค้าเรามีมากมายหลายอย่าง</h1>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1n7Yv1NeMMR_lIorRQiUxy9vpl-1kJWIKIjIcq5-I8cnhJoPrZM-YFgRG-UhwSDj1lQ&usqp=CAU"  />
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzFxUuPFgYGFX_tKlA706fNg4YKOECes6AUjLK4b0yvEMkS2XgocSyuww0JFQMc0Q1pg&usqp=CAU"  />
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3Acyjq18kojvBT1IB4BqVRRIw3ND-ZwLEA&usqp=CAU"  />
     <img src="https://lisergia.org/wp-content/uploads/2021/01/image.1540999177218.jpg"  />
     <p>ซื้อง่ายส่งของถึงมือท่าน</p>
    <Footer />
    </ContainerDiv>

  );
};

const Layout = styled.div `
margin: 20px 20px 10px 20px;
display: flex;
justify-content: center;

`
const DivSlide = styled.ul `
margin-right: 10px;
justify-content: center;
`

const ContainerDiv =styled.div ` 
margin: 20px 20px 10px 10px;
justify-content: flex-end;
/* border-radius: ${props => props.Theme.border}; */
border-radius: 50px;
`

export default About;
