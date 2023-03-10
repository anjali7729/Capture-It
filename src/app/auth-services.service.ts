import { Injectable } from '@angular/core';
import { data } from './data/data';
import { stud } from './data/stud';
import { teacher } from './data/teacher';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  
private data:data[]=[]
private stud:stud[]=[]
private teacher:teacher[]=[]
public loggedIn = false;
  constructor() { 
    this.data =[
      new data ("anjali@gmail.com","anjali123"),
      new data ("hitu@gmail.com","hitu123"),
      new data ("ayush@gmail.com","ayush123"),
      new data ("khushali@gmail.com","khushali123"),      
    ];

    this.stud =[
      new stud ("abc@gmail.com","anjali123"),
      new stud ("pqr@gmail.com","hitu123")     
    ];

    this.teacher =[
      new teacher ("aa@gmail.com","anjali123"),
      new teacher ("bb@gmail.com","hitu123")   
    ];
  }

  getData():data[]{
    return this.data;
  }
  getSData():stud[]{
    return this.stud;
  }
  getTData():teacher[]{
    return this.teacher;
  }
  getAdata(usser:string):data|undefined{
    let user = this.data.find(each=> each.email==usser);
    return user;
  }

  login() {
    this.loggedIn = true;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
