
import { Action } from '@ngrx/store';
import { GenreItem } from '../models/genre-item.model';

export enum GenreActionTypes {
  LOAD_GENRE = '[GENRE] Load Genre',
  LOAD_GENRE_SUCCESS = '[GENRE] Load Genre Success',
  LOAD_GENRE_FAILURE = '[GENRE] Load Genre Failure',
  ADD_ITEM = '[GENRE] Add Item',
  ADD_ITEM_SUCCESS = '[GENRE] Add Item Success',
  ADD_ITEM_FAILURE = '[GENRE] Add Item Failure',
  CHANGE_ITEM = '[GENRE] Change Item',
  CHANGE_ITEM_SUCCESS = '[GENRE] Change Item Success',
  CHANGE_ITEM_FAILURE = '[GENRE] Change Item Failure',
  DELETE_ITEM = '[GENRE] Delete Item',
  DELETE_ITEM_SUCCESS = '[GENRE] Delete Item Success',
  DELETE_ITEM_FAILURE = '[GENRE] Delete Item Failure'
}

export class LoadGenreAction implements Action {
  readonly type = GenreActionTypes.LOAD_GENRE
}
export class LoadGenreSuccessAction implements Action {
  readonly type = GenreActionTypes.LOAD_GENRE_SUCCESS

  constructor(public payload: Array<GenreItem>) {}

}
export class LoadGenreFailureAction implements Action {
  readonly type = GenreActionTypes.LOAD_GENRE_FAILURE

  constructor(public payload: string) {}
}

export class AddItemAction implements Action {
  readonly type = GenreActionTypes.ADD_ITEM

  constructor(public payload: GenreItem) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = GenreActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: GenreItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = GenreActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class ChangeItemAction implements Action {
  readonly type = GenreActionTypes.CHANGE_ITEM

  constructor(public payload: GenreItem) { }
}

export class ChangeItemSuccessAction implements Action {
  readonly type = GenreActionTypes.CHANGE_ITEM_SUCCESS

  constructor(public payload: GenreItem) { }
}
export class ChangeItemFailureAction implements Action {
  readonly type = GenreActionTypes.CHANGE_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = GenreActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
  readonly type = GenreActionTypes.DELETE_ITEM_SUCCESS

  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = GenreActionTypes.DELETE_ITEM_FAILURE

  constructor(public payload: string) { }
}

export type GenreAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  ChangeItemAction |
  ChangeItemSuccessAction |
  ChangeItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction |
  LoadGenreAction |
  LoadGenreFailureAction |
  LoadGenreSuccessAction
