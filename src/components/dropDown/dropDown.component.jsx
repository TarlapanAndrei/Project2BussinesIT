import React from 'react';

import { DropDownContainer, StandartLink } from './dropDown.styled';

const DropDownMenu = () =>(
  <DropDownContainer>
    <StandartLink to='/'>
    <p> aboot us</p>
    </StandartLink>
    <StandartLink to='/'>
    <p> services</p>
    </StandartLink>
    <StandartLink to='/'>
    <p> portfolio</p>
    </StandartLink>
    <StandartLink to='/'>
    <p> cariers</p>
    </StandartLink>
    <StandartLink to='/'>
    <p>partners</p>
    </StandartLink>
    <StandartLink to='/'>
      <p>contact</p>
    </StandartLink>
  </DropDownContainer>
)
export default DropDownMenu