import {Outlet, useNavigate} from 'react-router-dom';
import { useLocation } from "react-router";
import '/my-app/ndekc/src/scss/app.scss';
import { useState } from 'react';
import { Header } from './header';
import { LeftMenu } from './leftMenu/leftMenu';
import { Footer } from './footer';
import {useMedia} from 'react-use';
import MobileFooter from './mobileFooter';
import LeftMenuMove from './leftMenuMove/leftMenuMove';

export const Layout = () => {
    const [act, setAct] = useState();
    //const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const onMain = () => { setAct(0); navigate('/')};
    const isMobile = useMedia('(max-width: 576px)');
   
    return (
   <div id='main_box'>
      <Header 
        act={act}
        setAct={setAct}
        location={location}
        onMain={onMain}
        isMobile={isMobile}
      />
    <main>
    {
      !isMobile &&
      <LeftMenu
        act={act}
        setAct={setAct}
      />
    }
      <Outlet />
    </main>
    {
      isMobile? 
      <MobileFooter
      setAct={setAct}
      onMain={onMain}
      location={location}
      />
      :
      <Footer
      setAct={setAct}
      onMain={onMain}
      location={location}
      />
    }
      
   </div> 
   )
}