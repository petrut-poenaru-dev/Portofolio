import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from "../main-components/about/about.component";
import {ContactComponent} from "../main-components/contact/contact.component";
import {HeaderComponent} from "../main-components/header/header.component";
import {HomeComponent} from "../main-components/home/home.component";
import {SkillsComponent} from "../main-components/skills/skills.component";
import {WorkComponent} from "../main-components/work/work.component";
import {FooterComponent} from "../main-components/footer/footer.component";

const COMPONENTS = [AboutComponent , ContactComponent , HeaderComponent , HomeComponent , SkillsComponent , WorkComponent , FooterComponent]
export type Section = 'home' | 'about' | 'skills' | 'work' | 'contact' ;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
  public activeSection: Section = 'home';

  public scrollToSection(sectionId: string): void {
    this.activeSection = <Section>sectionId;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
    }, 1000);
  }
}
