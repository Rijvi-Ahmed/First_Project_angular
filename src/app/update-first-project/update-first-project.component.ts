import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { PlayerService } from '../player.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-update-first-project',
  templateUrl: './update-first-project.component.html',
  styleUrls: ['./update-first-project.component.css']
})
export class UpdateFirstProjectComponent implements OnInit {
  alert:boolean=false
  editFirstProject = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private player: PlayerService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.player.getCurrentPlayer(this.router.snapshot.params.id).subscribe((result) => {
      console.warn(result)
      this.editFirstProject = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })

    })

  }
  collection(){
    console.warn("item",this.editFirstProject.value)
    this.player.updateCurrentPlayer(this.router.snapshot.params.id,this.editFirstProject.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false
  }
}
