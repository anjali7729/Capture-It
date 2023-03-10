import { Component } from '@angular/core';
import { data } from '../data/data';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { stud } from '../data/stud';
import { teacher } from '../data/teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loguser: data[] = [];
  data: data[]=[];
  logstud: stud[] = [];
  stud: stud[]=[];
  logteach: teacher[] = [];
  teacher: teacher[]=[];
  email = new FormControl('');
  password = new FormControl('');

  constructor(public AuthServicesService: AuthServicesService, private router: Router) { 
    this.loguser= AuthServicesService.getData();
    this.data = this.loguser.filter(each=>1==1);  

    this.logstud= AuthServicesService.getSData();
    this.stud = this.logstud.filter(each=>1==1);  

    this.logteach= AuthServicesService.getTData();
    this.teacher = this.logteach.filter(each=>1==1);  
  }
  login(){

    const admin = this.loguser.find(u => u.email === this.email.value  && u.password === this.password.value);
    const stud = this.logstud.find(u => u.email === this.email.value  && u.password === this.password.value);
    const teacher = this.logteach.find(u => u.email === this.email.value  && u.password === this.password.value);
    
    if (admin) {
        console.log("sucess",admin);
        window. alert('Admin Loggedin Succesfully !');
        this.AuthServicesService.login();
        this.router.navigate(['/admin']);
      }
    else if (stud) {
        console.log("sucess",stud);
        window. alert('Student Loggedin Succesfully !');
        this.AuthServicesService.login();
        this.router.navigate(['/stud']);
      }
    else if (teacher) {
        console.log("sucess",teacher);
        window. alert('Teacher Loggedin Succesfully !');
        this.AuthServicesService.login();
        this.router.navigate(['/teacher']);
      }
             
    else {
        window. alert('Invalid Login Credentials');
        console.log("fail")
      }

  }
}
