import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/model/language';
import { Person } from 'src/app/model/person';
import { ConfirmDeleteLanguageDialogComponent } from './confirm-delete-language-dialog/confirm-delete-language-dialog.component';
import { CreateEditLanguageDialogComponent } from './create-edit-language-dialog/create-edit-language-dialog.component';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit, OnChanges{

  @Input("person") person: Person = new Person(0, "", "", "", "", "");

  dataSource: Language[] = [];
  displayedColumns: String[] = ['name', 'level', 'certification', 'actions']

  constructor(public languageService: LanguageService, public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.loadTable();
  }

  loadTable() {
    this.languageService.getAllLanguages(this.person).subscribe(res => {
      this.dataSource = res;
    })
  }

  ngOnInit(): void {}

  editLanguage(language: Language) {
    const dialogRef = this.dialog.open(CreateEditLanguageDialogComponent, {
      width: '350px',
      data: {person: this.person, language: language}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.languageService.editLanguage(result).subscribe((response) => {
          language.name = response.name;
          language.level = response.level;
          language.certification = response.certification;
          language.person = response.person;
        })
      }
    });
  }

  deleteLanguage(language: Language) {
    const dialogRef = this.dialog.open(ConfirmDeleteLanguageDialogComponent, {
      width: '450px',
      data: language,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.languageService.deleteLanguage(language).subscribe((p) => {
          const index = this.dataSource.indexOf(language, 0);
          if (index > -1) {
            this.dataSource.splice(index, 1);
            this.dataSource = [...this.dataSource];
          }
        })
      }
    })
  }

  addLanguage() {
    const dialogRef = this.dialog.open(CreateEditLanguageDialogComponent, {
      width: '350px',
      data: {person: this.person}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.languageService.addLanguage(result).subscribe((l) => {
          let language = new Language(l.id, l.name, l.level, l.certification, l.person);
          this.dataSource = [...this.dataSource, language];
        })
      }
    });
  }

}
