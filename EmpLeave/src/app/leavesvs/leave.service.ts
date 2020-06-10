import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Leave } from '../leave/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  readonly rootURL='https://localhost:/44310/api/';
  leaveData : Leave;

  constructor(private http: HttpClient) { }

  
//............Insert............. 
InsertLeave(){
  console.log(this.leaveData);
  return this.http.post(this.rootURL+'Registers',this.leaveData);

}
//............Delete............. 

DeleteLeave(id){
  console.log(this.leaveData);
  return this.http.delete(this.rootURL+'Registers'+'/'+id);


}

//............Update............. 

PutLeave(id){
  console.log(this.leaveData);
  return this.http.put(this.rootURL+'Registers'+'/'+id,this.leaveData);

}
}