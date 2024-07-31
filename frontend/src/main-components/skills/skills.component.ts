import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector:'app-skills',
  templateUrl:'skills.component.html',
  styleUrls:['skills.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class SkillsComponent{
    public skills: { name:string , color:string , icon:string }[] = [
      {
      name:"HTML",
      color:"#E54F26",
      icon:"icon-html-five2"
    },
      {
        name:"SCSS",
        color:"#CC669B",
        icon:"icon-sass"
      },
      {
        name:"JS",
        color:"#E7A020",
        icon:"icon-js"
      },
      {
        name:"TS",
        color:"#0C73B8",
        icon:"icon-typescript"
      },
      {
        name:"ANGULAR",
        color:"#BD002E",
        icon:"icon-angular"
      },
    ];
}
