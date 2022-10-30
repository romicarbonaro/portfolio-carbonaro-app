import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Language } from 'src/app/model/language';
import { Person } from 'src/app/model/person';

export interface DialogData {
  person: Person,
  language: Language
}

@Component({
  selector: 'app-create-edit-language-dialog',
  templateUrl: './create-edit-language-dialog.component.html',
  styleUrls: ['./create-edit-language-dialog.component.css']
})
export class CreateEditLanguageDialogComponent implements OnInit {

  language: Language;

  constructor(  public dialogRef: MatDialogRef<CreateEditLanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.language != null) {
      this.language = new Language(data.language.id, data.language.name, data.language.level, data.language.certification, data.language.person)
    } else {
      this.language = new Language(0, "", "", "", data.person);
    }
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
