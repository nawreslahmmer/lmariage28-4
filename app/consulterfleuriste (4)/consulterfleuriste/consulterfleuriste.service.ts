import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FleuristeService {
   baseUrl = 'http://localhost/api/consulterfleuriste.php';
 baseUrl1 = 'http://localhost/api/contacterfleuriste';
// Récupérez le token de manière appropriée depuis votre application

  constructor(public http: HttpClient ) { }

  getFleuristes() {
    // Vérifier si localStorage est disponible
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        // Créer les en-têtes avec le token
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        // Créer les options de requête avec les en-têtes
        const options = { headers };

        // Effectuer la requête HTTP avec les options
        return this.http.get(this.baseUrl, options);
      } else {
        // Si aucun token n'est disponible, afficher une alerte ou gérer l'erreur
        console.error("Token non trouvé dans localStorage");
        // Retourner une valeur par défaut ou gérer l'erreur d'une autre manière
        // Dans ce cas, nous retournons null, mais vous pouvez choisir une autre approche
        return null;
      }
    } else {
      // Si localStorage n'est pas disponible, afficher une alerte ou gérer l'erreur
      console.error("localStorage n'est pas disponible");
      // Retourner une valeur par défaut ou gérer l'erreur d'une autre manière
      // Dans ce cas, nous retournons null, mais vous pouvez choisir une autre approche
      return null;
    }
  }
}  
  
    
     
  

  /* Récupérer les informations de contact d'un fleuriste
  getFleuristeContactInfo(id_fleuriste: number) {
  
   return this.http.get(`${this.baseUrl}/${id_fleuriste}`);
  
 }

   Sélectionner un fleuriste pour un mariage
  selectFleuriste(id_fleuriste: number, id_user: number) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(`${this.baseUrl1}?id_fleuriste=${id_fleuriste}&id_mariage=${id_user}`, {}, { headers: headers });
  }
   
}*/

