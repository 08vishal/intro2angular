import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component';
import {RecordsService} from './records.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // myVariable='1 box'
  // text = 'intro2angular';
  // myDisabledValue=false;
  // callMyFunction(){
  //   this.myDisabledValue=!this.myDisabledValue
  //   console.log("Func called")
  // }
  // updateValue(e){
  //   this.text=e.target.value
  //   console.log(e.target.value)
  // }
  records =[]
  constructor (private myFirstService : RecordsService) {
    
  }
  ngOnInit() {
    //this.records = this.myFirstService.getData()
  }
}
