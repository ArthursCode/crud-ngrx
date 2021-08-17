import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import {AuthorsRoutingModule} from "./authors-routung.module";
import {SharedModule} from "../shared.module";
import {EditComponent} from "./modals/edit/edit.component";
import {AddComponent} from "./modals/add/add.component";
import {DeleteComponent} from "./modals/delete/delete.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AuthorReducer} from "./store/reducers/author.reducer";
import {AuthorEffects} from "./store/effects/author.effects";
import {AuthorService} from "./authors.service";

const MODALS = [
  EditComponent,
  AddComponent,
  DeleteComponent
]

@NgModule({
  declarations: [
    AuthorsComponent,
    ...MODALS,
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule,
  ],
  providers: [AuthorService]
})
export class AuthorsModule { }
