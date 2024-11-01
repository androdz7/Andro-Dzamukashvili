import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildUser } from '../child-user';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() inputData: any;
  @Output() DataChange = new EventEmitter<any>();
  ngOnInit(): void {
    this.DataChange.emit(this.Users3);
  }

  Users3: ChildUser[] = [
    {
      Id: 1,
      Firstname: 'Tamar',
      Lastname: 'Tamarashvili',
      DateOfBirth: new Date("2004-05-15"),
      PhoneNumber: '597789456',
      Email: 'ttamarashvili@gmail.com'
    },
    {
      Id: 2,
      Firstname: 'Salome',
      Lastname: 'Nikolozishvili',
      DateOfBirth: new Date("2004-06-01"),
      PhoneNumber: '511457485',
      Email: 'salome@gmail.com'
    },
    {
      Id: 3,
      Firstname: 'David',
      Lastname: 'Aghmashenebeli',
      DateOfBirth: new Date("2003-02-07"),
      PhoneNumber: '522326587',
      Email: 'DavidA@gmail.com'
    },
    {
      Id: 4,
      Firstname: 'Lola',
      Lastname: 'Gegenava',
      DateOfBirth: new Date("1999-08-023"),
      PhoneNumber: '987654321',
      Email: 'Lola123@gmail.com'
    },
    {
      Id: 5,
      Firstname: 'Nikoloz',
      Lastname: 'Solomonidze',
      DateOfBirth: new Date("2003-12-30"),
      PhoneNumber: '987654321',
      Email: 'N.Solomonidze@gmail.com'
    }
  ]
  constructor(private displayService: DisplayService) { }

  displayUsers() {
    this.displayService.displayArray(this.Users3);
  }
}
