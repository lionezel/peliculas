import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
})
export class SerieDetailComponent {
  public detail_arr: any;
  public credits_arr: any;
  public genres_arr: any;
  public keyword_arr: any;
  public recommendations_arr: any;
  public networks_arr: any;

  constructor(
    private serieServices: serieService,
    private activatedRoute: ActivatedRoute
  ) {
    const { id } = this.activatedRoute.snapshot.params;

    //detail
    this.serieServices.detail_series(id).subscribe((response) => {
      console.log(response);
      this.detail_arr = response;

      //credits
      this.serieServices.detail_credits_series(id).subscribe((response) => {
        this.credits_arr = response.crew;
      });

      //recommendations
      this.serieServices
        .detail_recommendations_series(id)
        .subscribe((response) => {
          console.log(response);
          this.recommendations_arr = response;
        });

      //networks
      this.serieServices
        .detail_recommendations_series(id)
        .subscribe((response) => {
          this.networks_arr = response.networks;
          console.log(this.networks_arr);
        });
    });
  }
}
