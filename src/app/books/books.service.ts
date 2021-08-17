import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BookItem} from "./store/models/book-item.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BOOK_URL = environment.API_URL + '/books'

  constructor(private http: HttpClient) { }

  getBookItems() {
    return this.http.get<Array<BookItem>>(this.BOOK_URL)
      .pipe()
  }

  addBookItem(bookItem: BookItem) {
    return this.http.post(this.BOOK_URL, bookItem)
      .pipe()
  }

  changeBookItem(bookItem: BookItem) {
    return this.http.put(`${this.BOOK_URL}/${bookItem.id}`, bookItem)
      .pipe()
  }

  deleteBookItem(id: string) {
    return this.http.delete(`${this.BOOK_URL}/${id}`)
      .pipe()
  }
}
