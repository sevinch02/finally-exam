import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import {Suspense, useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import HotelList from "./pages/HotelList";
import Footer from "./components/Footer/Footer";
import HotelDetalist from "./pages/HotelDetalist";
import Paymet from "./pages/Paymet";
import NotFound from "./pages/NotFound";
import Sckroll from "./components/Sckroll";
import PaymetSuccess from "./pages/PaymetSuccess";


const App = () => {

  const [theme, toggleTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
          <Suspense fallback="loading" >
            <Header/>
            <Sckroll/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/> }  />
              <Route path="/hotellist" element={<HotelList/>}  />
              <Route path="/hotel/:id" element={<HotelDetalist/>}/>
              <Route path="/payment/:id" element={<Paymet/>}/>
              <Route path="/paymetSuccess/:id" element={<PaymetSuccess/>} />
              <Route path="*" element={<NotFound/>}/>
           </Routes>
           
             <Footer/> 
            </Suspense>
           
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
