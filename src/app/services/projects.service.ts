import { Projects } from './../models/interface/projects';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  //* data is here
  projects_: Projects[] = [
    {
      catID: 1,
      id: 0,
      name: 'responsive dashboard',
      description:
        'fully responsive dashboard, can toggle between light and dak theme,built by html, css, javascript, jquery, media query.',
      fulldescription:
        'fully responsive dashboard, can toggle between light and dak theme,built by html, css, javascript, jquery, media query,',
      liveDemoLink: 'https://omar-eldeeb98.github.io/dashborad/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/dashborad',
      headerPic: 'assets/projects/p1.png',
      pictures: ['assets/projects/p1.1.png', 'assets/projects/p1.png'],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 4,
      id: 20,
      name: 'Watch 24',
      description: 'Movies Website By Angular',
      fulldescription:
        'fully responsive Movies Website, with many awesome options , you should discover it .',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Movies-Website/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Movies-Website',
      headerPic: 'assets/projects/x.png',
      pictures: [
        'assets/projects/x.png',
        'assets/projects/x1.png',
        'assets/projects/x2.png',
        'assets/projects/x3.png',
        'assets/projects/x4.png',
        'assets/projects/x5.png',
        'assets/projects/x6.png',
        'assets/projects/x7.png',
        'assets/projects/x8.png',
      ],
      tags: [
        'assets/tags/icons8-angular-48.png',
        'assets/tags/icons8-typescript-48.png',
        'assets/tags/icons8-api-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 4,
      id: 1,
      name: 'fresh cart e-commerce',
      description:
        'An integrated e-commerce website with full features build by Angular Framework',
      fulldescription:
        '  An integrated e-commerce website with full features build by Angular Framework,Key features : User Authentication, Reset the password option,  Product catalog, Cart management, Wish List Management, Subcategories, Brands, Checkout Process, Technologies : Html5, Css3, Bootstrap v5.3, TypeScript, and Angular 16 Framework  ',
      liveDemoLink: 'https://omar-eldeeb98.github.io/FreshCart-E-commerce/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/FreshCart-E-commerce',
      headerPic: 'assets/projects/p2.png',
      pictures: [
        'assets/projects/p2.1.png',
        'assets/projects/p2.png',
        'assets/projects/p2.3.png',
        'assets/projects/p2.2.png',
      ],
      tags: [
        'assets/tags/icons8-angular-48.png',
        'assets/tags/icons8-typescript-48.png',
        'assets/tags/icons8-api-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 2,
      id: 2,
      name: 'quiz app ',
      description: 'simple quiz app based on (https://opentdb.com/) API',
      fulldescription:
        'simple quiz app based on (https://opentdb.com/) API , built by : html5 , css3 , bootstrap , javascript , jQuery , oop , fontawesome , googlefonts , animate.css lib , css loaders',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Quiz-App/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Quiz-App',
      headerPic: 'assets/projects/p3.png',
      pictures: [
        'assets/projects/p3.png',
        'assets/projects/p3.1.png',
        'assets/projects/p3.2.png',
      ],
      tags: [
        'assets/tags/icons8-javascript-48.png',
        'assets/tags/icons8-api-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 2,
      id: 3,
      name: 'Yummy - website',
      description:
        'meals full dictionary based on (https://www.themealdb.com/api.php) api',
      fulldescription:
        'meals full dictionary based on (https://www.themealdb.com/api.php) api , you can search meal by category, area, type, and get full informations and links that descibe that meal ',
      liveDemoLink: 'https://omar-eldeeb98.github.io/yammy-website/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/yammy-website',
      headerPic: 'assets/projects/p4.png',
      pictures: [
        'assets/projects/p4.png',
        'assets/projects/p4.1.png',
        'assets/projects/p4.2.png',
        'assets/projects/p4.3.png',
        'assets/projects/p4.4.png',
      ],
      tags: [
        'assets/tags/icons8-javascript-48.png',
        'assets/tags/icons8-api-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 2,
      id: 4,
      name: 'Games-Dictionary',
      description:
        'provides full information about selected games depends on Free-to-Play Games Database (api)',
      fulldescription:
        'provides full information about selected games depends on Free-to-Play Games Database (api), tools: html5 , css3 , bootstrap5 , responsive , javascript , api',
      liveDemoLink:
        'https://rapidapi.com/digiwalls/api/free-to-play-games-database/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Games-Dictionary',
      headerPic: 'assets/projects/p5.png',
      pictures: [
        'assets/projects/p5.png',
        'assets/projects/p5.2.png',
        'assets/projects/p5.1.png',
      ],
      tags: [
        'assets/tags/icons8-javascript-48.png',
        'assets/tags/icons8-api-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 3,
      id: 5,
      name: 'Party-Website (landing page )',
      description:
        'party website landing page buit by html, css, javascript, jquery, bootstrap, contins: 4 sections,side navbar,loading page & custom scroll bar,countdown timmer,limmted chars teaxtarea,responsive design ',
      fulldescription:
        'party website landing page buit by html, css, javascript, jquery, bootstrap, contins: 4 sections,side navbar,loading page & custom scroll bar,countdown timmer,limmted chars teaxtarea,responsive design ',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Party-Website/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Party-Website',
      headerPic: 'assets/projects/p6.png',
      pictures: [
        'assets/projects/p6.png',
        'assets/projects/p61.png',
        'assets/projects/p62.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 2,
      id: 6,
      name: 'Products Management System ',
      description:
        'products management system based on browser local storage , CRUD-S operations',
      fulldescription:
        'products management system based on browser local storage , CRUD-S operations, you can : create category, delete categoty,display categories,count the numbers of categories you have,add product,count quantity , price , descount , get total price,delete product,delete add products,search products by product name or product category,validation  ',
      liveDemoLink:
        'https://omar-eldeeb98.github.io/Products-Management-System/',
      projectCodesLink:
        'https://github.com/Omar-Eldeeb98/Products-Management-System',
      headerPic: 'assets/projects/p7.png',
      pictures: ['assets/projects/p7.png', 'assets/projects/p71.png'],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 2,
      id: 7,
      name: 'weather-website ',
      description: 'weather website using weather api',
      fulldescription:
        'weather website using weather api,can detect your location automatically by => (geolocation api),weather informations by => (weather api),get the current weather of any city,get the weather of today and next 2 days,showing the hourly weather of the day "today",working contact form by => (web3forms)',
      liveDemoLink:
        'https://omar-eldeeb98.github.io/what-weather-weather-website/',
      projectCodesLink:
        'https://github.com/Omar-Eldeeb98/what-weather-weather-website',

      headerPic: 'assets/projects/p81.png',
      pictures: [
        'assets/projects/p81.png',
        'assets/projects/p8.png',
        'assets/projects/p82.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
        'assets/tags/icons8-api-48.png',
      ],
    },

    {
      catID: 2,
      id: 8,
      name: 'smart login system ',
      description:
        'log in , log out , register , save account in local storage.',
      fulldescription:
        'log in , log out , register , save account in local storage, tools: html , css , bootstrap , javascript , local storage.',
      liveDemoLink: 'https://omar-eldeeb98.github.io/smart-login-system/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/smart-login-system',

      headerPic: 'assets/projects/p9.png',
      pictures: [
        'assets/projects/p9.png',
        'assets/projects/p91.png',
        'assets/projects/p92.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 2,
      id: 9,
      name: ' Bookmarker',
      description:
        'bookmark your favoutites websites and save the in your browser (local storage).',
      fulldescription:
        'bookmark your favoutites websites and save the in your browser (local storage), tools: bookmarker website using CRUD operations (create , read , update , delete & search),Html, Css, Bootstrap , Responsive , Local Storage , JavaScript , URL Validation (regex)',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Bookmarker/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Bookmarker',

      headerPic: 'assets/projects/p10.png',
      pictures: [
        'assets/projects/p10.png',
        'assets/projects/p101.png',
        'assets/projects/p102.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 1,
      id: 10,
      name: ' Andey-Website',
      description:
        'Responsive Website (html5 , Css3 , bootstrab5 , mediaQuery , FontAwesome , GoogleFonts )',
      fulldescription:
        'Responsive Website (html5 , Css3 , bootstrab5 , mediaQuery , FontAwesome , GoogleFonts )',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Andey-Website/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Andey-Website',

      headerPic: 'assets/projects/p11.png',
      pictures: [
        'assets/projects/p11.png',
        'assets/projects/p111.png',
        'assets/projects/p112.png',
        'assets/projects/p113.png',
        'assets/projects/p114.png',
        'assets/projects/p115.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 1,
      id: 11,
      name: ' Random-Quotes ',
      description: 'simple & responsive random quotes website',
      fulldescription:
        'simple & responsive random quotes website tools: html5 , css3 , bootstrap5 , javascript , fontawesome , googleFonts',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Random-Quotes/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Random-Quotes',

      headerPic: 'assets/projects/p12.png',
      pictures: ['assets/projects/p12.png'],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 1,
      id: 12,
      name: 'Daniels',
      description: 'Responsive Bootstrap Portfolio Website',
      fulldescription: 'Responsive Bootstrap Portfolio Website,',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Daniels/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Daniels',

      headerPic: 'assets/projects/p13.png',
      pictures: [
        'assets/projects/p13.png',
        'assets/projects/p131.png',
        'assets/projects/p132.png',
        'assets/projects/p133.png',
        'assets/projects/p134.png',
        'assets/projects/p135.png',
        'assets/projects/p136.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 1,
      id: 13,
      name: 'Mealfy',
      description:
        'fully responsive resturant website, with light and dark mode option',
      fulldescription:
        ' fully responsive resturant website, with light and dark mode option, build by only : html,css, javascript',
      liveDemoLink: 'https://omar-eldeeb98.github.io/Mealfy/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/Mealfy',

      headerPic: 'assets/projects/md1.png',
      pictures: [
        'assets/projects/md1.png',
        'assets/projects/md2.png',
        'assets/projects/md3.png',
        'assets/projects/md4.png',
        'assets/projects/md5.png',
        'assets/projects/ml1.png',
        'assets/projects/ml2.png',
        'assets/projects/ml3.png',
        'assets/projects/ml4.png',
        'assets/projects/ml5.png',
        'assets/projects/ml6.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 4,
      id: 14,
      name: 'angular-website',
      description: 'simple (SPA) website by angular-16',
      fulldescription:
        ' fully responsive simple (SPA) website by angular-16, typescript, html5, css3, bootstrap',
      liveDemoLink: 'https://omar-eldeeb98.github.io/angular-website/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/angular-website',

      headerPic: 'assets/projects/a1.png',
      pictures: [
        'assets/projects/a1.png',
        'assets/projects/a2.png',
        'assets/projects/a3.png',
        'assets/projects/a4.png',
      ],
      tags: [
        'assets/tags/icons8-angular-48.png',
        'assets/tags/icons8-typescript-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
      ],
    },

    {
      catID: 1,
      id: 15,
      name: 'devfolio website',
      description: 'responsive portfolio template with html, css, bootstrap,',
      fulldescription:
        'responsive portfolio template with html, css, bootstrap,',
      liveDemoLink: 'https://omar-eldeeb98.github.io/devfolio/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/devfolio',

      headerPic: 'assets/projects/d1.png',
      pictures: [
        'assets/projects/d1.png',
        'assets/projects/d2.png',
        'assets/projects/d3.png',
        'assets/projects/d4.png',
        'assets/projects/d5.png',
        'assets/projects/d6.png',
        'assets/projects/d7.png',
        'assets/projects/d8.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 2,
      id: 16,
      name: 'CRUD system',
      description: 'responsive crud system based on browser local storage ',
      fulldescription:
        'responsive crud system based on browser local storage , applaying CRUD operations, tools : html , css , bootstrap , responsive , javascript , local storage , validation (regex)',
      liveDemoLink: 'https://omar-eldeeb98.github.io/CRUD-system/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/CRUD-system',

      headerPic: 'assets/projects/c1.png',
      pictures: [
        'assets/projects/c1.png',
        'assets/projects/c2.png',
        'assets/projects/c3.png',
        'assets/projects/c4.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-javascript-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },

    {
      catID: 2,
      id: 17,
      name: 'Todo App',
      description:
        'responsive todo app, using api, html, css, javascript, bootstrap',
      fulldescription:
        'responsive todo app, using api, html, css, javascript, bootstrap, with loader & some animations',
      liveDemoLink: 'https://omar-eldeeb98.github.io/todo-app/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/todo-app',

      headerPic: 'assets/projects/t1.png',
      pictures: [
        'assets/projects/t1.png',
        'assets/projects/t2.png',
        'assets/projects/t3.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-javascript-48.png',
        'assets/tags/icons8-bootstrap-48.png',
        'assets/tags/icons8-rest-api-48.png',
      ],
    },

    {
      catID: 2,
      id: 18,
      name: 'Password Generator',
      description: 'random password generator using html, css, javascript',
      fulldescription: 'random password generator using html, css, javascript',
      liveDemoLink:
        'https://omar-eldeeb98.github.io/random-password-generator/',
      projectCodesLink:
        'https://github.com/Omar-Eldeeb98/random-password-generator',

      headerPic: 'assets/projects/pass1.png',
      pictures: ['assets/projects/pass1.png', 'assets/projects/pass2.png'],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-javascript-48.png',
      ],
    },

    {
      catID: 4,
      id: 19,
      name: 'Angular-Note-App',
      description:
        'Note App Can Do (sign in, sign up, log out , add note , update note, delete note )',
      fulldescription:
        'Note App Can Do (sign in, sign up, log out , add note , update note, delete note )',
      liveDemoLink: 'https://omar-eldeeb98.github.io/angular-NoteApp/',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/angular-NoteApp',

      headerPic: 'assets/projects/n4.png',
      pictures: [
        'assets/projects/n1.png',
        'assets/projects/n2.png',
        'assets/projects/n3.png',
        'assets/projects/n4.png',
        'assets/projects/n5.png',
        'assets/projects/n6.png',
        'assets/projects/n7.png',
      ],
      tags: [
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-typescript-48.png',
        'assets/tags/icons8-angular-48.png',
        'assets/tags/icons8-rest-api-48.png',
      ],
    },

    {
      catID: 4,
      id: 21,
      name: 'Multi Lang App',
      description:
        'mplementing (ngx-translate) package in a very simple example.',
      fulldescription:
        ' switch between Arabic or English language, changing the direction of the website Based on selected lang..., change website title (ar or en) too, home page contains screens show you the steps to implement ngx-translate package in your web application.                 ',
      liveDemoLink: 'https://omar-eldeeb98.github.io/MultiLangWebsite/home',
      projectCodesLink: 'https://github.com/Omar-Eldeeb98/MultiLangWebsite',
      headerPic: 'assets/projects/z.png',
      pictures: [
        'assets/projects/z.png',
        'assets/projects/z1.png',
        'assets/projects/z2.png',
        'assets/projects/z3.png',
        'assets/projects/z4.png',
        'assets/projects/z5.png',
        'assets/projects/z6.png',
      ],
      tags: [
        'assets/tags/icons8-angular-48.png',
        'assets/tags/icons8-typescript-48.png',
        'assets/tags/icons8-api-48.png',
        'assets/tags/icons8-html-48.png',
        'assets/tags/icons8-css-48.png',
        'assets/tags/icons8-bootstrap-48.png',
      ],
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects_;
  }

  filterProjectsByCategory(id: number) {
    let filtered = this.projects_.filter((prod) => {
      return prod.catID == id;
    });

    return filtered;
  }

  getProjectById(id: number): Projects {
    let project = this.projects_.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('there is no project match the id : ' + id);
    }

    return project;
  }
}
