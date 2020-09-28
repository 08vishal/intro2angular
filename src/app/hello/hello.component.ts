import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  xpar='delhi'
  m= 2|5
  i=0
  constructor() { }
  heavyTask(){
    console.log("called", this.i++, "times")
  }
  ngOnInit(): void {
  }

}
