import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<CartItem[]>([]);

  // Public readonly signals
  cartItems = this.cartItemsSignal.asReadonly();
  cartItemCount = computed(() => 
    this.cartItemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );
  cartTotal = computed(() =>
    this.cartItemsSignal().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );

  addToCart(product: Product, selectedSize?: string, selectedColor?: string): void {
    const existingItem = this.cartItemsSignal().find(item => 
      item.id === product.id && 
      item.size === selectedSize && 
      item.color === selectedColor
    );

    if (existingItem) {
      this.updateQuantity(existingItem.id, existingItem.quantity + 1);
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        collection: product.collection,
        price: product.price,
        image: product.image,
        quantity: 1,
        size: selectedSize,
        color: selectedColor,
        category: product.category || 'clothing'
      };
      this.cartItemsSignal.update(items => [...items, newItem]);
    }
  }

  updateQuantity(id: number, quantity: number): void {
    if (quantity === 0) {
      this.removeFromCart(id);
    } else {
      this.cartItemsSignal.update(items => 
        items.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  }

  removeFromCart(id: number): void {
    this.cartItemsSignal.update(items => items.filter(item => item.id !== id));
  }

  clearCart(): void {
    this.cartItemsSignal.set([]);
  }

  getCartItem(id: number): CartItem | undefined {
    return this.cartItemsSignal().find(item => item.id === id);
  }
}