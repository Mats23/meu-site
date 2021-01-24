import React from 'react';
import styled from 'styled-components';

export const TabMenu = styled.div`
  background-color: #98D2DC;
  bottom: 0;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0 1px 4px 1px grey;
  z-index: 1;
  position: sticky;
  img {
    width: 25px;
    cursor: pointer;
  }

`

export const IconsMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
`

export const Border = styled.div`
  background-color:#98D2DC;
  width: 50px;
  height: 50px;
  z-index: 0;
  border-radius: 30px;

  
`
