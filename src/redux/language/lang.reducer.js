import ENGLISH from './langDoc/english';
import ROMANIAN from './langDoc/romanin';
import RUSSIAN from './langDoc/russian';
import ITALIAN from './langDoc/italian';
import langActionsType from './lang.types';

const INITIAL_STATE = {
  lang:{ENGLISH,
        ROMANIAN,
        RUSSIAN,
        ITALIAN
      },
  langCode: 'ENGLISH'
}
const langReducer = (state=INITIAL_STATE, action) =>{
  switch(action.type){
    case langActionsType.CHANGE_TO_ENGLISH:
      return {
        ...state, langCode: 'ENGLISH'
      }
    case langActionsType.CHANGE_TO_ROMANIAN:
      return {
        ...state, langCode: 'ROMANIAN'
      }
    case langActionsType.CHANGE_TO_RUSSIAN:
      return {
        ...state, langCode: 'RUSSIAN'
      }
    case langActionsType.CHANGE_TO_ITALIAN:
      return {
        ...state, langCode: 'ITALIAN'
      }
    default: return state;  
  } 
}
export default langReducer;