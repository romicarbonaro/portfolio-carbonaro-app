export class Person {
    id: number;
    name: String;
    lastName: String;
    dni: String;
    description: String;
    imageUrl: String;
    
    constructor(id: number, name: String, lastName: String, dni: String, description: String, imageUrl: String) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.dni = dni;
        this.description = description;
        this.imageUrl = imageUrl;
    }
 }