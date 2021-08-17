
import { Action } from '@ngrx/store';
import { AuthorItem } from '../models/author-item.model';

export enum AuthorActionTypes {
  LOAD_AUTHOR = '[AUTHOR] Load Author',
  LOAD_AUTHOR_SUCCESS = '[AUTHOR] Load Author Success',
  LOAD_AUTHOR_FAILURE = '[AUTHOR] Load Author Failure',
  ADD_ITEM = '[AUTHOR] Add Item',
  ADD_ITEM_SUCCESS = '[AUTHOR] Add Item Success',
  ADD_ITEM_FAILURE = '[AUTHOR] Add Item Failure',
  CHANGE_ITEM = '[AUTHOR] Change Item',
  CHANGE_ITEM_SUCCESS = '[AUTHOR] Change Item Success',
  CHANGE_ITEM_FAILURE = '[AUTHOR] Change Item Failure',
  DELETE_ITEM = '[AUTHOR] Delete Item',
  DELETE_ITEM_SUCCESS = '[AUTHOR] Delete Item Success',
  DELETE_ITEM_FAILURE = '[AUTHOR] Delete Item Failure'
}

export class LoadAuthorAction implements Action {
  readonly type = AuthorActionTypes.LOAD_AUTHOR
}
export class LoadAuthorSuccessAction implements Action {
  readonly type = AuthorActionTypes.LOAD_AUTHOR_SUCCESS

  constructor(public payload: Array<AuthorItem>) {}

}
export class LoadAuthorFailureAction implements Action {
  readonly type = AuthorActionTypes.LOAD_AUTHOR_FAILURE

  constructor(public payload: string) {}
}

export class AddItemAction implements Action {
  readonly type = AuthorActionTypes.ADD_ITEM

  constructor(public payload: AuthorItem) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = AuthorActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: AuthorItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = AuthorActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class ChangeItemAction implements Action {
  readonly type = AuthorActionTypes.CHANGE_ITEM

  constructor(public payload: AuthorItem) { }
}

export class ChangeItemSuccessAction implements Action {
  readonly type = AuthorActionTypes.CHANGE_ITEM_SUCCESS

  constructor(public payload: AuthorItem) { }
}
export class ChangeItemFailureAction implements Action {
  readonly type = AuthorActionTypes.CHANGE_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = AuthorActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
  readonly type = AuthorActionTypes.DELETE_ITEM_SUCCESS

  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = AuthorActionTypes.DELETE_ITEM_FAILURE

  constructor(public payload: string) { }
}

export type AuthorAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  ChangeItemAction |
  ChangeItemSuccessAction |
  ChangeItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction |
  LoadAuthorAction |
  LoadAuthorFailureAction |
  LoadAuthorSuccessAction
