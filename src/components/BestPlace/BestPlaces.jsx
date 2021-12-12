import React from 'react'
import { t } from 'i18next';
import {BestPlacesContent,BestTitle,BestText} from './Styled';
import {CardImg,CardImgImg,CardTitle,CardSpan,Row} from './Styled'


const BestPlaces = () => {
 

      return (
        <BestPlacesContent>
          <div className="container">
                <BestTitle>{t("Search_best_place")} </BestTitle>
                <BestText>{t("Search_best_places_text")}</BestText>
                <Row>
                        <CardImg>
                            <CardImgImg src="/img/best-search.jpg" alt="best-search"/>  
                            <CardTitle> Batu, East Java </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/kuta.jpg" alt="best-search"/>  
                            <CardTitle> Kuta </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/Surabaya.jpg" alt="best-search"/>  
                            <CardTitle> Surabaya, East Java </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/malang.jpg" alt="best-search"/>  
                            <CardTitle> Malang, East Java </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/malang.jpg" alt="best-search"/>  
                            <CardTitle> Dieng, Central Java </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/Nusa.jpg" alt="best-search"/>  
                            <CardTitle> Nusa Dua, Lombok</CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/Bandung.jpg" alt="best-search"/>  
                            <CardTitle> Bandung, West Java </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                      <CardImg>
                            <CardImgImg src="/img/best-search.jpg" alt="best-search"/>  
                            <CardTitle>Wakatobi, Sumatera </CardTitle>               
                            <CardSpan>86 Destinations</CardSpan>
                      </CardImg>
                </Row>
          </div>
        </BestPlacesContent>
  );
}
export default BestPlaces;
