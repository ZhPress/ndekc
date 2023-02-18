import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataFooter } from './data';
import { motion } from 'framer-motion';

export  function Footer({onMain, setAct, location}) {
  return (
    <>
    <footer>
         <button id='button_main' onClick={onMain} 
            style={{display: location.pathname === '/'? 'none':''}} 
            > На головну сторінку
         </button>
          <div>
            <div className='inner'>КОНТАКТИ</div>
            <div className='foot_contact' onClick={() => setAct(4)}>
               <NavLink 
                  id='footContactLink'
                  to='/contactspage'
                  >Всі контакти
               </NavLink>
            </div>
         </div>
          <div>
          <div className='inner'>КОРИСНІ ПОСИЛАННЯ</div>
            <ul style={{width:'100%', fontSize:'.9em', marginTop:'0'}}>
               {
                  dataFooter.map(el => (
                     <li
                     key={el.title}
                     className='govLi'
                     >
                        <motion.a
                         href={el.href}
                         whileHover={{color:'#2abbdf'}}
                        >
                         {el.title} 
                        </motion.a>
                     </li>
                  ))
               }
            </ul>
          </div>
          <div>
          <div className='inner'>СОЦІАЛЬНІ МЕРЕЖІ</div>
             <ul > 
               <li className='socLi'>
                  <motion.a id='a1' 
                  href='https://www.facebook.com/pages/category/Government-Organization/%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B8%D0%B9-%D0%9D%D0%94%D0%95%D0%9A%D0%A6-%D0%9C%D0%92%D0%A1-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8-112829302731739/'
                  whileHover={{color:'#2abbdf'}}
                  >Facebook
                  </motion.a>
               </li>
               <li className='socLi'>
                  <motion.a id='a2'
                  href="https://twitter.com/zp_ndekc"
                  whileHover={{color:'#2abbdf'}}
                  >Twiter
                  </motion.a>
               </li>
               <li className='socLi'>
                  <motion.a id='a3'
                  href="https://instagram.com/zp_ndekc"
                  whileHover={{color:'#2abbdf'}}
                  >Instagram
                  </motion.a>
               </li>
             </ul>
          </div>
          <div className="footer_logo"></div>
    </footer>
    <div style={{textAlign: 'center', color:'blue'}}>
        <span >м. Запоріжжя, вул. Аваліані 19-А, тел. (061) 228-02-59, факс (061) 228-02-58 e-mail: ndekc@zp.npu.gov.ua</span>
    </div>
    </>
  )
}
