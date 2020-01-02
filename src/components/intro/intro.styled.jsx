import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  @media(max-width: 500px){
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`;
export const ItroTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 22vw;
  @media(max-width: 500px){
    width: 100%;
    align-items: center;
  }
`;
export const IntroTextDiv = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  p{
    margin: 0.8vw;
    font-size: 2.1vw;
  }
  @media(max-width: 1050px){
    p{
      font-size: 2.5vw;
    }
  }
  @media(max-width: 770px){
    p{
      font-size: 3vw;
    }
  }
  @media(max-width: 500px){
    width: 96%;
    p{
      font-size: 6vw;
      padding:2vw 2vw;
    }
  }
`;
export const IntroHead = styled.div`
margin-top:5vw;
margin-left: 15%;
h2{
  color: #707070;
  margin:0;
  line-height: 0.5;
  font-size: 2.5vw;
  letter-spacing: 0.2vw;
  }
  @media(max-width: 500px){
    margin-left: 0;
    h2{
      line-height: 0.7;
      font-size: 7.5vw;
      letter-spacing: 0.2vw;
      }
  }
`;
export const IntroDivForPharagrapf = styled.div`
margin-left: 15%;
p{
  font-size: 2.5vw;
  font-weight: bold;
  letter-spacing: 0.2vw;
  margin: 1vw 0;
  }
  @media(max-width: 500px){
    margin-left: 0;
    p{
      font-size: 5.5vw;
      font-weight: bold;
      letter-spacing: 0.2vw;
      margin: 4vw 0;
      }
  }
`;
export const IntroLine = styled.div`
  width: 36%;
  height: 0.3em;
  background-color: #660167;
  margin-left: 15%;
  @media(max-width: 500px){
    margin:1em 0;
    width: 70%;
  }
`;