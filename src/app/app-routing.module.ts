import { ProjectschartComponent } from './components/projectschart/projectschart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Omar - Home' },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Omar - Portfolio',
  },
  {
    path: 'charts',
    component: ProjectschartComponent,
    title: 'Projects - Charts',
  },

  { path: 'resume', component: ResumeComponent, title: 'Omar - Resume' },
  { path: 'contact', component: ContactComponent, title: 'Omar - Contact' },
  { path: '**', component: NotfoundComponent, title: 'Omar - NotFound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
