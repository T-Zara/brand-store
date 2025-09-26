import { Injectable, signal } from '@angular/core';

export type PageType = 'home' | 'clothing' | 'shoes' | 'accessories' | 'new-arrivals' | 'profile' | 'collections';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentPageSignal = signal<PageType>('home');

  // Public readonly signal
  currentPage = this.currentPageSignal.asReadonly();

  navigateTo(page: PageType): void {
    this.currentPageSignal.set(page);
    
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  isCurrentPage(page: PageType): boolean {
    return this.currentPageSignal() === page;
  }

  goHome(): void {
    this.navigateTo('home');
  }

  goBack(): void {
    // Simple back functionality - go to home
    this.navigateTo('home');
  }
}