import React from "react";
import { motion } from "framer-motion";
import f1 from '../../files/invalidity.pdf';

export const Invalidity= () => {
    return (
        <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
           <h2>Результати оцінювання роботи із забезпечення прав осіб з інвалідністю</h2> 
           <p>
            <a href={f1} target='_blanc'>ДОКУМЕНТ</a>
           </p>
        </motion.div>
    )
}

