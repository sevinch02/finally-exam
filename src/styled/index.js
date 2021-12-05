import styled from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px 20px;
    font-size: ${(props) => props.theme.fontSize}; 
    width:61px;
    height:30px; 
    background:${(props)=> props.theme.ThemaBg};
    
`;
export const ButtonLight = styled.button`
border: none;
border-radius: 8px;
width:61px;
height:30px;
padding: 8px 20px;
font-size: ${(props) => props.theme.fontSize};
background:${(props)=> props.theme.ThemaBg};

`
export const DarkTheme = {
    White: '#fff',
    backgroundColor: '#222',
    cardBg: '#fff',
    color: '#FCFCFD',
    fontSize: '10px',
    boxShadow: "0px 2px 2px rgba(67, 67, 67, 0.1);",
    ThemaBg: "#474A52",
    MainHeaderBg: "#222529",
    LogoColor:"#FFF",
    intoText: "#3B3E44",
    featuredbg: "#141416",
    featuredTitle:"#FFFFFF",
    featText:"#B1B5C3",
    footerBg:"#222529",
    footerLogo: "#FFFFFF",
    bestPlacesBg:"#141416",
    bestcolor: "#F4F5F6",
    cardImgColor: "#E7ECF3",
    myProfile: "#141416",
    DivFormEl: "#3B3E44",
    myProfileTitle: " #E7ECF3",
    completeTitle:"#E7ECF3",
    bgCard : "#222529",
    CardBoxShadow : "0px 15px 45px rgba(102, 102, 102, 0.1)",
    CardBorder: " 1px solid #3B3E44",
    exTitle: '#fff',
    searchLocationBg: "#141416",
    popularItem: '#E7ECF3',
    treandingBg : "#18191B",
    treadingCardTitle: "#fff",
    hotellist : '#141416',
    hotelCardTitle: '#FFF',
    aboutTravelItem :'#FCFCFD',
    aboutHotelItem : '#E7ECF3',
    Hotelborder:'1px solid #3B3E44',
    priceRowbg: "#3B3E44",
    PriceColor:'#E7ECF3',
    Datalabel : '#FCFCFD',
    HotelsSpecialsBg1 : '#3B3E44',
    HotelsSpecialsColor1 : '#E7ECF3',
    HotelsSpecialsBg2 : '#3B3E44',
    HotelsSpecialsColor2 : '#E7ECF3',
    HotelsSpecialsBg3 : '#3B3E44',
    HotelsSpecialsColor3 : '#E7ECF3',
    HotelsSpecialsBg4: "#3B3E44",
    HotelsSpecialsColor4 : '#E7ECF3',
    HotelsSpecialsBg5 : "#3B3E44",
    HotelsSpecialsColor5: '#E7ECF3',
    RoomText: '#84878B',
    DescontentColor : '#B1B5C4',
    detalistTitle : '#FCFCFD',
    tourTitle: '#E7ECF3',
    TourSpanBg : '#222529',
    TourSpanBorder: '15px',
    bookDetalistbg : '#222529',
    bookDetalistborder:'2px solid #3B3E44',
    RoomBedBorder : '2px solid #3B3E44',
    AboutRoomTimeSpan: '#777E91',
    BookedItemscolor: '#E7ECF3',
    checkIn : '#F4F5F6',
    formInputBg:'#222529',
    formInputBorder:'2px solid #3B3E44',
    CreaditBtn:"#23262F",
    dateStrong: "#FCFCFD",
    DetalistStrong: '#FCFCFD',
    DetalistItems : '#E7ECF3',
    DetalistItemsSpan : "#848788",
    titleP : "#B1B5C4"
  

};

export const LightTheme = {
    White: '#fff',
    backgroundColor: ' #222529',
    cardBg: '#222',
    boxShadow: "0px 2px 2px rgba(67, 67, 67, 0.1)",
    color: ' #3B3E44',
    ThemaBg: "#FCFCFD",
    fontSize: '10px',
    MainHeaderBg: "#FFF",
    LogoColor: "#222529",
    intoText: "#3B3E44",
    featuredbg:"#E5E5E5",
    featuredTitle:"#141416",
    featText:"#3B3E44",
    footerBg:"#F4F5F6",
    footerLogo: "#222529",
    bestPlacesBg: "#E5E5E5;",
    treandingBg: "#F5F5F5",
    bestcolor:"#23262F",
    cardImgColor: "#3B3E44",
    myProfile: "#FAFAFB",
    DivFormEl: "#F4F5F7",
    myProfileTitle: "#23262F",
    completeTitle: "#23262F",
    bgCard : "#fff", 
    CardBoxShadow : "0px 15px 45px rgba(102, 102, 102, 0.1)",
    CardBorder: "1px solid #E7ECF3",
    exTitle: '#141416',
    searchLocationBg: "#fff",
    popularItem: '#3B3E44',
    treadingCardTitle: "#282832",
    hotellist : '#FAFAFB',
    hotelCardTitle: '#23262F',
    aboutTravelItem :'#141416',
    aboutHotelItem : '#3B3E44',
    Hotelborder:'1px solid #E7ECF3',
    priceRowbg: "#F4F5F6",
    PriceColor:'#353945',
    Datalabel : '#84878B',
    HotelsSpecialsBg1 : 'rgba(56, 179, 69, 0.1)',
    HotelsSpecialsColor1 : '#38B345',
    HotelsSpecialsBg2 : 'rgba(253, 151, 4, 0.1)',
    HotelsSpecialsColor2 : '#FD9704',
    HotelsSpecialsBg3 : '#EAEEFA',
    HotelsSpecialsColor3 : '#0B3BA7',
    HotelsSpecialsBg4: "#FCEBF1",
    HotelsSpecialsColor4 : '#E96594',
    HotelsSpecialsBg5 : "#FBEEE8",
    HotelsSpecialsColor5: '#DC6E3D',
    RoomText: '#777E91',
    DescontentColor : '#353945' , 
    detalistTitle : '#252525',
    tourTitle: '#141416',
    TourSpanBg : '#F4F4F6',
    TourSpanBorder: '12px',
    bookDetalistbg : '#fff',
    bookDetalistborder:'2px solid #E7ECF3;',
    RoomBedBorder : '2px solid #EEEEEE',
    AboutRoomTimeSpan: '#84878B',
    BookedItemscolor: '#84878B',
    checkIn : '#B1B5C4',
    formInputBg:'F4F5F6',
    formInputBorder:' 1px solid #878CFF',
    CreaditBtn:"#FFFFFF",
    dateStrong: "#353945",
    DetalistStrong: '#23262F',
    DetalistItems : '#777E91',
    DetalistItemsSpan : "#353945",
    titleP : "#777E90"
    
 
    
    

};
 