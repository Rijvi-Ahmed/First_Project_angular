import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service'
@Component({
  selector: 'app-list-first-project',
  templateUrl: './list-first-project.component.html',
  styleUrls: ['./list-first-project.component.css']
})
export class ListFirstProjectComponent implements OnInit {

  constructor(private player:PlayerService) { }

  collection:any=[];
  ngOnInit(): void {
   this.player.getList().subscribe((result)=>{
     console.warn(result);
     this.collection=result;
     
   })
  }
 deletePlayer(item){
   console.warn(this.collection)
   this.collection.splice(item-1,1)
   this.player.deletePlayer(item).subscribe((result)=>{
     console.warn(result)
    
   })
 } 

}
