import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';



export const MainHTML = styled.div`

  .border-tab {
    display: flex;
    justify-content: space-evenly;
    width: 100%
  }

  @media(max-width: 768px) {
    height: 14%;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    height: 20%;
  }

  @media (min-width: 1024px) {
    height: 20%;

  }
`
