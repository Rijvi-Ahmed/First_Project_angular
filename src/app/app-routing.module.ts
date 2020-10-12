import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{AddFirstProjectComponent} from './add-first-project/add-first-project.component'
import{ListFirstProjectComponent} from './list-first-project/list-first-project.component'
import{LoginComponent} from './login/login.component'
import{RegisterComponent} from './register/register.component'
import{UpdateFirstProjectComponent} from './update-first-project/update-first-project.component'

const routes: Routes = [
  {
    component: AddFirstProjectComponent,
    path: 'add'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: UpdateFirstProjectComponent,
    path: 'update/:id'
  },
  {
    component: ListFirstProjectComponent,
    path: ''
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
