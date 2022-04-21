import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eref-example',
  templateUrl: './eref-example.component.html',
  styleUrls: ['./eref-example.component.scss']
})
export class ErefExampleComponent implements OnInit {

  @ViewChild("tref", { read: ElementRef }) tref: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.tref.nativeElement.textContent);
  }

}
