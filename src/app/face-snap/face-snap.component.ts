import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,
            NgClass,
            UpperCasePipe,
            DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  
  // --- @Input permet à ce composant enfant de recevoir un objet FaceSnap depuis le parent
  @Input() faceSnap!: FaceSnap;

  // --- Propriétés locales pour gérer l'état du bouton Snap
  snapButtonText!: string;   // texte affiché sur le bouton selon l'état
  userHasSnapped!: boolean;  // vrai si l'utilisateur a déjà cliqué sur Snap

  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit(): void {
    // --- Initialisation de l'état local
    // Angular appelle ngOnInit après avoir créé le composant et injecté @Input
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  // --- Méthode appelée lorsque l'utilisateur clique sur le bouton Snap
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap(); // retire un snap si déjà cliqué
    } else {
      this.snap();   // ajoute un snap sinon
    }
  }

  // --- Retirer un snap
  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;  // met à jour l'état local
  }

  // --- Ajouter un snap
  snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;   // met à jour l'état local
  }
}
