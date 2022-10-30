import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'src/app/model/person';
import { ConfirmDeletePersonDialogComponent } from './confirm-delete-person-dialog/confirm-delete-person-dialog.component';
import { CreateEditPersonDialogComponent } from './create-edit-person-dialog/create-edit-person-dialog.component';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'lastName', 'dni', 'actions' ];
  dataSource: Person[] = [];
  person: Person = new Person(0, "", "", "", "", "");

  constructor(public personService: PersonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe((res) => {
      this.dataSource = res;
    });
  }

  selectPerson(person: Person) {
    this.person = person;
  }

  editPerson(person: Person) {
    const dialogRef = this.dialog.open(CreateEditPersonDialogComponent, {
      width: '350px',
      data: {type: 'edit', person: person},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.personService.editPerson(result).subscribe((response) => {
          person.name = response.name;
          person.lastName = response.lastName;
          person.dni = response.dni;
          person.description = response.description;
          person.imageUrl = response.imageUrl;
        })
      }
    });
  }

  addPerson() {
    const dialogRef = this.dialog.open(CreateEditPersonDialogComponent, {
      width: '350px',
      data: {type: 'create', person: null},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.personService.editPerson(result).subscribe((p) => {
          let person = new Person(p.id, p.name, p.lastName, p.dni, p.description, p.imageUrl);
          this.dataSource = [...this.dataSource, person];
        })
      }
    });
  }

  deletePerson(person: Person) {
    const dialogRef = this.dialog.open(ConfirmDeletePersonDialogComponent, {
      width: '450px',
      data: person,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.personService.deletePerson(person).subscribe((p) => {
          const index = this.dataSource.indexOf(person, 0);
          if (index > -1) {
            this.dataSource.splice(index, 1);
            this.dataSource = [...this.dataSource];
          }
        })
      }
    })
  }
}
