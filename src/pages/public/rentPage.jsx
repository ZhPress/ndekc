import React from "react";
import { motion } from "framer-motion";

export const Rent= () => {
    return (
        <motion.div className="content"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
           <h2>Оренда державного майна</h2>
           <p style={{fontSize:'1.1em'}}>
             <a href="" target='_blanc'>ДОГОВІР</a>, що оприлюднений відповідно до п.6 постанови Кабінету Міністрів України від 3 червня 
             2020 р. № 483 "Деякі питання оренди державного та комунального майна"
            </p> 
        </motion.div>
    )
}
