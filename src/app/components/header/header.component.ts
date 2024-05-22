import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  typedText: any;
  ngOnInit(): void {
    const options = {
      strings: [
        'Software Engineer',
        'Frontend DeveLoper',
        'Angular Developer',
        'UI/UX Developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };
    const typed = new Typed('.typed-element', options);
    // this.typedText = typed;
  }
}
