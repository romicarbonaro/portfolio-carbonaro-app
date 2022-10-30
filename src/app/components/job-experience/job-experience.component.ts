import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobExperience } from 'src/app/model/job-experience';
import { Person } from 'src/app/model/person';
import { ConfirmDeleteJobExperienceDialogComponent } from './confirm-delete-job-experience-dialog/confirm-delete-job-experience-dialog.component';
import { CreateEditJobExperienceDialogComponent } from './create-edit-job-experience-dialog/create-edit-job-experience-dialog.component';
import { JobExperienceService } from './job-experience.service';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.css']
})
export class JobExperienceComponent implements OnInit, OnChanges {

  @Input("person") person: Person = new Person(0, "", "", "", "", "");

  dataSource: JobExperience[] = [];
  displayedColumns: String[] = ['position', 'company', 'description', 'startDate', 'endDate', 'actions']

  constructor(public jobExperienceService: JobExperienceService, public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.loadTable();
  }

  loadTable() {
    this.jobExperienceService.getAllJobExperiences(this.person).subscribe(res => {
      this.dataSource = res;
    })
  }

  ngOnInit(): void {}

  editJobExperience(jobExperience: JobExperience) {
    const dialogRef = this.dialog.open(CreateEditJobExperienceDialogComponent, {
      width: '350px',
      data: {person: this.person, jobExperience: jobExperience}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.jobExperienceService.editJobExperience(result).subscribe((response) => {
          jobExperience.position = response.position;
          jobExperience.company = response.company;
          jobExperience.description = response.description;
          jobExperience.startDate = response.startDate;
          jobExperience.endDate = response.endDate
          jobExperience.person = response.person;
        })
      }
    });
  }

  deleteJobExperience(jobExperience: JobExperience) {
    const dialogRef = this.dialog.open(ConfirmDeleteJobExperienceDialogComponent, {
      width: '450px',
      data: jobExperience,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.jobExperienceService.deleteJobExperience(jobExperience).subscribe((p) => {
          const index = this.dataSource.indexOf(jobExperience, 0);
          if (index > -1) {
            this.dataSource.splice(index, 1);
            this.dataSource = [...this.dataSource];
          }
        })
      }
    })
  }

  addJobExperience() {
    const dialogRef = this.dialog.open(CreateEditJobExperienceDialogComponent, {
      width: '350px',
      data: {person: this.person}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.jobExperienceService.addJobExperience(result).subscribe((je) => {
          let programmingLanguage = new JobExperience(je.id, je.position, je.company, je.description, je.person, je.startDate, je.endDate);
          this.dataSource = [...this.dataSource, programmingLanguage];
        })
      }
    });
  }

}
