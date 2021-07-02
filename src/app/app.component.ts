import { Component,OnInit } from '@angular/core';
import { CallService } from "./call.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firstapp';
  segment:any=[];
  constructor(private getData:CallService){

  }
  ngOnInit(){
    this.getData.getResponse().subscribe((data:any)=>{
      this.segment=data.data;
      return this.segment;
    });
  }
}
