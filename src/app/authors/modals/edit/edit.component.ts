import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {GenreItem} from "../../../genres/store/models/genre-item.model";
import {LoadGenreAction} from "../../../genres/store/actions/genre.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../genres/store/models/app-state.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  onEdit = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {id: null, name: '', genre: ''};
  genreItems$: Observable<Array<GenreItem>> | any;
  public placeHolder: GenreItem = {name: ''};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.model = {...this.data};
    this.placeHolder = {
      name: this.data.genre
    }
    this.genreItems$ = this.store.select((store: any) => store.genre.list);
    this.store.dispatch(new LoadGenreAction());
  }

  public editAuthor(): void {
    this.onEdit.emit({...this.model });
  }

  close(){
    this.onClose.emit()
  }

  public selectionChange(value: any): void {
    this.model.genre = value.name;
  }
}
