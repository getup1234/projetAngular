import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../models/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-mise-a-jour-livre',
  templateUrl: './mise-a-jour-livre.component.html',
  styleUrls: ['./mise-a-jour-livre.component.css']
})
export class MiseAJourLivreComponent implements OnInit {
  livre: any; 

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private livreService: LivreService 
  ) {}

  ngOnInit(): void {
    const livreId = Number(this.route.snapshot.paramMap.get('id')); 
    this.livre = this.livreService.getLivreById(livreId); // Récupère le livre à mettre à jour en utilisant le service LivreService et l'ID du livre
    if (!this.livre) {
      this.router.navigate(['/livre-non-trouve']); // Rediret vers une page d'erreur ou de livre non trouvé
    }
  }

  mettreAJourLivre(): void {
    this.livreService.mettreAJourLivre(this.livre); 
    this.router.navigate(['/livres']); // Redirect vers la liste des livres après la mise à jour
  }
}
