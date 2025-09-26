import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItemsSignal = signal<Product[]>([]);

  // Public readonly signals
  wishlistItems = this.wishlistItemsSignal.asReadonly();
  wishlistCount = computed(() => this.wishlistItemsSignal().length);

  toggleWishlist(product: Product): void {
    const exists = this.wishlistItemsSignal().find(item => item.id === product.id);
    
    if (exists) {
      this.wishlistItemsSignal.update(items => 
        items.filter(item => item.id !== product.id)
      );
    } else {
      this.wishlistItemsSignal.update(items => [...items, product]);
    }
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistItemsSignal().some(item => item.id === productId);
  }

  removeFromWishlist(productId: number): void {
    this.wishlistItemsSignal.update(items => 
      items.filter(item => item.id !== productId)
    );
  }

  clearWishlist(): void {
    this.wishlistItemsSignal.set([]);
  }
}