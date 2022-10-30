import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/model/person';
import { ProgrammingLanguage } from 'src/app/model/programming-language';

export interface DialogData {
  person: Person,
  programmingLanguage: ProgrammingLanguage
}

@Component({
  selector: 'app-create-edit-programming-language-dialog',
  templateUrl: './create-edit-programming-language-dialog.component.html',
  styleUrls: ['./create-edit-programming-language-dialog.component.css']
})
export class CreateEditProgrammingLanguageComponent implements OnInit {

  programmingLanguage: ProgrammingLanguage;

  constructor(  public dialogRef: MatDialogRef<CreateEditProgrammingLanguageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.programmingLanguage != null) {
      this.programmingLanguage = new ProgrammingLanguage(data.programmingLanguage.id, data.programmingLanguage.name, data.programmingLanguage.seniority, data.programmingLanguage.person)
    } else {
      this.programmingLanguage = new ProgrammingLanguage(0, "", "", data.person);
    }
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
