import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GenreItem} from "./store/models/genre-item.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private GENRE_URL = environment.API_URL + '/genres'

  constructor(private http: HttpClient) { }

  getGenreItems() {
    return this.http.get<Array<GenreItem>>(this.GENRE_URL)
      .pipe()
  }

  addGenreItem(genreItem: GenreItem) {
    return this.http.post(this.GENRE_URL, genreItem)
      .pipe()
  }

  changeGenreItem(genreItem: GenreItem) {
    return this.http.put(`${this.GENRE_URL}/${genreItem.id}`, genreItem)
      .pipe()
  }

  deleteGenreItem(id: string) {
    return this.http.delete(`${this.GENRE_URL}/${id}`)
      .pipe()
  }
}
