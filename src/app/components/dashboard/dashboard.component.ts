import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pollValues:any = [];
  surveyvalues:any;

  constructor() { }

  ngOnInit(): void {
  }

  addOptions(value:any,type:string){
    if(value && type == "poll"){
      this.pollValues.push(value);
      (document.getElementById("pollOptions") as HTMLInputElement).value = "";
    } else if(value && type == "survey"){
      this.surveyvalues.push(value);
    }  
  }

  deletePollOption(index:any, type:string){
    if(index && type == "poll"){
      this.pollValues.splice(index,1);
    } else if(index && type == "survey"){
      this.surveyvalues.splice(index,1);
    } 
  }


}
