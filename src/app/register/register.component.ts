import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import{PlayerService} from '../player.service'
import { combineLatest, from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private player:PlayerService) { }

  ngOnInit(): void {
  }
  collection()
  {
    console.warn(this.register.value)
    this.player.registerUser(this.register.value).subscribe((result)=>{
      console.warn(result);
    })
    
  }

}
