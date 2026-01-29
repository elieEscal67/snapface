import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  // --- Tableau qui va contenir tous les objets FaceSnap
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: FaceSnapsService) { }

  // --- Variables pour chaque FaceSnap
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap; 
  myLastSnap!: FaceSnap;

  ngOnInit() {
    // --- Création des objets FaceSnap
    // Chaque objet contient titre, description, image, date et nombre de snaps
    this.faceSnaps = this.faceSnapsService.getFaceSnaps()

    // --- Exemple de modification d'une propriété de l'un des objets
    // Permet de montrer que chaque objet est indépendant
   
  }

}
