import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const DivEl = styled.div`
display:flex;
// flex-direction: column;
`;
const DivButton = styled.div`
background:red;
`

const Languages = () => {
  
    const { t } = useTranslation();
    return ( 
         <DivEl>
                <DivButton>
                  <button type="button" onClick={() => {
                    i18next.changeLanguage('ru');
                  }}>{t('ru')}</button>
                  </DivButton>
                  <DivButton> 
                         <button type="button" onClick={() => {
                             i18next.changeLanguage('en');
                              }}>{t('en')}</button> </DivButton>
              <DivButton>
            <button type="button" onClick={() => {
                    i18next.changeLanguage('uz');
                  }}>{t('uz')}</button> </DivButton>
          </DivEl> 
        
    );

}

export default Languages;