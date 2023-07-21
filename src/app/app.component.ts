import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: { type: string, name: string, content: string }[] = [
    { type: "server", name: "Test server", content: "This is a test server" },
    { type: "blueprint", name: "Test blueprint", content: "This is a test blueprint" }
  ];

  onServerCreated(serverData: { name: string, content: string }): void {
    this.servers.push({ type: "server", name: serverData.name, content: serverData.content });
  }

  onBlueprintCreated(blueprintData: { name: string, content: string }): void {
    this.servers.push({ type: "blueprint", name: blueprintData.name, content: blueprintData.content });
  }

  onChangeFirst(): void {
    this.servers[0].name = "Changed";
  }

  onDestroyFirst(): void {
    this.servers.splice(0, 1);
  }
}
