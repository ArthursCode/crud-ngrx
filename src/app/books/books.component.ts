import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BookItem} from "../books/store/models/book-item.model";
import {Store} from "@ngrx/store";
import {AppState} from "../books/store/models/app-state.model";
import {MatDialog} from "@angular/material/dialog";
import {
  AddItemAction,
  ChangeItemAction,
  DeleteItemAction,
  LoadBookAction
} from "../books/store/actions/book.actions";
import {AddComponent} from "../books/modals/add/add.component";
import {DeleteComponent} from "../books/modals/delete/delete.component";
import {EditComponent} from "../books/modals/edit/edit.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookItems$: Observable<Array<BookItem>> | any;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.bookItems$ = this.store.select((store: any) => store.book.list);
    this.store.dispatch(new LoadBookAction());

  }

  public onAddNewBook() {
    const dialogRef = this.dialog.open(AddComponent, {autoFocus: false, width: '350px'});
    dialogRef.componentInstance.onAdd.subscribe((data: any) => {
      this.store.dispatch(new AddItemAction({name: data.name, genre: data.genre, author: data.author, date: data.date}));
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

  public onRemoveBook({dataItem}: any) {

    const dialogRef = this.dialog.open(DeleteComponent, {autoFocus: false, width: '350px'});
    dialogRef.componentInstance.onDelete.subscribe(() => {
      this.store.dispatch(new DeleteItemAction(dataItem.id))
      dialogRef.close();
    });
    dialogRef.componentInstance.onClose.subscribe(() => {
      dialogRef.close();
    });
  }

  public onEditBook({dataItem}: any) {

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
