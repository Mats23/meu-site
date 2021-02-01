
import React, { useState } from 'react';
import { IconsMenu,  Menu, TabMenu } from './style';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

export default function TabNavigation() {

  const router = useRouter();
  const [rotate, useRotate] = useState({rotate: 0})
  const [actionRigth, useActionRigth] = useState({x:0, y:0})
  const [actionLeft, useActionLeft] = useState({x:0, y:0})


  const handlClick = (path: string) => {
    router.push(path);
  }

  const animate = () => {
    if (actionRigth.x > 0) {
      useActionRigth({
        x:0,
        y:0
      })
      useActionLeft({
        x:0,
        y:0
      })
      useRotate({rotate: 0})
    } else {
      useActionRigth({
        x:50,
        y:-50
      })
      useActionLeft({
        x:-50,
        y:-50
      })
      useRotate({rotate: 39})
    }
  }

  return(
    <TabMenu>
      <IconsMenu>
        <Menu>
          <motion.div className="menu__tab"
            onClick={() => animate()}
            animate={rotate}
          >
            <img src="./plus.svg" alt="plus"/>
          </motion.div>
          <motion.div className="menu__item__home"
            animate={actionLeft}
            onClick={() => handlClick("/")}

          >
            <img src="./home.svg" 
                alt="home" />
          </motion.div>
          <motion.div className="menu__item__news"
            animate={actionRigth}
            onClick={() => handlClick("/posts")}
          >
            <img src="./news.svg" 
                alt="news" />
          </motion.div>
        </Menu>
      </IconsMenu>
    </TabMenu>
  )
}