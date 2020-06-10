import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly rootURL='https://localhost:/44310/api/';
formData : Employee;
  constructor(private http: HttpClient) { }
//............Insert............. 
InsertEmployee(){
  console.log(this.formData);
  return this.http.post(this.rootURL+'Registers',this.formData);

}
//............Delete............. 

DeleteEmployee(id){
  console.log(this.formData);
  return this.http.delete(this.rootURL+'Registers'+'/'+id);


}

//............Update............. 

PutEmployee(id){
  console.log(this.formData);
  return this.http.put(this.rootURL+'Registers'+'/'+id,this.formData);

}
}

