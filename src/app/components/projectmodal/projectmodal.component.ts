import { Projects } from './../../models/interface/projects';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.scss'],
})
export class ProjectmodalComponent {
  constructor(public _BsModalRef: BsModalRef) {}

  project = {} as Projects;
}
