import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  LoadGenreAction,
  GenreActionTypes,
  LoadGenreSuccessAction,
  LoadGenreFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  ChangeItemFailureAction, ChangeItemSuccessAction, ChangeItemAction
} from '../actions/genre.actions'
import { of } from 'rxjs';
import {GenreService} from "../../genres.service";
import {Store} from "@ngrx/store";
import {AppState} from "../models/app-state.model";
// import { GenreService } from 'src/app/genre.service';

@Injectable()
export class GenreEffects {

  @Effect() loadGenre$ = this.actions$
    .pipe(
      ofType<LoadGenreAction>(GenreActionTypes.LOAD_GENRE),
      mergeMap(
        () => this.genreService.getGenreItems()
          .pipe(
            map(data => {
              return new LoadGenreSuccessAction(data)
            }),
            catchError(error => of(new LoadGenreFailureAction(error)))
          )
      ),
  )

  @Effect() addGenreItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(GenreActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.genreService.addGenreItem(data.payload)
          .pipe(
            map(() => {
              new AddItemSuccessAction(data.payload);
              this.store.dispatch(new LoadGenreAction());
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  )

  @Effect() changeGenreItem$ = this.actions$
    .pipe(
      ofType<ChangeItemAction>(GenreActionTypes.CHANGE_ITEM),
      mergeMap(
        (data) => this.genreService.changeGenreItem(data.payload as any)
          .pipe(
            map(() => {
                new ChangeItemSuccessAction(data.payload)
                this.store.dispatch(new LoadGenreAction());
              }
            ),
            catchError(error => of(new ChangeItemFailureAction(error)))
          )
      )
    )

  @Effect() deleteGenreItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(GenreActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.genreService.deleteGenreItem(data.payload)
          .pipe(
            map(() => {
              new DeleteItemSuccessAction(data.payload);
              this.store.dispatch(new LoadGenreAction());
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )

  constructor(
    private actions$: Actions,
    private genreService: GenreService,
    private store: Store<AppState>
  ) { }
}
