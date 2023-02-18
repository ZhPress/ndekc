import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LeftMenu } from '../leftMenu/leftMenu';
import { ToggleMenu } from './toggleMenu';


export default function LeftMenuMove(props) {
  const {act, setAct, isOpen, setIsOpen} = props;
  
  const sidebar = {
    open: {
      width: '250px',
      transition: {
        type: "spring",
      }
    },
    close: {
      width: '10%',
      transition: {
        type: "linear",
      }
    }
    };

  return (
    <motion.nav
    initial={false}
    animate={isOpen? 'open' : 'close'}
    >
      <motion.div 
        variants={sidebar}
        >
          <ToggleMenu toggle={() => setIsOpen(!isOpen)}/>
          {
            isOpen &&
            <LeftMenu
            act={act}
            setAct={setAct}
          />
          }
          
      </motion.div>
         
    </motion.nav>
  )
}
