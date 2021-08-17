import { BookState } from '../reducers/book.reducer';

export interface AppState {
  readonly book: BookState
}
