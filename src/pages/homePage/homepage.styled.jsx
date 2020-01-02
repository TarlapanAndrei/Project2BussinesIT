import styled from 'styled-components';
import Background from '../../assets/IT_bussiness.png';
import BackgroundMobile1 from '../../assets/IT_bussinessMob1.png';
import BackgroundMobile2 from '../../assets/IT_bussinessMob2.png';

export const HomepageContainer = styled.div`
  max-width: 100%;
`;
export const HomePageStart = styled.div`
  max-width: 100%;
  height: 50vw;
  background-image: url(${Background});
  background-size: cover;
  border: 2px solid green;
  @media(max-width: 500px){
    display: none;
  }
`;
export const HomePageMobile1 = styled.div`
  max-width: 100%;
  background-image: url(${BackgroundMobile1});
  height: 100vw;
  background-size: cover;
  display: none;
  @media(max-width: 500px){
    display: flex;
  }
`;
export const HomePageMobile2 = styled.div`
  max-width: 100%;
  background-image: url(${BackgroundMobile2});
  height: 60vw;
  background-size: cover;
  display: none;
  @media(max-width: 500px){
    display: flex;
  }
`;
export const HomePageSlogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  margin-top: 22%;
  margin-left: 6vw;
  height: 20%;
  width: 45%;
  color: white;
  p{
    font-size: 3vw;
    letter-spacing: 0.09em;
    margin: 0;
  }
  @media(max-width: 500px){
    margin-top: 10%;
    width: 95%;
    margin-left: 6vw;
    p{
      font-size: 6vw;
      letter-spacing: 0.09em;
      margin: 3vw 0;
    }
  }
`;