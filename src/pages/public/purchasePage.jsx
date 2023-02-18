import React from "react";
import { motion } from "framer-motion";
import f1 from '../../files/28.pdf';

export const Purchase= () => {
    return (
        <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
           <h2>Інформація про оголошені процедури закупівлі</h2> 
           <table style={{ fontSize:'1.2em', fontWeight:'bolder'}}>
                <tr>
                    <td>07.02.2022</td>
                    <td className="td_right">
                    <a href={f1} target='_blanc'>Обґрунтування технічних та якісних характеристик предмета закупівлі, розміру бюджетного призначення, очікуваної вартості предмета закупівлі: UA-2022-02-07-016019-b</a>
                    </td>
                </tr>
                <tr>
                    <td>28.01.2022</td>
                    <td className="td_right">
                      <a href={f1} target='_blanc'>Обґрунтування технічних та якісних характеристик предмета закупівлі, розміру бюджетного призначення, очікуваної вартості предмета закупівлі: UA-2022-01-21-003797-c</a>    
                    </td>
                </tr>
                <tr>
                    <td>24.12.2021</td>
                    <td className="td_right">
                       <a href={f1} target='_blanc'>Обґрунтування технічних та якісних характеристик предмета закупівлі, розміру бюджетного призначення, очікуваної вартості предмета закупівлі: UA-2021-12-17-004674-a</a> 
                    </td>
                </tr>
                <tr>
                    <td>24.12.2021</td>
                    <td className="td_right">
                       <a href={f1} target='_blanc'> Обґрунтування технічних та якісних характеристик предмета закупівлі, розміру бюджетного призначення, очікуваної вартості предмета закупівлі: UA -2021-12-22-010556-b</a> 
                    </td>
                </tr>
                <tr>
                    <td>08.12.2021</td>
                    <td className="td_right">
                       <a href={f1} target='_blanc'>Обґрунтування технічних та якісних характеристик предмета закупівлі, розміру бюджетного призначення, очікуваної вартості предмета закупівлі: UA-2021-12-02-008585-c</a> 
                    </td>
                </tr>
            </table>
        </motion.div>
    )
}
