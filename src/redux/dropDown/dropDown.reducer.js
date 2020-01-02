import dropDownActionTypes from './dropDown.types';
const INITIAL_STATE = {
  hidden: true
}
const dropDownReducer = (state=INITIAL_STATE, action) =>{
  switch(action.type){
    case dropDownActionTypes.TOGGLE_HIDDEN:
      return{
        ...state, hidden: !state.hidden
      }
    case dropDownActionTypes.TORN_OFF_HIDDEN:
      return{
        ...state, hidden: true
      }
    default : return state;
  }
}
export default dropDownReducer;