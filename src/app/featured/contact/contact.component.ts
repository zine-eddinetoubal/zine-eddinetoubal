import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',

  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // Ici tu peux envoyer les données du formulaire à une API ou les traiter comme tu veux
      console.log(contactForm.value); // Affiche les données dans la console pour l'instant
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  }
}
