import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector:'app-work',
  templateUrl:'work.component.html',
  styleUrls:['work.component.scss'],
  standalone:true,
  imports:[CommonModule , SlickCarouselModule]
})
export class WorkComponent{
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": false,
    "dots":true,
    "autoplaySpeed": 3000,
    "arrows": true,
  };

  public goToJurist(){
    window.open("https://juristhub.ro/", "_blank")
  }

  public goToFloAuto(){
    window.open("  https://floautolease.ro/acasa", "_blank")
  }
}
