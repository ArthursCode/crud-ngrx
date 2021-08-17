import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconsModule} from "@progress/kendo-angular-icons";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {GridModule} from "@progress/kendo-angular-grid";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";

const KENDO_MODULES = [
  LayoutModule,
  IconsModule,
  GridModule,
  ButtonsModule,
  DropDownsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    ...KENDO_MODULES
  ],
  exports: [...KENDO_MODULES, FormsModule]
})
export class SharedModule { }
