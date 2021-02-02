import React from 'react';
import styled from 'styled-components';


export const PostList = styled.div`
  width: 100%;
  height: auto;
  width: 100%;
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  padding: 36px;
`