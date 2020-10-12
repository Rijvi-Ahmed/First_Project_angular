import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { from } from 'rxjs';
import {PlayerService} from '../player.service'
@Component({
  selector: 'app-add-first-project',
  templateUrl: './add-first-project.component.html',
  styleUrls: ['./add-first-project.component.css']
})
export class AddFirstProjectComponent implements OnInit {

  addFirstProject =new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  address: new FormControl ('')
})
constructor(private player:PlayerService) { }
alert:boolean=false
ngOnInit(): void {
  }
  CollectPlayer(){
    this.player.savePlayer(this.addFirstProject.value).subscribe((result)=>{
      this.alert=true
    
    })
    this.addFirstProject.reset({})
  }
  closeAlert(){
    this.alert=false
  }

}
