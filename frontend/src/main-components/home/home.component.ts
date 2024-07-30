import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector:'app-home',
  templateUrl:'home.component.html',
  styleUrls:['home.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class HomeComponent{
  public pTag = "<p>";
  public pTagEnd = "</p>"
  public h1Tag = "<h1>";
  public h1TagEnd = "</h1>"
}
