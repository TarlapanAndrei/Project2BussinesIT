import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const DropDownContainer = styled.div`
  width: 75%;
  background-color: rgba(55, 43, 80, 0.7);
  position: absolute;
  height: 100vw;
  top: 19vw;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const StandartLink = styled(Link)`
  width: 90%;
  color: white;
  height: 16vw;
  display: flex;
  align-items: center;
  padding-left: 3vw;
  p{
    font-size: 7vw;
  }
`;