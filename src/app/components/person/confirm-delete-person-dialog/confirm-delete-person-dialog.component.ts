import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-confirm-delete-person-dialog',
  templateUrl: './confirm-delete-person-dialog.component.html',
  styleUrls: ['./confirm-delete-person-dialog.component.css']
})
export class ConfirmDeletePersonDialogComponent implements OnInit {

constructor(
  public dialogRef: MatDialogRef<ConfirmDeletePersonDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public person: Person,
) {}

  ngOnInit(): void {
  }

}
