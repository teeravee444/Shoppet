
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Imgpath/ImgP";
import Footer from '../components/Footer';




const About = () => {
    

  return (
    <ContainerDiv Theme={Theme}>
        <h1>เรามีทุกอย่างที่คุณต้องการ</h1>
    <p>ไม่ว่าจะเป็นจะเป็นเครื่องใช้ไฟฟ้าหรืออุปกาณ์ทำสวนหรือจะเป็นของใช้ภายในบ้าน</p>
    <p>รวมไปถึกเครื่องมืออิเล็กทรอนิกส์ต่างๆ</p>
    <Layout>
      <DivSlide>
        <SwipeableTextMobileStepper />
      </DivSlide>
    </Layout>
    <h1>สินค้าเรามีมากมายหลายอย่าง</h1>
     <img src="https://sites.google.com/site/thurkickhaysinkhaxxnlin/_/rsrc/1502182450557/affiliate-marketing/6-hetuphl-thi-khwr-tha-affiliate-marketing/shopping.jpg"  />
     <p>ซื้อง่ายส่งของถึงหน้าบ้านท่าน</p>
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
