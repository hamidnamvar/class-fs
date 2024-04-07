import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BookComponent } from './book/book.component';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    MatTableModule
  ,BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  data:Book[]=[
    {id:1000, title:'C#' ,writer:'Me',price:1100},
    {id:1000, title:'JS' ,writer:'You',price:1200},
    {id:1000, title:'Python' ,writer:'He',price:1300},
    {id:1000, title:'ASP .NET' ,writer:'She',price:1400}
  ];
  tableColumns:string[]=[
    'id',
    'title',
    'writer',
    'price'

  ];
}

interface Book {
  id: number;
  title: string;
  writer: string;
  price: number;
}