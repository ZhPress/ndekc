import React from "react";
import { motion } from 'framer-motion';


export const Line = (props) => {
   const {lineProps} = props;

   return (
        <motion.div
        id={lineProps.id}
        style={lineProps.style}
        layoutId={lineProps.layoutId}
        initial={lineProps.initial}
        animate={lineProps.animate}
        transition={lineProps.transition}
        >
        </motion.div>
    )
}
