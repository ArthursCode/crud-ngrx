import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {BooksRoutingModule} from "./books-routung.module";
import {SharedModule} from "../shared.module";
import {EditComponent} from "../books/modals/edit/edit.component";
import {AddComponent} from "../books/modals/add/add.component";
import {DeleteComponent} from "../books/modals/delete/delete.component";
import {BookService} from "./books.service";

const MODALS = [
  EditComponent,
  AddComponent,
  DeleteComponent
]

@NgModule({
  declarations: [
    BooksComponent,
    ...MODALS
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  providers: [BookService]
})
export class BooksModule { }
