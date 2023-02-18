import React from "react";
import { motion } from "framer-motion";

export const Contacts = () => {
    return (
        <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
          <h3>м. Запоріжжя, вул. Аваліані 19-А<br/>
              тел. (061) 228-02-59<br/>
              факс (061) 228-02-58<br/>
              e-mail: ndekc@zp.npu.gov.ua
          </h3>
          
        </motion.div>
    )
}