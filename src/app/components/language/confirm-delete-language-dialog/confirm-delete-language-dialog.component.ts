import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Language } from 'src/app/model/language';

@Component({
  selector: 'app-confirm-delete-language-dialog',
  templateUrl: './confirm-delete-language-dialog.component.html',
  styleUrls: ['./confirm-delete-language-dialog.component.css']
})
export class ConfirmDeleteLanguageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteLanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public language: Language,
  ) { }

  ngOnInit(): void {
  }

}
