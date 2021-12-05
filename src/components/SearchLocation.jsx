import React from 'react';
import styled from 'styled-components';
import {BiSearchAlt2} from 'react-icons/bi'
import {useTranslation} from 'react-i18next';
import RangeTest from './RangeTest';



const AsideCard = styled.aside`
Width :290px
Height :1325px
background:${(props) => props.theme.searchLocationBg};
margin-left:20px;
`
/// search 
const Searchbar = styled.div`
position:relative;
background: ${(props)=> props.theme.MainHeaderBg};
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 10px;
padding:14px 20px;
Width :290px;
Height :53px;
margin-top:13px;
`
const SearchBarInput = styled.input`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
// color: #B1B5C4;
border:none;
outline:none;
width:100%;
background:transparent;
`
const SearchBarIcon = styled.span`
position:absolute;
top:12px;
right:25px;
`

const SeeMore = styled.p`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #145CE6;
margin-top:15px;
`
// Popular
const Popular = styled.div`
margin-top:30px;
`
const PopularTitle = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: ${(props) => props.theme.featuredTitle};
`
const PopularItem = styled.div`
display:flex;
align-items:center;
margin-bottom:14px;
margin-top:16px;
`
const Checkbox = styled.input`
margin-right:12px;
`
const PopularItemSpan = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;  
color: ${(props) => props.theme.popularItem};`


///
const PriceRange = styled.div`
`
// Property
const PropertyItem = styled.div`
display: flex;
justify-content:space-between;
width: 100%;
`
const PropertyItemLabel = styled.label`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.popularItem};
`
const PropertyItemSpan = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #84878B;
` 

const SearchLocation = () => {
    const { t } = useTranslation();
    return (
        <AsideCard>
         <> 
            <PopularTitle>{t("Aside")}</PopularTitle>
             <Searchbar>
                <SearchBarInput type="text" placeholder="Search location or property" />
                  <SearchBarIcon> <BiSearchAlt2/> </SearchBarIcon> 
             </Searchbar> 
               <Popular>
                    <PopularTitle>{t("Popular_Filters")}</PopularTitle>
                    <PopularItem >
                        <Checkbox type="checkbox"/>
                        <PopularItemSpan>{t("Hotels")}</PopularItemSpan>  
                    </PopularItem>  
                    <PopularItem>
                        <Checkbox type="checkbox"/>
                        <PopularItemSpan>{t("Breakfast_and_Dinner")}</PopularItemSpan>  
                    </PopularItem>  
                    <PopularItem>
                        <Checkbox type="checkbox"/>
                        <PopularItemSpan>{t("Free_Cancellation")}</PopularItemSpan>  
                    </PopularItem>  
                    <PopularItem>
                        <Checkbox type="checkbox"/>
                        <PopularItemSpan>{t("No_prepayment")}</PopularItemSpan>  
                    </PopularItem>  
                    <SeeMore>See more </SeeMore> 
             </Popular>

             <PriceRange>
                 <PopularTitle>{t("Price_Range")}</PopularTitle>
                 <RangeTest/>
             </PriceRange>

             <Popular>
                 <PopularTitle>{t("Property_Type")}</PopularTitle>
                <PopularItem> 
                    <Checkbox type="checkbox" />
                 <PropertyItem> <PropertyItemLabel>{t("Hotels")}</PropertyItemLabel> <PropertyItemSpan>108</PropertyItemSpan> </PropertyItem>  
                </PopularItem>
                    <PopularItem> 
                        <Checkbox type="checkbox" /> 
                        <PropertyItem> <PropertyItemLabel>{t("Apertments")}</PropertyItemLabel> <PropertyItemSpan>141</PropertyItemSpan> </PropertyItem>  
                    </PopularItem>
                  <PopularItem> 
                    <Checkbox type="checkbox" />
                    <PropertyItem>
                       <PropertyItemLabel>{t("Resort")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                     </PropertyItem>  
                  </PopularItem>
              <SeeMore>See more </SeeMore> 
             </Popular> 
             <Popular>
                 <PopularTitle>{t("Your_budget")}</PopularTitle>
                 <PopularItem >
                    <Checkbox type="checkbox"/>
                    <PopularItemSpan>Less than $75</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem >
                    <Checkbox type="checkbox"/>
                    <PopularItemSpan>$75 to 125</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem >
                    <Checkbox type="checkbox"/>
                    <PopularItemSpan>$125 to 200</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem >
                    <Checkbox type="checkbox"/>
                    <PopularItemSpan>$200 to $300</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem>
                     <Checkbox type="checkbox"/>
                     <PopularItemSpan>Greater than $300</PopularItemSpan>
                 </PopularItem>
             </Popular>

             <div>
                 <PopularTitle>{t("Facilities")}</PopularTitle>
                 <PopularItem>
                    <Checkbox type="checkbox"/>
                    <PropertyItem>
                       <PropertyItemLabel>{t("Outdoor_Sports")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"/>
                    <PropertyItem>
                       <PropertyItemLabel>{t("Berbeque")}</PropertyItemLabel> 
                       <PropertyItemSpan>141</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"/>
                    <PropertyItem>
                       <PropertyItemLabel>{t("Living_Room")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"/>
                    <PropertyItem>
                       <PropertyItemLabel>{t("Room_Service")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"/>
                    <PropertyItem>
                       <PropertyItemLabel>{t("Swimming_Pool")}</PropertyItemLabel> 
                       <PropertyItemSpan>141</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"/>
                    <PropertyItem>
                       <PropertyItemLabel>{t("Spa")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <SeeMore>See more </SeeMore> 
             </div>
             </>
        </AsideCard>
    );
}

export default SearchLocation;
