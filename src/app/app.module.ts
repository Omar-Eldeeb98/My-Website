import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectscardsComponent } from './components/projectscards/projectscards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectmodalComponent } from './components/projectmodal/projectmodal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { ProjectschartComponent } from './components/projectschart/projectschart.component';
import { ChartModule } from 'angular-highcharts';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    ProjectscardsComponent,
    ProjectmodalComponent,
    NotfoundComponent,
    ProjectschartComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
