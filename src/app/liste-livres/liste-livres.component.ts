import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre.model';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {
  livres: Livre[] = []; 
  searchTerm: string = ''; 
  constructor(private livreService: LivreService, private router: Router) { }

  ngOnInit(): void {
    this.livres = this.livreService.getLivres(this.searchTerm); // Récupère les livres en utilisant le service LivreService lors de l'initialisation du composant
  }

  rechercher(): void {
    this.livres = this.livreService.getLivres(this.searchTerm);
  }

  mettreAJourLivre(livre: Livre): void {
    const livreToUpdate = this.livreService.getLivreById(livre.id); // Récupère le livre à mettre à jour en utilisant l'ID passé en paramètre
    if (livreToUpdate) {
      livreToUpdate.intitule = livre.intitule;
      livreToUpdate.auteur = livre.auteur;
      livreToUpdate.anneePublication = livre.anneePublication;

      // Met à jour le livre dans le service LivreService
      this.livreService.mettreAJourLivre(livreToUpdate);
    }
  }

  ouvrirFormulaireMiseAJour(livre: Livre): void {
    this.router.navigate(['/mise-a-jour-livre', livre.id]); // Navigue vers le formulaire de mise à jour du livre en utilisant le Router avec l'ID du livre passé en paramètre
  }

  supprimerLivre(id: number): void {
    this.livreService.supprimerLivre(id); // Supprime le livre en utilisant le service LivreService avec l'ID passé en paramètre
    this.livres = this.livreService.getLivres(this.searchTerm); // Met à jour la liste des livres après la suppression
  }
}
