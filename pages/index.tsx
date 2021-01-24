import Head from 'next/head'
import React from 'react'
import Content from '../components/content'
import Header from '../components/header'
import TabNavigation from '../components/navigation'
import { Border } from '../components/navigation/style'
import SideMenu from '../components/sideMenu'
import { MainHTML } from './style'


export default function Home() {
  return (
    <MainHTML>
      <Header/>
      <Content/>
      <TabNavigation/>
    </MainHTML>
  )
}
