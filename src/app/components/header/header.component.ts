import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule],
  template: `
    <nav class="navbar navbar-expand-lg fixed-top backdrop-blur border-bottom"
         [ngClass]="{
           'navbar-light bg-light-subtle': currentPage === 'home',
           'navbar-dark': currentPage !== 'home'
         }"
         [style.background]="currentPage === 'home' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'">
      
      <div class="container-fluid">
        <!-- Logo -->
        <button class="navbar-brand btn btn-link text-decoration-none p-0 border-0"
                (click)="navigate('home')"
                [ngClass]="{
                  'text-dark': currentPage === 'home',
                  'text-white': currentPage !== 'home'
                }">
          <h1 class="h2 m-0 tracking-tight">LUXE</h1>
        </button>

        <!-- Mobile toggle -->
        <button class="navbar-toggler border-0" 
                type="button" 
                (click)="isMenuOpen = !isMenuOpen"
                [attr.aria-expanded]="isMenuOpen">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Desktop Navigation -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mx-2" *ngFor="let item of navItems">
              <button class="nav-link btn btn-link text-decoration-none border-0 px-3 py-2"
                      (click)="navigate(item.page)"
                      [ngClass]="{
                        'active border-bottom border-2': currentPage === item.page,
                        'text-dark': currentPage === 'home',
                        'text-white': currentPage !== 'home',
                        'border-dark': currentPage === 'home' && currentPage === item.page,
                        'border-white': currentPage !== 'home' && currentPage === item.page
                      }">
                {{ item.label }}
              </button>
            </li>
          </ul>

          <!-- Right side icons -->
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-link p-2 border-0"
                    [ngClass]="{
                      'text-dark': currentPage === 'home',
                      'text-white': currentPage !== 'home'
                    }">
              <i class="bi bi-search"></i>
            </button>
            
            <button class="btn btn-link p-2 border-0"
                    (click)="navigate('profile')"
                    [ngClass]="{
                      'text-dark': currentPage === 'home',
                      'text-white': currentPage !== 'home'
                    }">
              <i class="bi bi-person"></i>
            </button>
            
            <button class="btn btn-link p-2 border-0 position-relative"
                    (click)="onCartClick()"
                    [ngClass]="{
                      'text-dark': currentPage === 'home',
                      'text-white': currentPage !== 'home'
                    }">
              <i class="bi bi-bag"></i>
              <span *ngIf="cartItemCount > 0" 
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    [ngClass]="{
                      'bg-dark text-white': currentPage === 'home',
                      'bg-light text-dark': currentPage !== 'home'
                    }">
                {{ cartItemCount }}
              </span>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="w-100" [ngbCollapse]="!isMenuOpen">
          <div class="navbar-nav pt-3 border-top"
               [ngClass]="{
                 'bg-light border-light': currentPage === 'home',
                 'bg-dark border-secondary': currentPage !== 'home'
               }">
            <button *ngFor="let item of navItems"
                    class="nav-link btn btn-link text-start text-decoration-none border-0 w-100"
                    (click)="navigate(item.page); isMenuOpen = false"
                    [ngClass]="{
                      'active bg-light-subtle': currentPage === item.page && currentPage === 'home',
                      'active bg-dark-subtle': currentPage === item.page && currentPage !== 'home',
                      'text-dark': currentPage === 'home',
                      'text-white': currentPage !== 'home'
                    }">
              {{ item.label }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Spacer for fixed navbar -->
    <div style="height: 80px;"></div>
  `,
  styles: [`
    .navbar {
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
    
    .tracking-tight {
      letter-spacing: -0.025em;
    }
    
    .nav-link {
      transition: all 0.2s ease;
    }
    
    .nav-link:hover {
      transform: translateY(-2px);
    }
    
    .btn:focus {
      box-shadow: none;
    }
    
    .navbar-toggler:focus {
      box-shadow: none;
    }
  `]
})
export class HeaderComponent {
  @Input() currentPage: string = 'home';
  @Input() cartItemCount: number = 0;
  @Output() navigate = new EventEmitter<string>();
  @Output() cartClick = new EventEmitter<void>();

  isMenuOpen = false;

  navItems = [
    { label: 'New Arrivals', page: 'new-arrivals' },
    { label: 'Clothing', page: 'clothing' },
    { label: 'Shoes', page: 'shoes' },
    { label: 'Accessories', page: 'accessories' },
    { label: 'Collections', page: 'collections' }
  ];

  onNavigate(page: string): void {
    this.navigate.emit(page);
    this.isMenuOpen = false;
  }

  onCartClick(): void {
    this.cartClick.emit();
  }
}