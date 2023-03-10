import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AdminComponent } from './admin/admin/admin.component';
import { StudComponent } from './student/stud/stud.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'stud',component:StudComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AdminModule,StudentModule,TeacherModule]
})
export class AppRoutingModule { }
