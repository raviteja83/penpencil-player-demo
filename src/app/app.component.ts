import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'penpencil-player-100ms';
  playerConfig = {
      "poster": "",
      "liveui": true,
      "sources": [
          {
              "src": "<add your source here>",
              "type": "application/x-mpegURL",
              "withCredentials": false,
              "cacheEncryptionKeys": true
          }
      ],
      "autoplay": false,
      "startTime": 0,
      "fullScreenEnabled": false,
      "fluid": false,
      "fill": true,
      "responsive": true,
      "seekButtons": true,
      "seekSeconds": 0,
  };
}
