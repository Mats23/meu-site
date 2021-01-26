import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HeaderPage, HeaderPageIcon, HeaderPageImg, HeaderPageTitle } from './style';
import './style.tsx';




export default function Header() {

  const [scale, useScale] = useState(1.1);
  const [scaleBone, useScaleBone] = useState(0.9);
  const [bob, useBob] = useState("./bob.svg");
  const [animate, useAnimate] = useState({});


  useEffect(() => {
    if (localStorage.getItem("bob") !== null) {
      useBob(localStorage.getItem("bob"));
    }
  });
  
  const handleTap = () => {
    if(scale < 5) {
      useScale(scale + 1);
    }
  }

  const handleTapBone = () => {
    if (scaleBone < 8) {
      useScaleBone(scaleBone + 1);
    } else {
      useBob("./bob2.svg");
      useAnimate({
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      })
      localStorage.setItem("bob","./bob2.svg")
    }
  }

  return (
    <HeaderPage>
      <HeaderPageImg>
        <motion.img
           drag
           dragConstraints={{ left: -50, right: 1000 }}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: scale }}
           src={bob} alt="bob"
           onClick={() => handleTap()}
           animate={animate}
        >
        </motion.img>
      </HeaderPageImg>
      <HeaderPageTitle>
        <h3>Mateus Santana</h3>
      </HeaderPageTitle>
      <HeaderPageIcon>
        <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: scaleBone }}
            src="./bone.svg"
            alt="bone"
            onClick={() => handleTapBone()}
          >
          </motion.img>
      </HeaderPageIcon>
    </HeaderPage>
  )
}