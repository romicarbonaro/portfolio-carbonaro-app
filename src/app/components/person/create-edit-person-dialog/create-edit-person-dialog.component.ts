import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Person } from 'src/app/model/person';

export interface DialogData {
  person: Person;
  type: string;
}

@Component({
  selector: 'app-create-edit-person-dialog',
  templateUrl: './create-edit-person-dialog.component.html',
  styleUrls: ['./create-edit-person-dialog.component.css']
})
export class CreateEditPersonDialogComponent implements OnInit {

  person: Person;

  constructor(
    public dialogRef: MatDialogRef<CreateEditPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    if (data.person != null) {
      this.person = new Person(data.person.id, data.person.name, data.person.lastName, data.person.dni, data.person.description, data.person.imageUrl)
    } else {
      this.person = new Person(0, "", "", "", "", "");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
