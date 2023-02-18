import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataLeftMenu } from '../data'
import { PublicSection } from './publicSection';
import { useState } from 'react';
import { Line } from '../line';
import { motion } from 'framer-motion';

const lineProps = {
  id: 'leftMenuLine',
  style : {    
    position: 'absolute',
    height: '2px',
    backgroundColor: 'rgb(0, 50, 255)',
    top: '33px',
    borderRadius: 5
  },
  layoutId: '',
  initial: {width:0},
  animate: {width:'100%'},
  transition: {duration:'.4'}
}

export function LeftMenu (props) {
    const {act, setAct} = props;
    const linkLeft = ({isActive}) => isActive? 'activeLeft': 'a_left';
    const[select, setSelect] = useState();

    return (
    <motion.div id="left-menu">
    <motion.ul id='ul_left'>
       {
        dataLeftMenu.map ((el, index) => ( index === 5? 
          (
          <motion.li
            id='li_composite'
            key={index}
            onClick={() => setSelect(index)}
            style={{
              height: (act === 3) ? '300px': '',
          }}
          >
                <motion.div
                  className='a_public1'
                  style={{
                     scale: (act === 3) ? '1.03':'',
                     backgroundColor:  (act === 3) ? 'rgba(240, 236, 28, .4)':'',
                     textAlign:  (act === 3) ? 'center':''
                  }}
                   
                >
                  {el.title}  
                </motion.div>
               <PublicSection
                   act = {act}
                   setAct = {setAct}
               />
          </motion.li>
         )
           :
            (
        <motion.li
           key={index}
           className={ (select === index && act === 2)? 'li_left_active': 'li_left_passive' } 
           onClick={() => (setAct(2), setSelect(index))}
           whileHover = {{ scale: 1.05 }}
           whileTap = {{scale: 1}}
          >
               <NavLink
                 className={linkLeft}
                 to={el.link}
               >
                 {(select === index && act === 2) && <Line lineProps = {lineProps}/>}
                 {el.title}
               </NavLink>
         </motion.li>
          )
        ))
      }
    </motion.ul>
    </motion.div>
  )
}