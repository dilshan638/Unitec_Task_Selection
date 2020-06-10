import { LeaveService } from './../../leavesvs/leave.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-leave-master',
  templateUrl: './leave-master.component.html',
  styleUrls: ['./leave-master.component.css']
})
export class LeaveMasterComponent implements OnInit {

  constructor(public employee_leave: LeaveService) { }

  ngOnInit(): void {
    this.resetForm();
  }


  
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.employee_leave.leaveData={
      EmployeeNumber: 0,
      AppliedDate: new Date(),
      LeaveDate: new Date(),
      NumberOfDate:0,
      reason: ''

  }
  

  }

  OnSubmit(from :NgForm){
    console.log('clicked');
    this.InsertLeave();
    
   
    
  }
  
  InsertLeave(){
    this.employee_leave.InsertLeave().subscribe(
      (res:any)=>{
        console.log('ucesss');

      },
      error=>{
        console.log('failed..');
        console.log(error);
      }
    )
 }



 PutLeave(id){
  this.employee_leave.PutLeave(id).subscribe(
    (res:any)=>{
      console.log('ucesss');

    },
    error=>{
      console.log('failed..');
      console.log(error);
    }
  )
}



DeleteLeave(id){
  this.employee_leave.DeleteLeave(id).subscribe(
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

