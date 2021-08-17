import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {GenreItem} from "../../../genres/store/models/genre-item.model";
import {LoadGenreAction} from "../../../genres/store/actions/genre.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../genres/store/models/app-state.model";
import {AuthorItem} from "../../../authors/store/models/author-item.model";
import {LoadAuthorAction} from "../../../authors/store/actions/author.actions";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  onEdit = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {id: null, name: '', genre: '', author: '', date: ''};
  genreItems$: Observable<Array<GenreItem>> | any;
  authorItems$: Observable<Array<AuthorItem>> | any;
  disabled: boolean = true;
  public placeHolderGenre: GenreItem = {name: ''};
  public placeHolderAuthor: AuthorItem = {name: '', genre: ''};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.genreItems$ = this.store.select((store: any) => store.genre.list);
    this.authorItems$ = this.store.select((store: any) => store.author.list);
    this.store.dispatch(new LoadAuthorAction());
    this.store.dispatch(new LoadGenreAction());
    this.model = {...this.data};
    this.placeHolderGenre = {
      name: this.data.genre
    }
    this.placeHolderAuthor = {
      name: this.data.author,
      genre: this.data.genre
    }
  }

  public editBook(): void {
    this.onEdit.emit({...this.model });
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
