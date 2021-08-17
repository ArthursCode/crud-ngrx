import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthorItem} from "../authors/store/models/author-item.model";
import {Store} from "@ngrx/store";
import {AppState} from "../authors/store/models/app-state.model";
import {MatDialog} from "@angular/material/dialog";
import {
  AddItemAction,
  ChangeItemAction,
  DeleteItemAction,
  LoadAuthorAction
} from "../authors/store/actions/author.actions";
import {AddComponent} from "../authors/modals/add/add.component";
import {DeleteComponent} from "../authors/modals/delete/delete.component";
import {EditComponent} from "../authors/modals/edit/edit.component";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authorItems$: Observable<Array<AuthorItem>> | any;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.authorItems$ = this.store.select((store: any) => store.author.list);
    this.store.dispatch(new LoadAuthorAction());

  }

  public onAddNewAuthor() {
    const dialogRef = this.dialog.open(AddComponent, {autoFocus: false, width: '350px'});
    dialogRef.componentInstance.onAdd.subscribe((data: any) => {
      this.store.dispatch(new AddItemAction({name: data.name, genre: data.genre}));
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

  public onRemoveAuthor({dataItem}: any) {

    const dialogRef = this.dialog.open(DeleteComponent, {autoFocus: false, width: '350px'});
    dialogRef.componentInstance.onDelete.subscribe(() => {
      this.store.dispatch(new DeleteItemAction(dataItem.id))
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

  public onEditAuthor({dataItem}: any) {

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
