import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnChanges {

  @Input("person") person: Person = new Person(0, "", "", "", "", "");
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
