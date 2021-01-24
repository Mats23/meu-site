import styled from 'styled-components';
import React from 'react';
import media from 'styled-media-query';

export const WebSites = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 5%;
  height: 7.5rem;

  ${media.greaterThan("huge")`
     height: 21.5rem;

  `}
`

export const GitHub = styled.div`
`

export const LinkeDin = styled.div`
`