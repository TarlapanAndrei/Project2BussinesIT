import { createSelector } from 'reselect';

const selectLang = state => state.lang;

export const slectAllLang = createSelector(
  [selectLang],
  lang => lang.lang
)
export const selectSpecialLang = createSelector(
  [selectLang],
  lang => lang.langCode
)