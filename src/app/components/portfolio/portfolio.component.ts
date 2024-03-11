import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from './../../models/interface/projects';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(private _ProjectsService: ProjectsService) {}
  projects_ = {} as Projects[];
  ngOnInit(): void {
    this.projects_ = this._ProjectsService.getProjects();
  }
}
