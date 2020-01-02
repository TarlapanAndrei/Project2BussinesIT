import { createSelector } from 'reselect';

const selectDropDown = state => state.dropDown;

export const selectHiddenState = createSelector(
  [selectDropDown],
  dropDown => dropDown.hidden
)