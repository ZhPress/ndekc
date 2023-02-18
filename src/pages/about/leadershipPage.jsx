import { AnimatePresence, motion } from "framer-motion";
import React from "react"
import { useState } from "react";

export const Leadership = (props) => {

    const { title = 'click me', children } = props;
    const [isVisible, setVisible] = useState(false);
    const handleChange = () => setVisible(!isVisible)

    return (
        <motion.div className="content" 
          style={{height:'500px'}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
            <label>
            <h2 style={{textAlign:'center'}}>Директор центру</h2>
                <div
                onClick={handleChange}
                style={{
                    margin:'10% auto',
                    backgroundColor: '#ddd',
                    width: '300px',
                    padding: '.8rem 1.2rem'
                }}>
                {title}
                </div>
                <AnimatePresence>
                    {
                        isVisible && (
                            <motion.div
                            initial={{height: '0'}}
                            animate={{height:'auto'}}
                            exit={{height: '0'}}
                            style={{width:'40%',  overflow:'hidden', border:'1px solid black', margin:'auto'}}
                            transition={{duration:'.5'}}
                            >
                                <div 
                                style={{
                                    padding: '.8rem 1.2rem', 
                                    backgroundColor:'#777'
                                    }}>{children}
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </label>
        </motion.div>
    )
}