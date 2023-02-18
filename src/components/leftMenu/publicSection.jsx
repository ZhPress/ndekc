import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataPSection } from '../data'
import { useState } from 'react';
import { Line } from '../line';

const lineProps = {
  id: 'publicSectionLine',
  style: {    
     position: 'absolute',
     height: '2px',
     backgroundColor: 'rgba(0, 50, 255, .7)',
     top: 12,
     margin: 'auto',
     borderRadius: 5
  },
  layoutId: '',
  initial: {width:0},
  animate: {width:'100%'},
  transition: {duration:'.4'}
}

export const PublicSection = ({act, setAct}) => {
    const linkPublic = ({isActive}) => isActive? 'active_public': 'a_public';
    const [select, setSelect] = useState();

    return ( 
    <>
      {
        dataPSection.map((el, index) =>(
          <NavLink
           key={index}
           className={linkPublic}
           onClick={() => (setAct(3), setSelect(index))}
           to={el.link}
           >
            <span
            style={{position:'relative'}}
            >{el.title}
            {(select === index && act === 3) && <Line lineProps={lineProps}/>}
            </span>
           </NavLink>
        ))
      }
    </>
    )
  }