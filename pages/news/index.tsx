import React from 'react';
import { ContentPage } from '../../components/content/style';
import Header from '../../components/header';
import TabNavigation from '../../components/navigation';
import { MainHTML } from '../style';

export default function News() {

  return(
    <MainHTML>
      <Header/>
        <ContentPage>
          <div>Teste</div>
        </ContentPage>
      <TabNavigation/>
    </MainHTML>
  )
}