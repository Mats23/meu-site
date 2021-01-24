
import React from 'react';
import {  IconsMenu, TabMenu } from './style';
import { useRouter } from 'next/router'

export default function TabNavigation() {

  const router = useRouter();

  const handlClick = (path: string) => {
    router.push(path);
  }

  return(
    <TabMenu>
      <IconsMenu>
        <img src="./home.svg" alt="home"  onClick={() => handlClick("/")}/>
        <img src="./news.svg" alt="news" onClick={() => handlClick("/news")}/>
      </IconsMenu>
    </TabMenu>
  )
}