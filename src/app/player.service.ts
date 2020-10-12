import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url="http://localhost:3000/player"
  rootUrl="http://localhost:3000/"

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url)
  }
  savePlayer(data){
    //console.warn(data)
     return this.http.post(this.url,data)
  }
  deletePlayer(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentPlayer(id){
    return this.http.get(`${this.url}/${id}`)
  }
  updateCurrentPlayer(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data){
    return this.http.post(this.rootUrl+"users",data)
  }
}
