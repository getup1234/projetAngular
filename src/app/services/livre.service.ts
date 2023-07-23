import { Injectable } from '@angular/core';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livres: Livre[] = []; 

  constructor() {

  }

  getLivres(searchTerm: string): Livre[] {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase(); 
      return this.livres.filter(livre =>
        livre.intitule.toLowerCase().includes(searchTermLower) // Filtre les livres dont l'intitulé ou l'auteur correspond au terme de recherche
      );
    }
    return this.livres; 
  }
  

  getLivreById(id: number): Livre | undefined | null {
    const livre = this.livres.find(livre => livre.id === id); 
    return livre || null; // Renvoie le livre s'il est trouvé, sinon renvoie null
  }
  

  ajouterLivre(livre: Livre): void {
    this.livres.push(livre); // Ajoute un livre au tableau des livres
  }

  mettreAJourLivre(livre: Livre): void {
    const index = this.livres.findIndex(l => l.id === livre.id); // Trouve l'index du livre à mettre à jour
    if (index !== -1) {
      this.livres[index] = livre; 
    }
  }

  supprimerLivre(id: number): void {
    const index = this.livres.findIndex(livre => livre.id === id); 
    if (index !== -1) {
      this.livres.splice(index, 1); // Supprime le livre du tableau des livres
    }
  }
}
