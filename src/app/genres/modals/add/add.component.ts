import {Component, Inject, OnInit, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  onAdd = new EventEmitter();
  onClose = new EventEmitter();
  model: any = {name: ''};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addGenre(): void {
    this.onAdd.emit(this.model);
  }

  close(){
    this.onClose.emit()
  }


}
