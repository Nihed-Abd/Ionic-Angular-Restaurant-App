import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToPage(page: string) {
    const container = document.createElement('div');
    container.classList.add('animation-container');

    document.body.appendChild(container);

    setTimeout(() => {
      this.router.navigate(['/products'], { queryParams: { category: page } });
    }, 1000); // Delay to allow animation to play

    setTimeout(() => {
      document.body.removeChild(container);
    }, 2000); // Remove animation container after it plays
  }
}
