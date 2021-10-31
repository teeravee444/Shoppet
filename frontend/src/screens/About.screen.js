
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Imgpath/ImgP";
import Footer from '../components/Footer';



const About = () => {
    

  return (
    <ContainerDiv Theme={Theme}>
        <h1>มีทุกอย่างที่ต้องการ</h1>
    <p>ไม่ว่าจะเป็นจะเป้นเครื่องใช้ไฟฟ้าหรืออุปกาณ์ทำสวน</p>
    <p>รวมไปถึกเครื่องมืออิเล็กทรอนิกส์ต่างๆ</p>
    <Layout>
      <DivSlide>
        <SwipeableTextMobileStepper />
      </DivSlide>
    </Layout>
    <h1>คำตอบของคนอยากเริ่มขายของออนไลน์แบบง่ายๆ</h1>
     <p>ใครที่มีความฝันอยากเริ่มธุรกิจออนไลน์ แต่ไม่รู้จะเริ่มอย่างไรดี บอกเลยว่าที่ Shopee เรามีทางออกให้สำหรับคุณ Shopee คือแพลต์ฟอร์มขายของออนไลน์ที่มีประสิทธิภาพระบบการขายที่ยอดเยี่ยม พร้อมทีมงานคอยซัพพอร์ท คุณสามารถเปิดร้านขายของออนไลน์ใน Shopee ได้อย่างง่ายดาย รวดเร็ว และไม่มีค่าใช้จ่าย การเปิดร้านขายของออนไลน์ใน Shopee จะช่วยเพิ่มโอกาสในการขาย ด้วยจำนวนผู้ใช้งานทั่วประเทศ และประเภทสินค้าที่หลากหลายทุกหมวดหมู่ ไม่ว่าคุณอยากจะขายสินค้าชนิดใดออนไลน์ ก็สามารถเปิดร้านใน Shopee ได้เลย</p>
     <img src="components/Imgpath/Shoppet.jpg"  />
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
