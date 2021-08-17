import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "./shared.module";
import {RouterModule} from "@angular/router";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {GenreReducer} from "./genres/store/reducers/genre.reducer";
import {GenreEffects} from "./genres/store/effects/genre.effects";
import {AuthorReducer} from "./authors/store/reducers/author.reducer";
import {AuthorEffects} from "./authors/store/effects/author.effects";
import {BookReducer} from "./books/store/reducers/book.reducer";
import {BookEffects} from "./books/store/effects/book.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({
      genre: GenreReducer,
      author: AuthorReducer,
      book: BookReducer
    }),
    EffectsModule.forRoot([GenreEffects, AuthorEffects, BookEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
