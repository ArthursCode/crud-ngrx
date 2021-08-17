import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  LoadBookAction,
  BookActionTypes,
  LoadBookSuccessAction,
  LoadBookFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  ChangeItemFailureAction, ChangeItemSuccessAction, ChangeItemAction
} from '../actions/book.actions'
import { of } from 'rxjs';
import {BookService} from "../../books.service";
import {Store} from "@ngrx/store";
import {AppState} from "../models/app-state.model";
// import { BookService } from 'src/app/book.service';

@Injectable()
export class BookEffects {

  @Effect() loadBook$ = this.actions$
    .pipe(
      ofType<LoadBookAction>(BookActionTypes.LOAD_BOOK),
      mergeMap(
        () => this.bookService.getBookItems()
          .pipe(
            map(data => {
              return new LoadBookSuccessAction(data)
            }),
            catchError(error => of(new LoadBookFailureAction(error)))
          )
      ),
  )

  @Effect() addBookItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(BookActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.bookService.addBookItem(data.payload)
          .pipe(
            map(() => {
              new AddItemSuccessAction(data.payload);
              this.store.dispatch(new LoadBookAction());
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  )

  @Effect() changeBookItem$ = this.actions$
    .pipe(
      ofType<ChangeItemAction>(BookActionTypes.CHANGE_ITEM),
      mergeMap(
        (data) => this.bookService.changeBookItem(data.payload as any)
          .pipe(
            map(() => {
                new ChangeItemSuccessAction(data.payload)
                this.store.dispatch(new LoadBookAction());
              }
            ),
            catchError(error => of(new ChangeItemFailureAction(error)))
          )
      )
    )

  @Effect() deleteBookItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(BookActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.bookService.deleteBookItem(data.payload)
          .pipe(
            map(() => {
              new DeleteItemSuccessAction(data.payload);
              this.store.dispatch(new LoadBookAction());
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )

  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private store: Store<AppState>
  ) { }
}
