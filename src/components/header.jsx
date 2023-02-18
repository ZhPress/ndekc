import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { dataHeader } from './data';
import { Line } from './line';

const lineProps = {
  id: 'headerLine',
  style: {    
      position: 'absolute',
      height: '2px',
      backgroundColor: 'rgb(0, 50, 255)',
      bottom: '-3px',
      borderRadius: 5,
      left: 0,
  },
  layoutId: '1',
  initial: {width: '60%'},
  animate: {width: '100%'},
  transition: ''
}

export function Header({act, onMain, setAct, location, isMobile}) {
    const linkName = ({isActive}) => isActive? 'activeLink': '';
    const[select, setSelect] = useState();
    
    const tridentHome = () => {
      if (location.pathname !== '/') {
         onMain()
         setAct(0)
      }}
    

  return (
   <>
    <motion.div className="head"
      style={{height: isMobile? '80px':''}}
      initial={{ x:-1000 }}  
      animate={{ x: 0 }}
      transition= {{ duration: 1 }}
    >
        <motion.div className="trident" style={{cursor: location.pathname === '/'? '':'pointer'}}
        whileHover={{backgroundSize: location.pathname === '/'? '':'65%' }}
        onClick={tridentHome}
        />
        <div className="building"/>
        <div className="emblem"/>
        <p >ЗАПОРІЗЬКИЙ НАУЧНО-ДОСЛІДНИЦЬКИЙ <br/> ЕКСПЕРТНО-КРИМІНАЛЬНИЙ ЦЕНТР МВС УКРАЇНИ</p>
    </motion.div>
    <motion.header className='header'
    style={{height: isMobile? '25px':''}}
    initial={{ x:1000 }}  
    animate={{ x: 0 }}
    transition= {{ duration: 1 }}
    >
    {
      dataHeader.map((el, index) => (
        <motion.div
        style={{
                height: isMobile? '25px':'',
                fontSize: isMobile? '.7em':''
              }}
        key={index}
        onClick={() => (setAct(1), setSelect(index))}
        transition= {{ duration: 1 }}
        >
           <NavLink
           className={linkName}
           to={el.link}
           >
                <span
                style={{position:'relative'}}
                >
                   {(select === index && act === 1) && <Line lineProps = {lineProps}/>}
                   {el.title}
                </span>
           </NavLink>
        </motion.div>
      ))
    }
    </motion.header> 
    
    </>
  )
}