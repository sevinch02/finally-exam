import React from 'react';
import { Link } from 'react-router-dom';
import {Card,Checkbox,Nightdiv,Night,Sale,Span, Row,DateLabel,DataDiv} from './style';
import {DateInput,Select,Extra,ExtraTitle,ExtraItem,ExtraItemSpan} from './style';
import {FeaturesPrice,PropertyItemLabel,Price,PriceRow,Li,UL,BookBtn,Total} from './style';
import {TotalStrong,FormEl,ChargedSpan} from './style';


const ForOneNight = (props) => {

      const handleForm = (e) =>{
        console.log(e.target.value)
    };
    return (
        <Card>
            <Nightdiv>
               <Night>$142</Night> <Span>/night $184</Span>  
               <Sale>20% OFF</Sale>
            </Nightdiv>
            <FormEl onChange={handleForm}>  
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
                    <Select>
                        <option value="">2 Adults, 1 Children</option>
                    </Select>
                </DataDiv>
                <div>
                <Extra>
                 <ExtraTitle>Extra Features</ExtraTitle>
                    <ExtraItem> 
                      
                    <ExtraItemSpan>  
                         <Checkbox type="checkbox" />
                         <PropertyItemLabel>Allow to bring pet</PropertyItemLabel>
                     </ExtraItemSpan> 
                       <FeaturesPrice>$13</FeaturesPrice>
                    </ExtraItem>
                    <ExtraItem> 
                        
                    <ExtraItemSpan>
                       <Checkbox type="checkbox" />
                       <PropertyItemLabel>Breakfast a day per person</PropertyItemLabel>
                     </ExtraItemSpan>  
                      <FeaturesPrice>$10</FeaturesPrice>
                    </ExtraItem>
                     <ExtraItem> 
                    
                    <ExtraItemSpan>
                     <Checkbox type="checkbox" />
                     <PropertyItemLabel>Parking a day</PropertyItemLabel> 
                     </ExtraItemSpan>
                    <FeaturesPrice>$6</FeaturesPrice>
                </ExtraItem>
                <ExtraItem> 
                    
                 <ExtraItemSpan> 
                   <Checkbox type="checkbox" /> 
                   <PropertyItemLabel>Extra pillow</PropertyItemLabel>  
                 </ExtraItemSpan>
                 <FeaturesPrice>Free</FeaturesPrice>
                </ExtraItem>
                    
                </Extra> 

                <Price>
                  <ExtraTitle>Price</ExtraTitle>
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
                <Total> <ExtraTitle>Total paymet</ExtraTitle>  <TotalStrong> $300</TotalStrong>  </Total>
                 </div>    
                 <Link to={`/payment/${props.hotelId}`}><BookBtn>Book Now</BookBtn>  </Link> 
                 <ChargedSpan>You will not get charged yet</ChargedSpan>
                </Price>
                </div>
            </FormEl>
            
        </Card>
    );
}
export default ForOneNight;
