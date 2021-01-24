
import { motion } from 'framer-motion';
import React from 'react';
import { HeaderPageImg } from '../header/style';
import { Side } from './style';

export default function SideMenu() {

  return(
    <Side>
      <HeaderPageImg>
        <motion.div
           drag="x"
           dragConstraints={{ left: -100, right: 100, top: 100, bottom: -100 }}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
        >
          <img src="./bob.svg" alt="bob"/>
        </motion.div>
      </HeaderPageImg>
    </Side>
  )
}