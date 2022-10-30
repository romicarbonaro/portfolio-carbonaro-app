import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobExperience } from 'src/app/model/job-experience';
import { Person } from 'src/app/model/person';

export interface DialogData {
  person: Person,
  jobExperience: JobExperience
}

@Component({
  selector: 'app-create-edit-job-experience-dialog',
  templateUrl: './create-edit-job-experience-dialog.component.html',
  styleUrls: ['./create-edit-job-experience-dialog.component.css']
})
export class CreateEditJobExperienceDialogComponent implements OnInit {

  jobExperience: JobExperience;

  constructor(  public dialogRef: MatDialogRef<CreateEditJobExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.jobExperience != null) {
      this.jobExperience = new JobExperience(data.jobExperience.id, data.jobExperience.company, 
        data.jobExperience.position, data.jobExperience.description, data.jobExperience.person, data.jobExperience.startDate, data.jobExperience.endDate);
    } else {
      this.jobExperience = new JobExperience(0, "", "", "",  data.person, new Date());
    }
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
