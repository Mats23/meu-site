import styled from 'styled-components';
import media from 'styled-media-query';


export const HeaderPage = styled.div`
 width: 100%;
 background-color: #98D2DC;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 position: fixed;
 ${media.lessThan("small")`
  position: sticky;
 `}
`

export const HeaderPageImg = styled.div`
cursor: pointer;
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 118.5px;
    margin-left: 5px;
    margin-top: 5px;
  }
`

export const HeaderPageTitle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`

export const HeaderPageIcon = styled.div`
  margin-right: 5px;
  margin-top: 5px;
  img {
    cursor: pointer;
  }

`