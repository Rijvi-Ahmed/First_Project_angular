import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFirstProjectComponent } from './add-first-project/add-first-project.component';
import { UpdateFirstProjectComponent } from './update-first-project/update-first-project.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListFirstProjectComponent } from './list-first-project/list-first-project.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddFirstProjectComponent,
    UpdateFirstProjectComponent,
    LoginComponent,
    RegisterComponent,
    ListFirstProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
