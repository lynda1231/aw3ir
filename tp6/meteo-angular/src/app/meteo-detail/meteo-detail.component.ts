import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MeteoService } from '../services/meteo.service'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.css']
})
export class MeteoDetailComponent implements OnInit {

  meteo: any;
  meteo5: any;

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMeteo();
  }

  getMeteo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    // pour lire la paramètre 'name' dans l'URL de la page  comme définit dans le router avec
    // path: 'meteo/:name'

    console.log('getmeteo', name);
    if (name) {
      this.meteoService.getMeteo(name)
        .then(meteo => this.meteo = meteo)
        .catch(fail => this.meteo = fail);
    }
  }

  getMeteo5(): void {
    const name = this.route.snapshot.paramMap.get('name');
    // pour lire la paramètre 'name' dans l'URL de la page  comme définit dans le router avec
    // path: 'meteo/:name'

    console.log('getmeteo', name);
    if (name) {
      this.meteoService.getMeteo5(name)
        .then(meteo => this.meteo5 = meteo)
        .catch(fail => this.meteo5 = fail);
    }
  }
  trackByFn(index: number, item: any) {
    return item.id;
  };

}