import React from "react";
import { motion } from "framer-motion";
import imgStructure from '../../img/str3.png'

export const Structure = () => {
    return (
        <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
            <label>
              <h2 style={{textAlign:'center'}}>Структура центру</h2>
              <p style={{marginBottom: '5%'}}>Запорізький науково-дослідний експертно-криміналістичний центр МВС   України має наступну структуру:</p>
              <div id="img_structure"><img src={imgStructure} style={{width:'100%'}} alt='Structure' /></div>
            </label>
        </motion.div>
    )
}