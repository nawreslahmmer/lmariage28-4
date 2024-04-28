
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupService } from './signup.service';




interface userObjet {
  
  nom: string;
  mail: string;
  budget: number;
  nbr_invite: number;
  date_mariage: string;
  password: string;
  ville: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  user: userObjet = {
    nom: '',
     mail: '',
     budget: 0,
     nbr_invite: 0,
     date_mariage: '',
     password: '',
     ville:'',
   };

   userAjoute: boolean = false;

   constructor(private router: Router,public i : SignupService){}
   ngOnInit(): void {
   
   }
   createuser(): void {{
    const nouveauuser = {
    nom: this.user.nom,
      mail: this.user.mail,
      budget: this.user.budget,
      nbr_invite: this.user.nbr_invite,
      date_mariage: this.user.date_mariage,
      password : this.user.password,
      ville:this.user.ville
    };

    this.i.createuser(nouveauuser).subscribe({
      next: (_response) => {
        console.log(nouveauuser);
        this.userAjoute=true
        alert("COMPTE CRÉÉ AVEC SUCCÈS");
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout du user :", error);
        alert("Une erreur s'est produite lors de l'ajout du user.");
      }}
    );
  }
  }
  request(): void {
    console.log("Request button clicked");
  }

}
