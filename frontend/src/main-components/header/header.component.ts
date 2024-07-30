import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector:'app-header',
  templateUrl:'header.component.html',
  styleUrls:['header.component.scss'],
  standalone:true,
  imports:[CommonModule , RouterModule]
})
export class HeaderComponent{
  public logoSign = "</>"

  constructor(private _router:Router) {
  }

  public goToLinkedin(): void {
    window.open("https://www.linkedin.com/in/petrut-poenaru-dev", "_blank");
  }

  public goToGitHub(): void {
    window.open("https://github.com/petrut-poenaru-dev", "_blank");
  }
}
