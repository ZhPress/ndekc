import React from "react";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export const ExpertActivity = () => {
    return (
      <motion.div className="content "
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
          <h2>Експертна діяльність</h2>
          <ul style={{color:'blue'}}>
            <li><NavLink>Почеркознавча експертиза</NavLink> </li>
            <li><NavLink>Технічна експертиза документів</NavLink> </li>
            <li><NavLink>Експертиза зброї (балістичні дослідження; дослідження холодної зброї)</NavLink> </li>
            <li><NavLink>Трасологічна експертиза</NavLink> </li>
            <li><NavLink>Дактилоскопічна експертиза</NavLink> </li>
            <li><NavLink>Вибухово-технічна експертиза</NavLink> </li>
            <li><NavLink>Фототехнічна, портретна експертиза</NavLink> </li>
            <li><NavLink>Експертиза матеріалів, речовин та виробів</NavLink> </li>
            <li><NavLink>Експертиза ДНК (молекулярно-генетичні дослідження)</NavLink> </li>
            <li><NavLink>Інженерно-транспортна (автотехнічна) експертиза</NavLink> </li>
            <li><NavLink>Будівельно-технічна та оціночно-будівельна експертизи</NavLink> </li>
            <li><NavLink>Земельно-технічна експертиза</NavLink> </li>
            <li><NavLink>Пожежно-технічна експертиза</NavLink> </li>
            <li><NavLink>Експертиза провідників із ознаками короткого замикання</NavLink> </li>
            <li><NavLink>Комп’ютерно-технічна експертиза</NavLink> </li>
            <li><NavLink>Оціночно-земельна експертиза</NavLink> </li>
            <li><NavLink>Телекомунікаційна експертиза</NavLink> </li>
            <li><NavLink>Інженерно-екологічна експертиза</NavLink> </li>
            <li><NavLink>Експертиза з питань землеустрою</NavLink> </li>
            <li><NavLink>Економiчна експертиза</NavLink> </li>
            <li><NavLink>Товарознавча експертиза</NavLink> </li>
            <li><NavLink>Транспортно-товарознавча (автотоварознавча) експертиза</NavLink> </li>
            <li><NavLink>Експертиза військового майна</NavLink> </li>
            <li><NavLink>Експертиза у сфері інтелектуальної власності</NavLink> </li>
            <li><NavLink>Мистецтвознавча експертиза</NavLink> </li>
          </ul>
          <p style={{textShadow:'1px 1px 10px #111111 '}}>
            <b>Важливо!</b> Запорізький науково-дослідний експертно-криміналістичний центр МВС України є державною 
            спеціалізованою установою судової експертизи. Всі дослідження в центрі проводяться кваліфікованими 
            фахівцями, які атестовані як судові експерти і мають право на проведення судових експертиз за 
            відповідними експертними спеціальностями.
          </p>
        </motion.div>
    )
}