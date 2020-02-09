import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  images = ['assets/MasterSwordCarousel.jpg', 'assets/HylianShieldCarousel.jpg', 'assets/LensofTruthCarousel.jpeg']

  constructor() { }

  ngOnInit() {
  }


}
