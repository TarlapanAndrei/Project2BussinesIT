import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { slectAllLang, selectSpecialLang} from '../../redux/language/lang.selectors';
import { changeToEnglish, changeToRussian, changeToRomanian, changeToItalian} from '../../redux/language/language.actions';
import { HeaderGeneralContainer,HeaderContainer, HeaderContainerMobile, OrdinaryLink, OrdinaryLinkMobile, OrdinaryDivMobile, LangDiv, OrdinaryDiv } from './header.styled';
import { selectHiddenState } from '../../redux/dropDown/dropDown.selectors';
import { toggleHidden } from '../../redux/dropDown/dropDown.actions';

import DropDownMenu from '../dropDown/dropDown.component';

const Header = ({slectAllLang, selectSpecialLang, hiddenState,  changeToEnglish, changeToRussian, changeToRomanian, changeToItalian, toggleHidden}) =>{
  const currentLang = slectAllLang[selectSpecialLang];
  const { home, about_us, products_services, portfolio, carriers, partners, contact } = currentLang.buttons;
  console.log(home)
  return(
  <HeaderGeneralContainer>
  <HeaderContainer>
    <OrdinaryLink to='/'>
      <p>{home}</p>
    </OrdinaryLink>
    <OrdinaryLink to='/'>
    <p>{about_us}</p>
    </OrdinaryLink>
    <OrdinaryLink to='/'>
    <p>{products_services}</p>
    </OrdinaryLink>
    <OrdinaryLink to='/'>
    <p>{portfolio}</p>
    </OrdinaryLink>
    <OrdinaryLink to='/'>
    <p>{carriers}</p>
    </OrdinaryLink>
    <OrdinaryLink to='/'>
    <p>{partners}</p>
    </OrdinaryLink>
    <OrdinaryLink to='/'>
    <p>{contact}</p>
    </OrdinaryLink>
    <OrdinaryDiv>
    {
      selectSpecialLang === 'ENGLISH' ? null:
      (<LangDiv onClick={changeToEnglish}>
      <p>En</p>
    </LangDiv>)
    }
    {
      selectSpecialLang === 'ROMANIAN' ? null:
      (<LangDiv onClick={changeToRomanian}>
      <p>Ro</p>
    </LangDiv>)
    }
    {
      selectSpecialLang === 'RUSSIAN' ? null:
      (<LangDiv onClick={changeToRussian}>
      <p>Ru</p>
    </LangDiv>)
    }
    {
      selectSpecialLang === 'ITALIAN' ? null:
      <LangDiv onClick={changeToItalian}>
      <p>It</p>
    </LangDiv>}
    </OrdinaryDiv>
  </HeaderContainer>
  <HeaderContainerMobile>
    <OrdinaryLinkMobile to='/'>
      <p>{home}</p>
    </OrdinaryLinkMobile>
    <OrdinaryDivMobile onClick={toggleHidden}>
      <p>MENU</p>
    </OrdinaryDivMobile>
    { hiddenState ? null :
      <DropDownMenu />}
    <OrdinaryDiv>
    {
      selectSpecialLang === 'ENGLISH' ? null:
      (<LangDiv onClick={changeToEnglish}>
      <p>En</p>
    </LangDiv>)
    }
    {
      selectSpecialLang === 'ROMANIAN' ? null:
      (<LangDiv onClick={changeToRomanian}>
      <p>Ro</p>
    </LangDiv>)
    }
    {
      selectSpecialLang === 'RUSSIAN' ? null:
      (<LangDiv onClick={changeToRussian}>
      <p>Ru</p>
    </LangDiv>)
    }
    {
      selectSpecialLang === 'ITALIAN' ? null:
      <LangDiv onClick={changeToItalian}>
      <p>It</p>
    </LangDiv>}
    </OrdinaryDiv>
  </HeaderContainerMobile>
  </HeaderGeneralContainer>
)}
const mapStateToProps = createStructuredSelector({
  slectAllLang: slectAllLang,
  selectSpecialLang: selectSpecialLang,
  hiddenState: selectHiddenState
})
const mapDispatchToProps = dispatch =>({
  changeToEnglish: ()=> dispatch(changeToEnglish()),
  changeToRussian: ()=> dispatch(changeToRussian()),
  changeToRomanian: ()=> dispatch(changeToRomanian()),
  changeToItalian: ()=> dispatch(changeToItalian()),
  toggleHidden: ()=> dispatch(toggleHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);