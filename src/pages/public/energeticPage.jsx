import React from "react";
import { motion } from "framer-motion";

export const Energetic= () => {
    return (
        <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
           <h2>Система енергетичного менеджменту</h2> 
        </motion.div>
    )
}

