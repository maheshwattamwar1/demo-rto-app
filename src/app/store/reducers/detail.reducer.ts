// import the interface
import { DetailItem } from '../models/detailItem.model';
import { DetailAction, DetailActionType } from '../actions/detail.action';
import { ActionReducerMap } from '@ngrx/store';

//create a dummy initial state
const initialState: Array<DetailItem> = [
  {
    ownerName: 'Test',
    carNumber: 'abc123',
  },
];

export function DetailReducer(
  state: Array<DetailItem> = initialState,
  action: DetailAction
) {
  switch (action.type) {
    case DetailActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
