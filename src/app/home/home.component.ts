import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    logo="../../assets/img/Webp.net-resizeimage (1).png";
  sLogo="../../assets/img/Webp.net-resizeimage.png";
  umslIS="../../assets/img/information_systems_logo.jpg"

  constructor() { }

  ngOnInit() {
  }

}
