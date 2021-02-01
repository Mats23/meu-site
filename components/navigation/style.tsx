import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { flexCenter } from '../cssUtils';




export const TabMenu = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 25px;
    cursor: pointer;
  }
  ${media.lessThan("small")`
    position: relative;
  `}

`

export const IconsMenu = styled.div`
  display: flex;
  width: 100%;
  
  
`

export const Menu = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 20px;
  .menu__tab {
    width: 50px;
    height: 50px;
    background-color: #98D2DC;
    border-radius: 100%;
    ${flexCenter}
    position: absolute;
    z-index:2;
  }
  
  .menu__item__home {
    background-color: #98D2DC;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    ${flexCenter}
    position: absolute;
    z-index:1;

  }
  .menu__item__news {
    background-color: #98D2DC;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    ${flexCenter}
    position: relative;
    z-index:0;


  }
  

`

export const Label = styled.p`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #000;
  display: ${props => props.active ? "flex" : "none"};
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 20px;
  padding: 2px;
`

