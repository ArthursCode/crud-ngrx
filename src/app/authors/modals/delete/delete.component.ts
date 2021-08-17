import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  onDelete = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {name: ''};
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public deleteAuthor(): void {
    this.onDelete.emit(this.model);
  }

  close(){
    this.onClose.emit()
  }

}
