import i18next from 'i18next';
import styled from 'styled-components';

const DivEl = styled.div`
display:flex; 
`;
const Button = styled.button`
border:none;
outline:none;
margin:0 6px;
background:transparent;
`
const Img = styled.img`
width:20px;
height:20px;

`
const Languages = () => {
    
    return ( 
         <DivEl  >
            <Button  type="button" onClick={() => {
                    i18next.changeLanguage('ru');
                  }}> <Img src="/img/ru.png"  alt="ru flag" />
            </Button>  
            <Button  type="button" onClick={() => {
                   i18next.changeLanguage('en');
                    }}> <Img src="/img/en.png" alt="en flag" />
            </Button> 
            <Button  type="button" onClick={() => {
                    i18next.changeLanguage('uz');
                  }}> <Img src="/img/uz.png" alt="uz flag "/>
            </Button> 
            
          </DivEl> 
    );
}
export default Languages;