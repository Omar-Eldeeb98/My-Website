import { ProjectmodalComponent } from './../projectmodal/projectmodal.component';
import { Projects } from './../../models/interface/projects';
import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-projectscards',
  templateUrl: './projectscards.component.html',
  styleUrls: ['./projectscards.component.scss'],
})
export class ProjectscardsComponent {
  constructor(private _BsModalService: BsModalService) {}
  @Input() project = {} as Projects;

  bsModalRef?: BsModalRef;

  openProjectModal(): void {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    };

    this._BsModalService.show(ProjectmodalComponent, modalOptions);

    //!  (OR)

    // this.bsModalRef = this._BsModalService.show(
    //   ProjectmodalComponent,
    //   modalOptions
    // );
  }
}
