import { Person } from "./person";

export class ProgrammingLanguage {
    id: Number;
    name: String;
    seniority: String;
    person: Person
    
    constructor(id: Number, name: String, seniority: String, person: Person) {
        this.id = id;
        this.name = name;
        this.seniority = seniority;
        this.person = person;
    }
 }