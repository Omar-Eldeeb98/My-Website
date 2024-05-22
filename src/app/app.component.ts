import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isLoading: boolean = true;

  constructor(private _Renderer2: Renderer2) {}

  @ViewChild('fixed') navElement!: ElementRef; //^ (1) element

  @HostListener('window:scroll') //^ (2) method
  onScroll(): void {
    // console.log('hello scroll '); //& for test
    if (scrollY > 1200) {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'd-none');
    } else {
      this._Renderer2.addClass(this.navElement.nativeElement, 'd-none');
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  scrollTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
