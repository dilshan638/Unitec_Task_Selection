import { ApplyLeaveService } from './../apply-leave.service';
import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(public applyleave_service: ApplyLeaveService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  

  
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.applyleave_service.ApplyData={
      EmployeeNumber: 0,
      FirstName: '',
      LastName: '',
      Age: '',
      EmployeeType: ''

  }
  

  }

  OnSubmit(from :NgForm){
    console.log('clicked');
    this.InsertApplyLeave();
    
  }
  
  InsertApplyLeave(){
    this.applyleave_service.InsertApplyLeave().subscribe(
      (res:any)=>{
        console.log('ucesss');

      },
      error=>{
        console.log('failed..');
        console.log(error);
      }
    )
 }


 DeleteApplyLeave(id){
  this.applyleave_service.InsertApplyLeave().subscribe(
    (res:any)=>{
      console.log('ucesss');

    },
    error=>{
      console.log('failed..');
      console.log(error);
    }
  )
}



PutApplyLeave(id){
  this.applyleave_service.InsertApplyLeave().subscribe(
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
