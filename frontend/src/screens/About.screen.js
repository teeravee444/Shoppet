
import styled from 'styled-components';
import Theme from '../config/Theme.json'
import SwipeableTextMobileStepper from "../components/Imgpath/ImgP";
import Footer from '../components/Footer';
import Imagescrool from "../components/imgscrool/Imagescrool";


const About = () => {
    

  return (
    <ContainerDiv Theme={Theme}>
        <h1>มีทุกอย่างที่ต้องการ</h1>
    <p>ไม่ว่าจะเป็นจะเป้นเครื่องใช้ไฟฟ้าหรืออุปกาณ์ทำสวน</p>
    <Layout>
      <DivSlide>
        <SwipeableTextMobileStepper />
      </DivSlide>
    </Layout>
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
