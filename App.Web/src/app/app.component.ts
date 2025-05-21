import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App.Web';
  constructor(private httpClient: HttpClient) {

  }

  responseText?: string

  ngOnInit() {
     this.httpClient.get('http://localhost:7070/api/data', {responseType: 'text'}).subscribe(value => {
      this.responseText = value
      console.log('Response', value)
     })
  }
}
