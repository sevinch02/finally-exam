import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi'
import {useTranslation} from 'react-i18next';
import RangeTest from './RangeTest';
import {AsideCard,Searchbar,SearchBarInput,SearchBarIcon,SeeMore,} from './styled';
import {Popular,PopularTitle,PopularItem,Checkbox,PopularItemSpan,PriceRange} from './styled';
import {PropertyItem,PropertyItemLabel,PropertyItemSpan} from './styled';

const SearchLocation = () => {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
    console.log(e.target.checked,e.target.defaultValue);
}
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
                    <PopularItem>
                        <Checkbox 
                          type="checkbox"
                          defaultChecked = {false}
                          value="hotels"
                          onChange={handleSubmit}
                           />
                        <PopularItemSpan> {t("Hotels")}</PopularItemSpan>  
                    </PopularItem>  
                    <PopularItem>
                        <Checkbox type="checkbox" 
                         defaultChecked = {false}
                         value="Breakfast and Dinner"
                         onChange={handleSubmit}
                        />
                        <PopularItemSpan >{t("Breakfast_and_Dinner")}</PopularItemSpan>  
                       
                    </PopularItem>  
                    <PopularItem>
                        <Checkbox type="checkbox"
                          defaultChecked = {false}
                          value="Free Cancellation"
                          onChange={handleSubmit}
                        />
                        <PopularItemSpan>{t("Free_Cancellation")}</PopularItemSpan>  
                    </PopularItem>  
                    <PopularItem>
                        <Checkbox type="checkbox"
                        defaultChecked = {false}
                         value="No prepayment"
                         onChange={handleSubmit}
                        />
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
                    <Checkbox type="checkbox" 
                      defaultChecked = {false}
                      value="Hotels"
                      onChange={handleSubmit}
                    />
                 <PropertyItem> <PropertyItemLabel>{t("Hotels")}</PropertyItemLabel> <PropertyItemSpan>108</PropertyItemSpan> </PropertyItem>  
                </PopularItem>
                    <PopularItem> 
                        <Checkbox type="checkbox"
                           defaultChecked = {false}
                           value="Apertments"
                           onChange={handleSubmit}
                        /> 
                        <PropertyItem> <PropertyItemLabel>{t("Apertments")}</PropertyItemLabel> <PropertyItemSpan>141</PropertyItemSpan> </PropertyItem>  
                    </PopularItem>
                  <PopularItem> 
                    <Checkbox type="checkbox"
                       defaultChecked = {false}
                       value="Resort"
                       onChange={handleSubmit}
                    />
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
                    <Checkbox type="checkbox"
                      defaultChecked = {false}
                      value="Less than $75"
                      onChange={handleSubmit}
                    />
                    <PopularItemSpan>Less than $75</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem >
                    <Checkbox type="checkbox"
                     defaultChecked = {false}
                     value="$75 to 125"
                     onChange={handleSubmit}
                    />
                    <PopularItemSpan>$75 to 125</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem >
                    <Checkbox type="checkbox"
                       defaultChecked = {false}
                       value="$125 to 200"
                       onChange={handleSubmit}
                    />
                    <PopularItemSpan>$125 to 200</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem >
                    <Checkbox type="checkbox"
                     defaultChecked = {false}
                     value="$200 to $300"
                     onChange={handleSubmit}
                    />
                    <PopularItemSpan>$200 to $300</PopularItemSpan>  
                 </PopularItem> 
                 <PopularItem>
                     <Checkbox type="checkbox"
                      defaultChecked = {false}
                      value="Greater than $300"
                      onChange={handleSubmit}
                     />
                     <PopularItemSpan>Greater than $300</PopularItemSpan>
                 </PopularItem>
             </Popular>

             <div>
                 <PopularTitle>{t("Facilities")}</PopularTitle>
                 <PopularItem>
                    <Checkbox type="checkbox"
                     defaultChecked = {false}
                     value="Outdoor Sports"
                     onChange={handleSubmit}
                    />
                    <PropertyItem>
                       <PropertyItemLabel>{t("Outdoor_Sports")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"
                      defaultChecked = {false}
                      value="Berbeque"
                      onChange={handleSubmit}
                    />
                    <PropertyItem>
                       <PropertyItemLabel>{t("Berbeque")}</PropertyItemLabel> 
                       <PropertyItemSpan>141</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"
                      defaultChecked = {false}
                      value="Living Room"
                      onChange={handleSubmit}
                    />
                    <PropertyItem>
                       <PropertyItemLabel>{t("Living_Room")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"
                     defaultChecked = {false}
                     value="Room Service"
                     onChange={handleSubmit}
                    />
                    <PropertyItem>
                       <PropertyItemLabel>{t("Room_Service")}</PropertyItemLabel> 
                       <PropertyItemSpan>108</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"
                     defaultChecked = {false}
                     value="Swimming Pool"
                     onChange={handleSubmit}
                    />
                    <PropertyItem>
                       <PropertyItemLabel>{t("Swimming_Pool")}</PropertyItemLabel> 
                       <PropertyItemSpan>141</PropertyItemSpan> 
                    </PropertyItem>  
                  </PopularItem>
                  <PopularItem>
                    <Checkbox type="checkbox"
                    defaultChecked = {false}
                    value="Spa"
                    onChange={handleSubmit}
                    />
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
