import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  // === Propriétés du composant ===
  title!: string;       // Titre du FaceSnap
  description!: string; // Description associée
  createdAt!: Date;     // Date de création
  snaps!: number;       // Nombre de "snaps"
  imageUrl!: string;

  // === Méthode ngOnInit ===
  // Appelée automatiquement par Angular après que le composant a été créé
  // C'est le moment idéal pour initialiser les propriétés du composant
  ngOnInit() {
    this.title = 'Archibald';                     
    this.description = 'Mon meilleur pote depuis toujours !'; 
    this.createdAt = new Date();                
    this.snaps = 5;
    this.imageUrl  = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"                      
  }
}
