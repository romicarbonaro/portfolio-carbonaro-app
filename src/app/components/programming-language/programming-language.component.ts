import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'src/app/model/person';
import { ProgrammingLanguage } from 'src/app/model/programming-language';
import { ProgrammingLanguageService } from './programming-language.service';
import { CreateEditProgrammingLanguageComponent } from './create-edit-programming-language-dialog/create-edit-programming-language-dialog.component';
import { ConfirmDeleteProgrammingLanguageComponent } from './confirm-delete-programming-language-dialog/confirm-delete-programming-language-dialog.component';


@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.css']
})
export class ProgrammingLanguageComponent implements OnInit, OnChanges {

  @Input("person") person: Person = new Person(0, "", "", "", "", "");

  dataSource: ProgrammingLanguage[] = [];
  displayedColumns: String[] = ['name', 'seniority', 'actions']

  constructor(public programmingLanguageService: ProgrammingLanguageService, public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.loadTable();
  }

  loadTable() {
    this.programmingLanguageService.getAllProgrammingLanguages(this.person).subscribe(res => {
      this.dataSource = res;
    })
  }

  ngOnInit(): void {}

  editProgrammingLanguage(programmingLanguage: ProgrammingLanguage) {
    const dialogRef = this.dialog.open(CreateEditProgrammingLanguageComponent, {
      width: '350px',
      data: {person: this.person, programmingLanguage: programmingLanguage}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.programmingLanguageService.editProgrammingLanguage(result).subscribe((response) => {
          programmingLanguage.name = response.name;
          programmingLanguage.seniority = response.seniority;
          programmingLanguage.person = response.person;
        })
      }
    });
  }

  deleteProgrammingLanguage(programmingLanguage: ProgrammingLanguage) {
    const dialogRef = this.dialog.open(ConfirmDeleteProgrammingLanguageComponent, {
      width: '450px',
      data: programmingLanguage,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.programmingLanguageService.deleteProgrammingLanguage(programmingLanguage).subscribe((p) => {
          const index = this.dataSource.indexOf(programmingLanguage, 0);
          if (index > -1) {
            this.dataSource.splice(index, 1);
            this.dataSource = [...this.dataSource];
          }
        })
      }
    })
  }

  addProgrammingLanguage() {
    const dialogRef = this.dialog.open(CreateEditProgrammingLanguageComponent, {
      width: '350px',
      data: {person: this.person}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.programmingLanguageService.addProgrammingLanguage(result).subscribe((l) => {
          let programmingLanguage = new ProgrammingLanguage(l.id, l.name, l.seniority, l.person);
          this.dataSource = [...this.dataSource, programmingLanguage];
        })
      }
    });
  }

}
