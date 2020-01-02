import React from 'react';
import { IntroContainer, ItroTitleDiv, IntroHead, IntroDivForPharagrapf, IntroLine, IntroTextDiv } from './intro.styled';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { slectAllLang, selectSpecialLang} from '../../redux/language/lang.selectors';

const Intro = ({slectAllLang, selectSpecialLang}) =>{
  const currentLang = slectAllLang[selectSpecialLang];
  const {title, subtitle, paragraph} = currentLang.intro
  return(
  <IntroContainer>
    <ItroTitleDiv>
     <IntroHead>
       <h2>{title}</h2>
     </IntroHead>
     <IntroDivForPharagrapf>
       <p>{subtitle}</p>
     </IntroDivForPharagrapf>
     <IntroLine/>
    </ItroTitleDiv>
    <IntroTextDiv>
      <p>{paragraph} </p>
    </IntroTextDiv>
  </IntroContainer>
)}
const mapStateToProps = createStructuredSelector({
  slectAllLang: slectAllLang,
  selectSpecialLang: selectSpecialLang
})
export default connect(mapStateToProps)(Intro);