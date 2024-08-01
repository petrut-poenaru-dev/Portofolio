import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector:'app-footer',
  templateUrl:'footer.component.html',
  styleUrls:['footer.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class FooterComponent{

  public goToLinkedin(): void {
    window.open("https://www.linkedin.com/in/petrut-poenaru-dev", "_blank");
  }

  public goToGitHub(): void {
    window.open("https://github.com/petrut-poenaru-dev", "_blank");
  }
}
