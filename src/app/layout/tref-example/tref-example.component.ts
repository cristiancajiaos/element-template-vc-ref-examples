import { ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tref-example',
  templateUrl: './tref-example.component.html',
  styleUrls: ['./tref-example.component.scss']
})
export class TrefExampleComponent implements OnInit {

  @ViewChild("tpl", {read: TemplateRef}) tpl: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let elementRef = this.tpl.elementRef;
    console.log(elementRef.nativeElement.textContent);
  }

}
