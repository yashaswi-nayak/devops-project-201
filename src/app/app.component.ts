import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  sentences = ['There was a shining light amidst the valley of darkness.'];
  showSentence = '';

  aniStyle = {
    'animation': 'typing 7s steps(21, end), blink-caret .5s step-end infinite',
    '-webkit-animation': 'typing 7s steps(21, end), blink-caret .5s step-end infinite'
  }

  constructor(private appSvc: AppService) { }

  ngOnInit() {
    const localthis = this;
    this.showSentence = this.sentences[0];
    this.appSvc.initConnection().subscribe(data => {
      console.log('Connection Established...');
    }, err => {
      console.log('Connection NOT Established...');
      console.log(err);
    });
    const source = timer(5000, 10000);
    const subs = source.subscribe(data => {
      this.loadtext();
    });

  }

  loadtext() {
    this.showSentence = '';
    const sel = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    this.appSvc.getQuote(sel).subscribe(data => {
      const length = data['statement'].length;
      this.aniStyle['animation'] = 'typing 7s steps(' + length + ', end) 1, blink-caret .5s step-end infinite';
      this.aniStyle['-webkit-animation'] = 'typing 7s steps(' + length + ', end) 1, blink-caret .5s step-end infinite';
      this.showSentence = data['statement'];
    }, err => {
      console.log('No Quotes...');
      this.showSentence = 'Come after some time...';
    })
  }
}
