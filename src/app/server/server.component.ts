import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() server: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild("heading") heading: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log(this.getTextContent(this.heading)); // before "AfterViewInit" lifecycle phase has been reached, the values of elements can't be checked in the DOM since it hasn't been rendered yet 
    console.log(this.getTextContent(this.paragraph)); // before "AfterContentInit" lifecycle phase has been reached, the values of elements use in the content replaced by ng-content can't be checked in the DOM since it hasn't been rendered yet 
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log(this.getTextContent(this.paragraph)); // it gives access to the content elements, so they can be accessed and their values be used
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log(this.getTextContent(this.heading)); // it gives access to the template elements, so they can be accessed and their values be used
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }

  getTextContent(element: ElementRef): string {
    return element ? element.nativeElement.textContent : null;
  }
}
