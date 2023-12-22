import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

const  monObservable = new Observable(observer => {
  observer.next('Salut !'); // Il raconte une partie de l'histoire
  observer.next('Comment ça va ?'); // Il continue
  observer.complete(); // Il signale qu'il a fini
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

 monAbonnement = monObservable.subscribe({
  next: message => console.log(message),
  error: err => console.error('Quelque chose s\'est mal passé :', err),
  complete: () => console.log('L\'histoire est terminée !')
});



// asynchrones
//  monObservableAsync = new Observable(observer => {
//   observer.next('Salut !');

//   setTimeout(() => {
//     observer.next('Je suis revenu après une pause !');
//     observer.complete();
//   }, 2000);
// });

// this.monObservableAsync.subscribe(message => console.log(message));


}
