import { Action } from '@ngrx/store';
import { DetailItem } from '../models/detailItem.model';

export enum DetailActionType {
  ADD_ITEM = '[DETAIL] Add Detail',
}

export class AddItemAction implements Action {
  readonly type = DetailActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: DetailItem) {}
}

export type DetailAction = AddItemAction;