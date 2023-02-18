import React, { useEffect } from "react";
import '../src/scss/animate.scss';
import {Routes, Route} from 'react-router-dom';
import {Layout} from './components/layout';
import {Main} from './pages/mainpage';
import {About} from './pages/about/aboutpage';
import {Services} from './pages/servicespage';
import {ExpertActivity} from './pages/activity/expert_activitypage';
import {Weapon} from './pages/weaponpage';
import {Vehicles} from './pages/vehiclespage';
import {Public} from './pages/public/publicpage';
import {Contacts} from './pages/contactspage';
import {Vocations} from './pages/vocationspage';
import { Structure } from "./pages/about/structurePage";
import { Acredition } from "./pages/about/acreditionpage";
import { AntiCoruption } from "./pages/about/anticoruptionpage";
import { Leadership } from "./pages/about/leadershipPage";
import { Purchase } from "./pages/public/purchasePage";
import { Rent } from "./pages/public/rentPage";
import { Invalidity } from "./pages/public/invalidityPage";
import { Energetic } from "./pages/public/energeticPage";

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Main/>}/>
    <Route path="/about/aboutpage" element={<About/>}/>
    <Route path="/about/leadershipPage" element={
    <Leadership title='НАТИСНІТЬ'>
       <b>Іван КАРКОЦЬКИЙ</b>
      </Leadership>
    }/>
    <Route path="/about/structurePage" element={<Structure/>}/>
    <Route path="/about/acreditionpage" element={<Acredition/>}/>
    <Route path="/about/anticoruptionpage" element={<AntiCoruption/>}/>
    <Route path="servicespage" element={<Services/>}/>
    <Route path="/activity/expert_activitypage" element={<ExpertActivity/>} />
    <Route path="weaponpage" element={<Weapon/>}/>
    <Route path="vehiclespage" element={<Vehicles/>}/>
    <Route path="/public/publicpage" element={<Public/>}/>
    <Route path="/public/purchasePage" element={<Purchase/>}/>
    <Route path="/public/rentPage" element={<Rent/>}/>
    <Route path="/public/invalidityPage" element={<Invalidity/>}/>
    <Route path="/public/energeticPage" element={<Energetic/>}/>
    <Route path="contactspage" element={<Contacts/>}/>
    <Route path="vocationspage" element={<Vocations/>}/>
  </Route>
</Routes>
    </>
  );
}

export default App;
