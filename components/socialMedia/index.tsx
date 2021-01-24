import { GitHub, LinkeDin, WebSites } from "./style";
import React from 'react';


export default function SocialMedia() {
  return(
    <WebSites>
      <GitHub>
       <a href="https://github.com/mats23"><img src="./git.svg" alt="git"/></a> 
      </GitHub>
      <LinkeDin>
        <a href="https://www.linkedin.com/in/mateus-vinicius-945295121/"><img src="./linkedin.svg" alt="linkedin"/></a>
      </LinkeDin>
    </WebSites>
  )
}