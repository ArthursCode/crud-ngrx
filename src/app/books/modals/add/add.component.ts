import {Component, Inject, OnInit, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {GenreItem} from "../../../genres/store/models/genre-item.model";
import {LoadAuthorAction} from "../../../authors/store/actions/author.actions";
import {LoadGenreAction} from "../../../genres/store/actions/genre.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../authors/store/models/app-state.model";
import {AuthorItem} from "../../../authors/store/models/author-item.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  onAdd = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {name: '', author: '', date: '', genre: ''};
  genreItems$: Observable<Array<GenreItem>> | any;
  authorItems$: Observable<Array<AuthorItem>> | any;
  disabled: boolean = true;
  public placeHolderGenre: GenreItem = {
    name: "Select Genre..."
  };
  public placeHolderAuthor: AuthorItem = {
    name: "Select Author...",
    genre: ''
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.genreItems$ = this.store.select((store: any) => store.genre.list);
    this.authorItems$ = this.store.select((store: any) => store.author.list);
    this.store.dispatch(new LoadAuthorAction());
    this.store.dispatch(new LoadGenreAction());
  }

  public addBook(): void {
    this.onAdd.emit(this.model);
  }

  close(){
    this.onClose.emit()
  }

  public selectionChangeGenre(value: any): void {
    this.disabled = false;
    this.authorItems$ = this.store.select((store: any) => store.author.list.filter((el: any) => el.genre === value.name));
    this.model.genre = value.name;
  }
  public selectionChangeAuthor(value: any): void {
    this.model.author = value.name;
  }

}
