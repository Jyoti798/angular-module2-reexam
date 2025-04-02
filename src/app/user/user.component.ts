import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  books: any[] = [];
  checkedOutBooks: any[] = [];

  ngOnInit() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
    this.checkedOutBooks = JSON.parse(localStorage.getItem('checkedOutBooks') || '[]');
  }

  checkoutBook(book: any) {
    if (book.available) {
      book.available = false;
      this.checkedOutBooks.push(book);
      localStorage.setItem('checkedOutBooks', JSON.stringify(this.checkedOutBooks));
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  returnBook(book: any) {
    book.available = true;
    this.checkedOutBooks = this.checkedOutBooks.filter(b => b.isbn !== book.isbn);
    localStorage.setItem('checkedOutBooks', JSON.stringify(this.checkedOutBooks));
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

