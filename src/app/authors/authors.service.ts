import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthorItem} from "./store/models/author-item.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private AUTHOR_URL = environment.API_URL + '/authors'

  constructor(private http: HttpClient) { }

  getAuthorItems() {
    return this.http.get<Array<AuthorItem>>(this.AUTHOR_URL)
      .pipe()
  }

  addAuthorItem(authorItem: AuthorItem) {
    return this.http.post(this.AUTHOR_URL, authorItem)
      .pipe()
  }

  changeAuthorItem(authorItem: AuthorItem) {
    return this.http.put(`${this.AUTHOR_URL}/${authorItem.id}`, authorItem)
      .pipe()
  }

  deleteAuthorItem(id: string) {
    return this.http.delete(`${this.AUTHOR_URL}/${id}`)
      .pipe()
  }
}
