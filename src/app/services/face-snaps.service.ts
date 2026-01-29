import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        171
      ),
      
       new FaceSnap(
        'Biscotte',
        'Le chat le plus mignon du monde',
        'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg',
        new Date(),
        3
      ).withLocation("chez ma soeur"),
      
       new FaceSnap(
        'Rocket',
        'Toujours prêt à décoller 🚀',
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
        new Date(),
        10
      )
      // vos FaceSnap ici
  ];
  
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
}