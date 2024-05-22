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

  // typescript assertions
  project = {} as Projects;

  // project: any = {};
}
