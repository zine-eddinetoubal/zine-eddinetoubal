import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;

  constructor(private http: HttpClient) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = contactForm.value;
      this.http.post('https://zine-eddinetoubal.fr/send-mail.php', formData, { responseType: 'text' })
        .subscribe({
          next: () => {
            this.showMessage("✅ Message envoyé avec succès !", 'success');
            contactForm.resetForm();
          },
          error: (error) => {
            console.error("Erreur d'envoi :", error);
            this.showMessage("❌ Une erreur est survenue lors de l'envoi du message.", 'error');
          }
        });
    } else {
      this.showMessage("⚠️ Veuillez remplir tous les champs obligatoires.", 'error');
    }
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.message = message;
    this.messageType = type;

    setTimeout(() => {
      this.message = null;
      this.messageType = null;
    }, 3000);
  }
}
