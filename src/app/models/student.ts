export class Student {
    _id:string;
    name:string;
    email:string;
    year:number;
    age:number;
  __v:any;

    //solve the Property 'X' has no initializer and is not definitely assigned in the constructor. issue 
    //https://fluin.io/blog/property-has-no-initializer-and-is-not-definitely-assigned

    constructor(){
        this._id="";
        this.name="";
        this.email="";
        this.year=0;
        this.age=0;
        this.__v="";
    }
}
