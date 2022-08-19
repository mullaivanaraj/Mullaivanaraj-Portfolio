import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './formServices.service';


@NgModule({
  declarations: [AppComponent, HeroComponent, HeaderComponent, AboutComponent, ResumeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, FormsModule,
    
    HttpClientModule ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
