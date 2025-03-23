import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  texts: string[] = [
    'Web Developper ',
    'Backend Developper ',
    'Mobile Developper ',
    'Software Developper ',
    'Fullstack Developper ',
  ];
  displayedText = '';
  currentTextIndex = 0;
  charIndex = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    const currentText = this.texts[this.currentTextIndex];

    if (this.isDeleting) {
      this.displayedText = currentText.substring(0, this.charIndex--);
    } else {
      this.displayedText = currentText.substring(0, this.charIndex++);
    }

    let typingSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typingSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.typeWriter(), typingSpeed);
  }
}
