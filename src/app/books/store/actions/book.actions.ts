
import { Action } from '@ngrx/store';
import { BookItem } from '../models/book-item.model';

export enum BookActionTypes {
  LOAD_BOOK = '[BOOK] Load Book',
  LOAD_BOOK_SUCCESS = '[BOOK] Load Book Success',
  LOAD_BOOK_FAILURE = '[BOOK] Load Book Failure',
  ADD_ITEM = '[BOOK] Add Item',
  ADD_ITEM_SUCCESS = '[BOOK] Add Item Success',
  ADD_ITEM_FAILURE = '[BOOK] Add Item Failure',
  CHANGE_ITEM = '[BOOK] Change Item',
  CHANGE_ITEM_SUCCESS = '[BOOK] Change Item Success',
  CHANGE_ITEM_FAILURE = '[BOOK] Change Item Failure',
  DELETE_ITEM = '[BOOK] Delete Item',
  DELETE_ITEM_SUCCESS = '[BOOK] Delete Item Success',
  DELETE_ITEM_FAILURE = '[BOOK] Delete Item Failure'
}

export class LoadBookAction implements Action {
  readonly type = BookActionTypes.LOAD_BOOK
}
export class LoadBookSuccessAction implements Action {
  readonly type = BookActionTypes.LOAD_BOOK_SUCCESS

  constructor(public payload: Array<BookItem>) {}

}
export class LoadBookFailureAction implements Action {
  readonly type = BookActionTypes.LOAD_BOOK_FAILURE

  constructor(public payload: string) {}
}

export class AddItemAction implements Action {
  readonly type = BookActionTypes.ADD_ITEM

  constructor(public payload: BookItem) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = BookActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: BookItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = BookActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class ChangeItemAction implements Action {
  readonly type = BookActionTypes.CHANGE_ITEM

  constructor(public payload: BookItem) { }
}

export class ChangeItemSuccessAction implements Action {
  readonly type = BookActionTypes.CHANGE_ITEM_SUCCESS

  constructor(public payload: BookItem) { }
}
export class ChangeItemFailureAction implements Action {
  readonly type = BookActionTypes.CHANGE_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = BookActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
  readonly type = BookActionTypes.DELETE_ITEM_SUCCESS

  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = BookActionTypes.DELETE_ITEM_FAILURE

  constructor(public payload: string) { }
}

export type BookAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  ChangeItemAction |
  ChangeItemSuccessAction |
  ChangeItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction |
  LoadBookAction |
  LoadBookFailureAction |
  LoadBookSuccessAction
