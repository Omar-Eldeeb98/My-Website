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
  projectsCategoryList = {} as Projects[];
  selectedCategory: number = 0;

  projectsCategories: any[] = [
    { id: 1, name: 'HTML & CSS' },
    { id: 2, name: 'JAVASCRIPT ' },
    { id: 3, name: 'JQUERY' },
    { id: 4, name: 'ANGULAR' },
  ];

  ngOnInit(): void {
    this.projects_ = this._ProjectsService.getProjects();
    this.projectsCategoryList = this.projects_;
  }

  filterData(): void {
    if (this.selectedCategory == 0) {
      this.projectsCategoryList = this.projects_;
    } else {
      this.projectsCategoryList = this.projects_.filter(
        (project) => project.catID == this.selectedCategory
      );
      console.log('just for testing', this.projectsCategoryList); //^ just for testing the success of filtering func.
    }
  }

  // */======================(filter projects => another way )===========================

  // ngOnChanges(): void {
  //   this.filterData();
  // }

  // filterData(): void {
  //   if (this.selectedCategory == 0) {
  //     this.projectsCategoryList = this._ProjectsService.getProjects();
  //   } else {
  //     this.projectsCategoryList =
  //       this._ProjectsService.filterProjectsByCategory(this.selectedCategory);
  //   }
  // }

  //*==========================(filter projects => another way )======================================
}
