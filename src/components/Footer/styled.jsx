import styled from 'styled-components';

export const FooterPage = styled.div`
position:relative;
background: ${(props) => props.theme.footerBg};
padding-bottom:40px
`
export const Row = styled.div`
display:flex;
justify-content: space-between;
`
export const FooterLogo = styled.div`
Width: 254px;
Height:192px;
margin: 250px 0 0 0;
`
export const FooterLogoText = styled.p`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${(props)=> props.theme.footerLogo};
`
export const FooterItem = styled.ul`
list-style-type:none;
margin: 250px 0 0 0;
`
export const FooterItemSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props)=> props.theme.footerLogo};
`
export const FooterItemLinks = styled.li`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 34px;
color: #84878B;`

export const FooterLogoSpan = styled.span`
font-family: Open Sans;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color: ${(props) => props.theme.footerLogo};
margin-left: 10px;
margin-bottom:25px;
text-decoration:none;
`
export const FooterLogoImg = styled.div`
margin-bottom:25px;
color:${(props)=> props.theme.footerLogo};
`