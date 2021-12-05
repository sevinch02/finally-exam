import React from 'react';
import styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Card = styled.div`
Width:408px;
background: ${(props) => props.theme.MainHeaderBg};
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 20px;
padding:20px 44px;
margin-bottom:80px;
`
const Checkbox = styled.input`
`

const Nightdiv = styled.div`
border-bottom: 1px solid #3B3E44;
padding-bottom: 17px;
`
const Night = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props)=> props.theme.Datalabel};
`
const Sale = styled.span`
Width:80px;
Height:30px;
background: #145CE6;
border-radius: 25px;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
padding:6px 10px;
margin-left:57px;
`
const Span = styled.span`
color: #B1B5C4;
font-family: DM Sans;
font-weight: 400;
font-size: 18px;
line-height: 23px;
`
const Row = styled.div`
display:flex;
justify-content:space-between;
`

const DateLabel = styled.label`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: ${(props)=> props.theme.Datalabel};

`
const DataDiv = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
`

const DateInput = styled.input`
background: ${(props)=> props.theme.priceRowbg};
color: ${(props) => props.theme.PriceColor};
border-radius: 10px;
Width:152px;
Height:45px;
border:none;
outline:none;
`
const Select = styled.select`
Width :316px;
Height:44px;
padding:12px 10px,
Width:316px;
Height:44px;
background: ${(props)=> props.theme.priceRowbg};
color: ${(props) => props.theme.PriceColor};
border-radius: 10px;
border:none;
outline:none;
`
const Extra = styled.div`
margin:20px 0;

`
const ExtraTitle = styled.h4`
color: ${(props)=> props.theme.Datalabel};
`
const ExtraItem = styled.div`

`
const ExtraItemSpan = styled.span`

`
const PropertyItemLabel = styled.label`
color: ${(props) => props.theme.PriceColor};
`
const Price = styled.div`
margin:12px 0;
`
const PriceRow = styled.div`
display:flex;
justify-content:space-between;
Width:316px;
Height:152px;
background: ${(props)=> props.theme.priceRowbg};
border-radius: 10px;
padding:10px 20px;
`
const Li = styled.li`
list-style-type:none; 
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.PriceColor};
margin-bottom:14px;
`
const UL = styled.ul`
list-style-type:none; 
padding:0;
`
const BookBtn = styled.button`
Width:316px;
Height:48px;
background: #145CE6;
color: #FFFFFF;
font-family: DM Sans;
font-weight: 700;
font-size: 20px;
line-height: 26px;
border:none;
outline:none;
border-radius: 12px;
padding:11px 50px;
`
const Total = styled.p`

`
const TotalSpan = styled.span`
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 27px;
text-align: right;
`
const FormEl = styled.form`
`

const ForOneNight = () => {
    let navigate = useNavigate();
    
    const handleForm = (e) =>{
        e.preventDefault();
    };
    return (
        <Card>
            <Nightdiv>
               <Night>$142</Night> <Span>/night $184</Span>  
               <Sale>20% OFF</Sale>
            </Nightdiv>
            <FormEl  onSubmit={handleForm} >
                <Row> 
                    <DataDiv>
                        <DateLabel htmlFor="">Check-In</DateLabel>
                        <DateInput type="date"  /> 
                    </DataDiv>
                    <DataDiv>
                        <DateLabel htmlFor="">Check-Out</DateLabel>
                        <DateInput type="date"  />
                    </DataDiv>
                </Row>
                <DataDiv>
                    <DateLabel htmlFor="">Guest</DateLabel>
                    <Select name="" value="2 Adults, 1 Children">
                        <option value="">2 Adults, 1 Children</option>
                    </Select>
                </DataDiv>
                <div>
                <Extra>
                 <ExtraTitle>Extra Features</ExtraTitle>
                    <ExtraItem> 
                        <Checkbox type="checkbox" />
                    <ExtraItemSpan> <PropertyItemLabel>Allow to bring pet</PropertyItemLabel> <>$13</> </ExtraItemSpan>  
                    </ExtraItem>
                    <ExtraItem> 
                        <Checkbox type="checkbox" />
                    <ExtraItemSpan> <PropertyItemLabel>Breakfast a day per person</PropertyItemLabel> <>$$10</> </ExtraItemSpan>  
                    </ExtraItem>
                     <ExtraItem> 
                    <Checkbox type="checkbox" />
                 <ExtraItemSpan> <PropertyItemLabel>Parking a day</PropertyItemLabel> <>$6</> </ExtraItemSpan>  
                </ExtraItem>
                <ExtraItem> 
                    <Checkbox type="checkbox" />
                 <ExtraItemSpan> <PropertyItemLabel>Extra pillow</PropertyItemLabel> <>Free</> </ExtraItemSpan>  
                </ExtraItem>
                    
                </Extra> 

                <Price>
                  <strong>Price</strong>
                 <div>
                 <PriceRow>
                 <UL> 
                     <Li>1 Nights</Li>  
                     <Li>Discount 20%</Li>  
                     <Li>Breakfast a day per person</Li> 
                     <Li>Service fee</Li>
                 </UL>
                    <UL>
                        <Li>$500</Li>
                        <Li>$200</Li>    
                        <Li>$10</Li>
                        <Li>$5</Li>
                    </UL>
                </PriceRow> 
                <Total>Total paymet <TotalSpan> $300</TotalSpan>  </Total>
               
                 </div>    
                 <BookBtn onClick={() => navigate(`/paymet`)} >Book Now</BookBtn>
                 <span>You will not get charged yet</span>
                </Price>
                </div>
            </FormEl>
            
        </Card>
    )
}

export default ForOneNight;
