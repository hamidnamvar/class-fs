import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { BooksComponent } from './+pages/books/books.component';
import { MembersComponent } from './+pages/members/members.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'members', component: MembersComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }

];
