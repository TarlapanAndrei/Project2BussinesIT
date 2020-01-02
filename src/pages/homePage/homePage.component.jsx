import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { slectAllLang, selectSpecialLang} from '../../redux/language/lang.selectors';
import {HomepageContainer, HomePageStart, HomePageSlogan, HomePageMobile1, HomePageMobile2} from './homepage.styled';
import Intro from '../../components/intro/intro.component';
import { turnOffHidden } from '../../redux/dropDown/dropDown.actions';

const HomePage = ({slectAllLang, selectSpecialLang, turnOffHidden}) =>{
  const currentLang = slectAllLang[selectSpecialLang];
  const { slogan1, slogan2 } = currentLang.homepage
  return(
  <HomepageContainer>
  <HomePageStart>
    <HomePageSlogan>
      <p>{slogan1}</p>
      <p>{slogan2}</p>
    </HomePageSlogan>
  </HomePageStart>
  <HomePageMobile1 onClick={turnOffHidden}/>
  <HomePageMobile2 onClick={turnOffHidden}>
  <HomePageSlogan>
      <p>{slogan1}</p>
      <p>{slogan2}</p>
    </HomePageSlogan>
  </HomePageMobile2>
  <Intro />
  </HomepageContainer>
)}
const mapStateToProps = createStructuredSelector({
  slectAllLang: slectAllLang,
  selectSpecialLang: selectSpecialLang
})
const mapDispatchToProps = dispatch =>({
  turnOffHidden: ()=>dispatch(turnOffHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);