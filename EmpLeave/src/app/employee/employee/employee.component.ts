import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employee_service: EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  

  
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.employee_service.formData={
      EmployeeNumber: 0,
      FirstName: '',
      LastName: '',
      Age: '',
      EmployeeType: ''

  }
  

  }

  OnSubmit(from :NgForm){
    console.log('clicked');
    this.InsertEmployee();
    
  }
  
  InsertEmployee(){
    this.employee_service.InsertEmployee().subscribe(
      (res:any)=>{
        console.log('ucesss');

      },
      error=>{
        console.log('failed..');
        console.log(error);
      }
    )
 }

}
