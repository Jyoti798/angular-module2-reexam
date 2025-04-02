import { Component } from '@angular/core';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent {

  books: any[] = [];
  newBook = { title: '', author: '', isbn: '', available: true };
  selectedBook: any = null;

  ngOnInit() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  addBook() {
    this.books.push({ ...this.newBook });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.newBook = { title: '', author: '', isbn: '', available: true };
  }

  editBook(book: any) {
    this.selectedBook = { ...book };
  }

  updateBook() {
    const index = this.books.findIndex(b => b.isbn === this.selectedBook.isbn);
    if (index !== -1) {
      this.books[index] = { ...this.selectedBook };
      localStorage.setItem('books', JSON.stringify(this.books));
      this.selectedBook = null;
    }
  }

  deleteBook(isbn: string) {
    this.books = this.books.filter(book => book.isbn !== isbn);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}


