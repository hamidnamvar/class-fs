import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-members',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  data:member[]=[
    {id:1000, name:'Ali',namber:912},
    {id:1000, name:'Mohamad',namber:918},
    {id:1000, name:'Hamid',namber:916},
    {id:1000, name:'Reza',namber:913}
  ];
  tableColumns:string[]=[
    'id',
    'name',
    'namber'

  ];
}

interface member {
  id: number;
  name: string;
  namber: number;
}