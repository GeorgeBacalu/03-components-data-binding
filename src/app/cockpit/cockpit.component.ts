import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();
  // name: string = "";
  // content: string = "";
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("contentInput") contentInput: ElementRef;

  // onCreateServer(): void {
  //   this.serverCreated.emit({ name: this.name, content: this.content });
  // }

  // onCreateBlueprint(): void {
  //   this.blueprintCreated.emit({ name: this.name, content: this.content });
  // }

  // onCreateServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement): void {
  //   this.serverCreated.emit({ name: nameInput.value, content: contentInput.value });
  // }

  // onCreateBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement): void {
  //   this.blueprintCreated.emit({ name: nameInput.value, content: contentInput.value });
  // }

  onCreateServer(): void {
    this.serverCreated.emit({ name: this.getInputValue(this.nameInput), content: this.getInputValue(this.contentInput) });
  }

  onCreateBlueprint(): void {
    this.blueprintCreated.emit({ name: this.getInputValue(this.nameInput), content: this.getInputValue(this.contentInput) });
  }

  getInputValue(input: ElementRef): string {
    return input.nativeElement.value;
  }
}
