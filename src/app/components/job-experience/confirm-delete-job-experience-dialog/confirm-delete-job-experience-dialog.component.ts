import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobExperience } from 'src/app/model/job-experience';

@Component({
  selector: 'app-confirm-delete-job-experience-dialog',
  templateUrl: './confirm-delete-job-experience-dialog.component.html',
  styleUrls: ['./confirm-delete-job-experience-dialog.component.css']
})
export class ConfirmDeleteJobExperienceDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteJobExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public jobExperience: JobExperience,
  ) { }

  ngOnInit(): void {
  }

}
