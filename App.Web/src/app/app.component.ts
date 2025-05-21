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

  public isWindow() {
    return typeof window !== "undefined";
  }

  click() {
    let serverUrl = 'https://' + window.location.hostname.replace('4200', '7070') + '/api/data'
    console.log('ServerUrl', serverUrl)
    this.httpClient.get(serverUrl, { responseType: 'text' }).subscribe(value => {
      this.responseText = value
      console.log('Response', value)
    })

    // CORS in browser. Works only with curl command.
    /*
    this.httpClient.get<any>('config.json').subscribe(value => {
      console.log('Config', value)
      this.httpClient.get(value.server, { responseType: 'text', headers: {'X-Github-Token': value.token} }).subscribe(value => {
        this.responseText = value
        console.log('Response', value)
      })
    })
    */
  }
}
