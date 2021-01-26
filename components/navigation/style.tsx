import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { flexCenter } from '../cssUtils';




export const TabMenu = styled.div`
  /* background-color: #98D2DC; */
  bottom: 0;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* box-shadow: 0 1px 4px 1px grey; */
  /* position: sticky; */
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

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 25%;
  margin-bottom: 20px;
  ${media.lessThan("medium")`
    width: 75%;
  `
  }
 
  .menu {

    ${flexCenter}
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

