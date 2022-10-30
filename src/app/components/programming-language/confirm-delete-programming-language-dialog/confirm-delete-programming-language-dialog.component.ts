import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgrammingLanguage } from 'src/app/model/programming-language';

@Component({
  selector: 'app-confirm-delete-programming-language-dailog',
  templateUrl: './confirm-delete-programming-language-dialog.component.html',
  styleUrls: ['./confirm-delete-programming-language-dialog.component.css']
})
export class ConfirmDeleteProgrammingLanguageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteProgrammingLanguageComponent>,
    @Inject(MAT_DIALOG_DATA) public programmingLanguage: ProgrammingLanguage,
  ) { }

  ngOnInit(): void {
  }

}
