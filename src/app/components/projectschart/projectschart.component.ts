import { Chart } from 'angular-highcharts';
import { ProjectsService } from 'src/app/services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectschart',
  templateUrl: './projectschart.component.html',
  styleUrls: ['./projectschart.component.scss'],
})
export class ProjectschartComponent implements OnInit {
  allProjects: any[] = [];
  htmlcssProjects: any[];
  javascriptProjects: any[] = [];
  jqueryProjects: any[] = [];
  angularProjects: any[] = [];

  testChart!: Chart;

  constructor(private _ProjectsService: ProjectsService) {
    this.allProjects = this._ProjectsService.getProjects();
    this.htmlcssProjects = this._ProjectsService.filterProjectsByCategory(1);
    this.javascriptProjects = this._ProjectsService.filterProjectsByCategory(2);
    this.jqueryProjects = this._ProjectsService.filterProjectsByCategory(3);
    this.angularProjects = this._ProjectsService.filterProjectsByCategory(4);
  }

  ngOnInit(): void {
    //^ console.log(this.htmlcssProjects.length, 'just for test ');

    this.testChart = new Chart({
      title: {
        text: 'MY PROJECTS CHART',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
          },
          showInLegend: true,
        },
      },
      xAxis: {
        categories: ['HTML & CSS', 'JAVASCRIPT', 'JQUERY', 'ANGULAR'],
        crosshair: true,
        accessibility: {
          description: 'Projects Types',
        },
      },
      yAxis: {
        min: 1,
        title: {
          text: 'Number Of Completed Projects',
        },
      },
      series: [
        {
          shadow: 'true' as any,
          type: 'column',
          name: 'Number Of Projects',

          data: [
            {
              name: '(HTML & CSS) PROJECTS ',
              color: 'green',
              y: this.htmlcssProjects.length,
            },
            {
              name: 'JAVASCRIPT PROJECTS',
              color: 'yellow',
              y: this.javascriptProjects.length,
            },
            {
              name: 'JQUERY PROJECTS',
              color: 'purple',
              y: this.jqueryProjects.length,
            },
            {
              name: 'ANGULAR PROJECTS',
              color: 'red',
              y: this.angularProjects.length,
            },
          ],
        },
      ],
    });
  }
}
