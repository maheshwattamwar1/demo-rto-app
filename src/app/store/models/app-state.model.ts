import { DetailItem } from './detailItem.model';

export interface AppState {
  readonly details: Array<DetailItem>;
}