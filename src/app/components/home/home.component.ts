import { Projects } from './../../models/interface/projects';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _ProjectsService: ProjectsService) {}

  featuredProjects = {} as Projects;

  ngOnInit(): void {
    this.featuredProjects = this._ProjectsService.getProjectById(20);
  }
}
