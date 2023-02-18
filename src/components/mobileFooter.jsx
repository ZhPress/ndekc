import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataFooterMobile1, dataFooterMobile2 } from './data';
import { motion } from 'framer-motion';

export default function MobileFooter({onMain, setAct, location}) {
    

    return (
        <>
        <footer>
             <button id='button_main' onClick={onMain} 
                style={{display: location.pathname === '/'? 'none':''}} 
                > На головну
             </button>
              <div className='footMobileDiv'
                style={{flexBasis:'35%'}}
              >
                <ul className='footMobileUl'
                  style={{paddingLeft: '10px'}}
                >
                   {
                     dataFooterMobile1.map(el =>(
                              <li
                               key={el.link}
                               >
                                  <NavLink
                                     onClick={() => setAct(4)}
                                     to={el.link}
                                     > <motion.span
                                        whileHover={{color:'#2abbdf'}}
                                        >
                                          {el.title}
                                       </motion.span>
                                  </NavLink>
                              </li>
                              ))
                   }
                </ul>
             </div>
              <div className='footMobileDiv'
                style={{flexBasis:'25%'}}
              > 
                <ul className='footMobileUl'
                 style={{paddingLeft: '5px'}}
                >
                   {
                     dataFooterMobile2.map(el => (
                         <li
                         key={el.link}
                         >
                           <NavLink
                               onClick={() => setAct(4)}
                               to={el.link}
                               >
                                <motion.span
                                    whileHover={{color:'#2abbdf'}}
                                    >
                                    {el.title}
                                </motion.span>
                            </NavLink>
                         </li>
                      ))
                   }
                </ul>
              </div>
              <div className='footMobileDiv'
                style={{flexBasis:'25%'}}
              >
                 <ul 
                 style={{paddingTop: '15px'}}
                 > 
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
        </footer>
        <div style={{textAlign: 'center', color:'blue'}}>
            <span >Для отримання більш детальної інформації перейдіть у повну версію сайту</span>
        </div>
        </>
      )
    }
    
