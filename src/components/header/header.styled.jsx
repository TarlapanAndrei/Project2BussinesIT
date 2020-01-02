import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderGeneralContainer = styled.div`
  width: 100%;
  height: 4em;
  position: absolute;
`; 

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 500px){
    display: none;
  }
`;
export const HeaderContainerMobile = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 500px){
    display: flex;
  }
`;

export const OrdinaryLink = styled(Link)`
  color: white;
  width: 11%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p{
    font-size: 1vw;
  }
  @media(max-width:1366px){
    p{
      font-size: 1.3vw;
    }
  }
  @media(max-width:950px){
    p{
      font-size: 1.4vw;
    }
  }
  @media(max-width:750px){
    p{
      font-size: 1.6vw;
    }
  }
  @media(max-width:650px){
    p{
      font-size: 1.8vw;
    }
  }
  &:hover{
    p{font-weight: bolder;}
  }
`;
export const OrdinaryLinkMobile = styled(Link)`
    color: white;
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const OrdinaryDivMobile = styled.div`
    color: white;
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const OrdinaryDiv = styled.div`
  color: white;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1400px){
    justify-content: space-between;
  }
  @media(max-width: 500px){
    width: 45%;
    justify-content: center;
  }
`;
export const LangDiv = styled.div`
width: 20%;
margin: 0.1em;
margin-right: 0.2em;
cursor: pointer;
&:hover{
  p{font-weight: bolder;}
}
`;