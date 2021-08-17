import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  LoadAuthorAction,
  AuthorActionTypes,
  LoadAuthorSuccessAction,
  LoadAuthorFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  ChangeItemFailureAction, ChangeItemSuccessAction, ChangeItemAction
} from '../actions/author.actions'
import { of } from 'rxjs';
import {AuthorService} from "../../authors.service";
import {Store} from "@ngrx/store";
import {AppState} from "../models/app-state.model";
// import { AuthorService } from 'src/app/author.service';

@Injectable()
export class AuthorEffects {

  @Effect() loadAuthor$ = this.actions$
    .pipe(
      ofType<LoadAuthorAction>(AuthorActionTypes.LOAD_AUTHOR),
      mergeMap(
        () => this.authorService.getAuthorItems()
          .pipe(
            map(data => {
              return new LoadAuthorSuccessAction(data)
            }),
            catchError(error => of(new LoadAuthorFailureAction(error)))
          )
      ),
  )

  @Effect() addAuthorItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(AuthorActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.authorService.addAuthorItem(data.payload)
          .pipe(
            map(() => {
              new AddItemSuccessAction(data.payload);
              this.store.dispatch(new LoadAuthorAction());
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  )

  @Effect() changeAuthorItem$ = this.actions$
    .pipe(
      ofType<ChangeItemAction>(AuthorActionTypes.CHANGE_ITEM),
      mergeMap(
        (data) => this.authorService.changeAuthorItem(data.payload as any)
          .pipe(
            map(() => {
                new ChangeItemSuccessAction(data.payload)
                this.store.dispatch(new LoadAuthorAction());
              }
            ),
            catchError(error => of(new ChangeItemFailureAction(error)))
          )
      )
    )

  @Effect() deleteAuthorItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(AuthorActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.authorService.deleteAuthorItem(data.payload)
          .pipe(
            map(() => {
              new DeleteItemSuccessAction(data.payload);
              this.store.dispatch(new LoadAuthorAction());
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )

  constructor(
    private actions$: Actions,
    private authorService: AuthorService,
    private store: Store<AppState>
  ) { }
}
