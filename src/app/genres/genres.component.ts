import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {GenreItem} from "./store/models/genre-item.model";
import {AppState} from "./store/models/app-state.model";
import {AddItemAction, ChangeItemAction, DeleteItemAction, LoadGenreAction} from "./store/actions/genre.actions";
import {EditComponent} from "./modals/edit/edit.component";
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "./modals/add/add.component";
import {DeleteComponent} from "./modals/delete/delete.component";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genreItems$: Observable<Array<GenreItem>> | any;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.genreItems$ = this.store.select((store: any) => store.genre.list);
    this.store.dispatch(new LoadGenreAction());

  }

  public onAddNewGenre() {
    const dialogRef = this.dialog.open(AddComponent, {autoFocus: false, width: '350px'});
    dialogRef.componentInstance.onAdd.subscribe((data: any) => {
      this.store.dispatch(new AddItemAction({name: data.name}));
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

  public onRemoveGenre({dataItem}: any) {

    const dialogRef = this.dialog.open(DeleteComponent, {autoFocus: false, width: '350px'});
    dialogRef.componentInstance.onDelete.subscribe(() => {
      this.store.dispatch(new DeleteItemAction(dataItem.id))
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

  public onEditGenre({dataItem}: any) {

    const dialogRef = this.dialog.open(EditComponent, {autoFocus: false, width: '350px', data: dataItem});
    dialogRef.componentInstance.onEdit.subscribe((data: any) => {
      this.store.dispatch(new ChangeItemAction(data))
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

}
