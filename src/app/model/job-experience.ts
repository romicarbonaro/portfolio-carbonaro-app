import { Person } from "./person";

export class JobExperience {
    id: Number;
    company: String;
    position: String;
    description: String;
    startDate: Date;
    endDate?: Date;
    person: Person
    
    constructor(id: Number, company: String, position: String, description: String, person: Person, startDate: Date, endDate?: Date) {
        this.id = id;
        this.company = company;
        this.position = position;
        this.description = description;
        this.person = person;
        this.startDate = startDate;
        this.endDate = endDate;
    }
 }
 