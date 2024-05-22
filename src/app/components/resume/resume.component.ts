import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  constructor(private _Renderer2: Renderer2) {}

  downloadResume(): void {
    const link = this._Renderer2.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume/Frontend_Resume_OmarEldeeb.pdf');
    link.setAttribute('download', 'FrontEnd_Resume_OmarEldeeb.pdf');
    link.click();
    link.remove();
  }
}
