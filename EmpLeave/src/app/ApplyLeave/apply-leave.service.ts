import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Applyleave } from './applyleave.model';


@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {
  readonly rootURL='https://localhost:/44310/api/';
  ApplyData : Applyleave;
    constructor(private http: HttpClient) { }
  //............Insert............. 
  InsertApplyLeave(){
    console.log(this.ApplyData);
    return this.http.post(this.rootURL+'Registers',this.ApplyData);
  
  }
  //............Delete............. 
  
  DeleteApplyLeave(id){
    console.log(this.ApplyData);
    return this.http.delete(this.rootURL+'Registers'+'/'+id);
  
  
  }
  
  //............Update............. 
  
  PutApplyLeave(id){
    console.log(this.ApplyData);
    return this.http.put(this.rootURL+'Registers'+'/'+id,this.ApplyData);
  
  }
}
