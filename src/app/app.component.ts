import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // --- Tableau qui va contenir tous les objets FaceSnap
  faceSnaps!: FaceSnap[];

  // --- Variables pour chaque FaceSnap
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap; 
  myLastSnap!: FaceSnap;

  ngOnInit() {
    // --- Création des objets FaceSnap
    // Chaque objet contient titre, description, image, date et nombre de snaps
    this.faceSnaps = [
      this.mySnap = new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        171
      ),
      
      this.myOtherSnap = new FaceSnap(
        'Biscotte',
        'Le chat le plus mignon du monde',
        'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg',
        new Date(),
        3
      ),
      
      this.myLastSnap = new FaceSnap(
        'Rocket',
        'Toujours prêt à décoller 🚀',
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
        new Date(),
        10
      )
    ];

    // --- Exemple de modification d'une propriété de l'un des objets
    // Permet de montrer que chaque objet est indépendant
    this.myOtherSnap.setLocation("chez ma soeur");
  }
}
