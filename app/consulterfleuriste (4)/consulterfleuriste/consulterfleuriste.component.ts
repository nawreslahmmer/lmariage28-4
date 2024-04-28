import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FleuristeService } from './consulterfleuriste.service';


@Component({
  selector: 'app-consulterfleuriste',
  templateUrl: './consulterfleuriste.component.html',
  styleUrls: ['./consulterfleuriste.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule]
})
export class ConsulterFleuristeComponent implements OnInit {
  fleuristes: any = [];

  constructor(public http: HttpClient, public cf: FleuristeService) { }

  ngOnInit() {
    const fleuristesObservable = this.cf.getFleuristes();
    if (fleuristesObservable) {
      fleuristesObservable.subscribe({
        next: (response) => {
          this.fleuristes = response;
          console.log(this.fleuristes);
        },
        error: (error) => {
          console.log(error);
          alert("Erreur lors de l'affichage des fleuristes");
        }
      });
    } else {
      console.error("Observable des fleuristes non disponible");
      // Gérer l'erreur d'une autre manière, par exemple afficher un message à l'utilisateur
    }
  }
  



  // Fonction pour contacter un fleuriste
/*  contacterFleuriste(fleuriste: any) {
    this.modalService.openContactModal(fleuriste);
  }

  // Fonction pour confirmer un fleuriste pour un mariage
  confirmerFleuriste(id_fleuriste: number, id_user: number) {
    this.cf.selectFleuriste(id_fleuriste, id_user).subscribe((response: any) => {
      console.log(response);
    });
  }
  */
}

