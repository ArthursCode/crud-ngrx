import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  onEdit = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {id: null, name: ''};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.model = {...this.data};
  }

  public editGenre(): void {
    this.onEdit.emit({...this.model });
  }

  close(){
    this.onClose.emit()
  }


}
