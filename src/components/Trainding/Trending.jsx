import React , {useState , useEffect} from 'react';
import {AiFillStar} from 'react-icons/ai'
import { t } from 'i18next';
import apiCalls from '../../config/api';
import {TrandingCard,TreandingTitle,Row,Card,Image,CardText,CardTextTitle} from './styled';
import {Span,SpanStrong,Strong,Button,TrendingText} from './styled';
import {Loader} from '../TopTurs/TopTur'

const Trending = () => {
    const [isLoading , setIsLoading] = useState(true);
    const [error,setError] = useState('');
    const [city, setCity] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        const getcities = async () => {
          try {
            const data = await apiCalls.getcities();
            setCity(data);
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
              setError(error.message + 'xatolik');
              console.log(setError.message);
               };
        };  
        getcities();  
      },1000);
    }, []);
    
    const mappeds = city.map(el => (
        <Card key={el.id} >
        <Image src={el.photo} alt="" />
        <CardText>
            <CardTextTitle>{el.name}</CardTextTitle>
            <span>
                <AiFillStar style={{color:"#FFD166"}} />
                <SpanStrong>{el.rating}</SpanStrong> 
            </span>
            <Span><Strong>${el.price}</Strong>   /night</Span>
            <Button type="button" >Book Now</Button>
         </CardText>
        </Card>
        
    ))

    return (
        <TrandingCard>
        <div className="container" > 
            <TreandingTitle>{t("Trending_cites")}</TreandingTitle>
            <TrendingText>{t("TrendingText")}</TrendingText>
                <Row>
                {error? error : isLoading}
              {isLoading ? <Loader/> : mappeds }
                </Row>
            </div>
        </TrandingCard> 
    );
}

export default Trending;
