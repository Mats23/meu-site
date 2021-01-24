import React from 'react';
import SocialMedia from '../socialMedia';
import { ContentPage, ContentPageBody, ContentPageTitle } from './style';

export default function Content() {

  return(
    <ContentPage className="container">
      <ContentPageTitle>
        <h4>E aí !?</h4>
      </ContentPageTitle>
      <ContentPageBody>
        <p>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </ContentPageBody>
      <SocialMedia/>
    </ContentPage>
  )
}