import { Person } from "./person";

export class Language {
    id: Number;
    name: String;
    level: String;
    certification: String;
    person: Person
    
    constructor(id: Number, name: String, level: String, certification: String, person: Person) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.certification = certification;
        this.person = person;
    }
 }