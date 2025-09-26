import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { CategoryShowcaseComponent } from './components/category-showcase/category-showcase.component';
import { FeaturedCollectionsComponent } from './components/featured-collections/featured-collections.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClothingPageComponent } from './components/clothing-page/clothing-page.component';
import { ShoesPageComponent } from './components/shoes-page/shoes-page.component';
import { AccessoriesPageComponent } from './components/accessories-page/accessories-page.component';
import { NewArrivalsPageComponent } from './components/new-arrivals-page/new-arrivals-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { WishlistService } from './services/wishlist.service';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ProductGridComponent,
    CategoryShowcaseComponent,
    FeaturedCollectionsComponent,
    ProductDetailComponent,
    TestimonialsComponent,
    NewsletterComponent,
    FooterComponent,
    ClothingPageComponent,
    ShoesPageComponent,
    AccessoriesPageComponent,
    NewArrivalsPageComponent,
    ProfilePageComponent,
    CartComponent
  ],
  template: `
    <div class="min-vh-100">
      <app-header 
        [currentPage]="navigationService.currentPage()"
        [cartItemCount]="cartService.cartItemCount()"
        (navigate)="handleNavigation($event)"
        (cartClick)="toggleCart()">
      </app-header>
      
      <main>
        @switch (navigationService.currentPage()) {
          @case ('clothing') {
            <app-clothing-page 
              (productClick)="handleProductClick($event)"
              (addToCart)="addToCart($event)"
              (toggleWishlist)="toggleWishlist($event)">
            </app-clothing-page>
          }
          @case ('shoes') {
            <app-shoes-page 
              (productClick)="handleProductClick($event)"
              (addToCart)="addToCart($event)"
              (toggleWishlist)="toggleWishlist($event)">
            </app-shoes-page>
          }
          @case ('accessories') {
            <app-accessories-page 
              (productClick)="handleProductClick($event)"
              (addToCart)="addToCart($event)"
              (toggleWishlist)="toggleWishlist($event)">
            </app-accessories-page>
          }
          @case ('new-arrivals') {
            <app-new-arrivals-page 
              (productClick)="handleProductClick($event)"
              (addToCart)="addToCart($event)"
              (toggleWishlist)="toggleWishlist($event)">
            </app-new-arrivals-page>
          }
          @case ('profile') {
            <app-profile-page 
              [cartItems]="cartService.cartItems()"
              [wishlistItems]="wishlistService.wishlistItems()">
            </app-profile-page>
          }
          @case ('collections') {
            <div class="min-vh-100 d-flex align-items-center justify-content-center" 
                 style="background: linear-gradient(135deg, #212529 0%, #000000 50%, #212529 100%);">
              <div class="text-center text-white">
                <h1 class="display-4 mb-4">All Collections</h1>
                <p class="text-muted">Coming Soon</p>
              </div>
            </div>
          }
          @default {
            <app-hero></app-hero>
            <app-product-grid (addToCart)="addToCart($event)"></app-product-grid>
            <app-category-showcase></app-category-showcase>
            <app-featured-collections (addToCart)="addToCart($event)"></app-featured-collections>
            <app-product-detail></app-product-detail>
            <app-testimonials></app-testimonials>
            <app-newsletter></app-newsletter>
          }
        }
      </main>
      
      @if (navigationService.currentPage() === 'home') {
        <app-footer></app-footer>
      }
      
      <app-cart
        [isOpen]="isCartOpen"
        [cartItems]="cartService.cartItems()"
        (close)="toggleCart()"
        (updateQuantity)="updateCartQuantity($event)"
        (removeItem)="removeFromCart($event)"
        (clearCart)="clearCart()">
      </app-cart>
    </div>
  `,
  styles: [`
    .min-vh-100 {
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  isCartOpen = false;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public navigationService: NavigationService
  ) {}

  handleNavigation(page: string): void {
    this.navigationService.navigateTo(page);
  }

  handleProductClick(productId: number): void {
    console.log('Product clicked:', productId);
  }

  addToCart(event: { product: any; size?: string; color?: string }): void {
    this.cartService.addToCart(event.product, event.size, event.color);
  }

  updateCartQuantity(event: { id: number; quantity: number }): void {
    this.cartService.updateQuantity(event.id, event.quantity);
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  toggleWishlist(product: any): void {
    this.wishlistService.toggleWishlist(product);
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
}