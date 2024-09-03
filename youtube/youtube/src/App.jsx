import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './pages/Search';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Navbar } from './components/Navbar';
import {Sidebar} from './components/Sidebar';
import { PageContainer } from './containers/PageContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* 
          Navbar bileşenini burada tanımladık çünkü her sayfada 
          görünmesini istiyoruz. Bu nedenle, `Routes` bileşeninin 
          dışında yer alıyor.
        */}
        <Navbar />
        <PageContainer>
        <Sidebar/>
        
        <Routes>
          {/* 
            Ana sayfa için rota. `/` yoluna gidildiğinde 
            `Home` bileşeni render edilir.
          */}
          <Route path="/" element={<Home />} />
          
          {/* 
            Video detayları için rota. `/videos/:id` yoluna gidildiğinde 
            `Detail` bileşeni render edilir ve `:id` dinamik olarak 
            rotadan alınır.
          */}
          <Route path="videos/:id" element={<Detail />} />
          
          {/* 
            Arama sonuçları için rota. `/search/:keyword` yoluna gidildiğinde 
            `Search` bileşeni render edilir ve `:keyword` dinamik olarak 
            rotadan alınır.
          */}
          <Route path="search/:keyword" element={<Search />} />
        </Routes>
        </PageContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
