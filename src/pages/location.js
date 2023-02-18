import React from "react";
import { motion } from "framer-motion";

export const Location = () => {
    return (
        <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
            <h1>My Location...</h1>
        </motion.div>
    )
}