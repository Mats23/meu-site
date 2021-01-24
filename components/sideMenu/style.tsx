import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';



export const Side = styled.div`

${media.greaterThan("medium")`
  background-color: #98D2DC;
 height: 100%;
`}
`