import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-carousel',
  templateUrl: './people-carousel.component.html',
  styleUrls: ['./people-carousel.component.css'],
})
export class PeopleCarouselComponent implements OnInit {
  public responsiveOptions: any[] | undefined;
  @Input() items: any;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1,
      },
    ];
  }
}
