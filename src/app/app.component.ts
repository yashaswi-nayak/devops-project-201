import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  showSentence = '';
  sentences = ['The book is in front of the table.',
    'The sky was deep dark blue in color.',
    'A glittering gem is not enough for.',
    'Do not step on the broken glass',
    'It was getting dark, and we weren’t there yet.'
  ];

  aniStyle = {
    'animation': 'typing 7s steps(21, end), blink-caret .5s step-end infinite',
    '-webkit-animation': 'typing 7s steps(21, end), blink-caret .5s step-end infinite'
  }

  ngOnInit() {
    const localthis = this;
    // this.loadtext();
    const source = timer(500, 10000);
    const subs = source.subscribe(data => {
      this.loadtext();
    });

  }

  loadtext() {
    this.showSentence = '';
    const sel = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    const length = this.sentences[sel].length;
    this.aniStyle['animation'] = 'typing 7s steps(' + length + ', end) 1, blink-caret .5s step-end infinite';
    this.aniStyle['-webkit-animation'] = 'typing 7s steps(' + length + ', end) 1, blink-caret .5s step-end infinite';
    this.showSentence = this.sentences[sel];
  }
}
