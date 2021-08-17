import {Component, Inject, OnInit, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {GenreItem} from "../../../genres/store/models/genre-item.model";
import {LoadGenreAction} from "../../../genres/store/actions/genre.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../genres/store/models/app-state.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  onAdd = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {name: '', genre: ''};
  genreItems$: Observable<Array<GenreItem>> | any;
  public placeHolder: GenreItem = {
    name: "Select Genre..."
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.genreItems$ = this.store.select((store: any) => store.genre.list);
    this.store.dispatch(new LoadGenreAction());
  }

  public addAuthor(): void {
    this.onAdd.emit(this.model);
  }

  close(){
    this.onClose.emit()
  }

  public selectionChange(value: any): void {
    this.model.genre = value.name;
  }

}
