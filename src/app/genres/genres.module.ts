import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import {GenresRoutingModule} from "./genres-routung.module";
import {SharedModule} from "../shared.module";
import {GenreService} from "./genres.service";
import { EditComponent } from './modals/edit/edit.component';
import { AddComponent } from './modals/add/add.component';
import { DeleteComponent } from './modals/delete/delete.component';

const MODALS = [
  EditComponent,
  AddComponent,
  DeleteComponent
]

@NgModule({
  declarations: [
    GenresComponent,
    ...MODALS,
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    SharedModule,
  ],
  providers: [GenreService]
})
export class GenresModule { }
