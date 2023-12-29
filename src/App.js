
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './pages/Product';
import Histoire from './pages/Histoire';
import Contact from './pages/Contact';
import Mention from './pages/Mention';

import DzamarhumXV from './components/Product/DzamarhumXV';
import VanillaDzamaRhum from './components/Product/VannilaDzamaRhum';
import CuveeBlanche from './components/Product/CuveeBlanche';
import CuveeNoir from './components/Product/CuveeNoir';
import VieuxRhum1998 from './components/Product/VieuxRhum1998';
import VieuxRhum3 from './components/Product/VieuxRhum3';
import VieuxRhum6 from './components/Product/VieuxRhum6';
import VieuxRhum5 from './components/Product/VieuxRhum5';
import VieuxRhum8 from './components/Product/VieuxRhum8';
import VanillaDzama from './components/Product/VanillaDzama';
import Lucien from './components/Product/Lucien';
import Prix from './pages/Prix';
import RhumVieux from './components/Product/Gamme/RhumVieux';
import RhumAmbre from './components/Product/Gamme/RhumAmbre';
import RhumBlanc from './components/Product/Gamme/RhumBlanc';
import VieuxRhum from './components/Product/Gamme/VieuxRhum';
import RhumUne from './components/Product/Gamme/RhumUne';
import NosyBe from './components/Product/NosyBe';
import Tsingy from './components/Product/Tsingy';
import NosyBeBlanc from './components/Product/NosyBeBlanc';
import Modal from './components/Modal';




/*Traduction 
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'

  i18next.use(initReactI18next)
  .use(Backend)
  .init({
  backend:{
loadPath: `${process.env.TRANSLATIONS_ENDPOINT_URI}/{{ns}}.{{lng}}.json`,
  },
  lng: 'fr',
  fallbackLng:'en'
})
*/


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Mention/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/histoire' element={<Histoire/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/DzamarhumXV' element={<DzamarhumXV/>}/>
          <Route path='/VanillaDzamaRhum' element={<VanillaDzamaRhum/>}/>
          <Route path='/CuveeBlanche' element={<CuveeBlanche/>}/>
          <Route path='/CuveeNoir' element={<CuveeNoir/>}/>
          <Route path='/VieuxRhum1998' element={<VieuxRhum1998/>}/>
          <Route path='/VieuxRhum3' element={<VieuxRhum3/>}/>
          <Route path='/VieuxRhum5' element={<VieuxRhum5/>}/>
          <Route path='/VieuxRhum6' element={<VieuxRhum6/>}/>
          <Route path='/VieuxRhum8' element={<VieuxRhum8/>}/>
          <Route path='/VanillaDzama' element={<VanillaDzama/>}/>
          <Route path='/Lucien' element={<Lucien/>}/>
          <Route path='/NosyBe' element={<NosyBe/>}/>
          <Route path='/Tsingy' element={<Tsingy/>}/>
          <Route path='/NosyBeBlanc' element={<NosyBeBlanc/>}/>

          <Route path='/RhumVieux' element={<RhumVieux/>}/>
          <Route path='/RhumAmbre' element={<RhumAmbre/>}/>
          <Route path='/RhumBlanc' element={<RhumBlanc/>}/>
          <Route path='/VieuxRhum' element={<VieuxRhum/>}/>
          <Route path='/RhumUne' element={<RhumUne/>}/>

          <Route path='/Prix' element={<Prix/>}/>
          <Route path='/Modal' element={<Modal/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
