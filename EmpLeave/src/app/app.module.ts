
import { RouterModule } from '@angular/router';
import { ReportComponent } from './Report/report/report.component';
import { ApplyLeaveComponent } from './ApplyLeave/apply-leave/apply-leave.component';
import { LeaveMasterComponent } from './LeaveMaster/leave-master/leave-master.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavBarComponent,
    ApplyLeaveComponent,
    LeaveMasterComponent,
    ReportComponent

  
  ],


  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([

      {path : ''           , component :EmployeeComponent},

      {path : 'leavemaster', component :LeaveMasterComponent},

      {path : 'Apply'      , component :ApplyLeaveComponent},

      {path : 'eReport'    , component :ReportComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

  
export class AppModule { }
