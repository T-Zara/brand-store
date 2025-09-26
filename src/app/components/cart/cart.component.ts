import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Backdrop -->
    <div *ngIf="isOpen" 
         class="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-50"
         style="z-index: 1050; backdrop-filter: blur(4px);"
         (click)="onClose()">
    </div>

    <!-- Cart Drawer -->
    <div class="offcanvas offcanvas-end show cart-drawer"
         [class.show]="isOpen"
         style="z-index: 1051; visibility: visible;"
         [style.transform]="isOpen ? 'translateX(0)' : 'translateX(100%)'">
      
      <div class="offcanvas-header bg-dark text-white border-bottom border-secondary">
        <div class="d-flex align-items-center gap-3">
          <i class="bi bi-bag fs-4"></i>
          <h5 class="offcanvas-title m-0">Shopping Cart</h5>
          <span *ngIf="totalItems > 0" class="badge bg-light text-dark">
            {{ totalItems }}
          </span>
        </div>
        <button type="button" 
                class="btn-close btn-close-white" 
                (click)="onClose()">
        </button>
      </div>

      <div class="offcanvas-body p-0 d-flex flex-column bg-dark text-white">
        <!-- Empty Cart -->
        <div *ngIf="cartItems.length === 0" 
             class="d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center">
          <i class="bi bi-bag display-1 text-muted mb-4"></i>
          <h4 class="text-white mb-2">Your cart is empty</h4>
          <p class="text-muted mb-4">Add some items to get started</p>
          <button class="btn btn-light text-dark" (click)="onClose()">
            Continue Shopping
          </button>
        </div>

        <!-- Cart Items -->
        <div *ngIf="cartItems.length > 0" class="flex-grow-1 overflow-auto p-3">
          <div class="row g-3">
            <div class="col-12" *ngFor="let item of cartItems; trackBy: trackByItemId">
              <div class="card bg-secondary border-0 h-100">
                <div class="card-body p-3">
                  <div class="row g-3 align-items-center">
                    <!-- Product Image -->
                    <div class="col-auto">
                      <img [src]="item.image" 
                           [alt]="item.name"
                           class="rounded"
                           style="width: 80px; height: 80px; object-fit: cover;">
                    </div>

                    <!-- Product Details -->
                    <div class="col">
                      <h6 class="card-title text-white mb-1 text-truncate">{{ item.name }}</h6>
                      <small class="text-muted">{{ item.collection }}</small>
                      <div *ngIf="item.size" class="small text-muted">Size: {{ item.size }}</div>
                      <div *ngIf="item.color" class="small text-muted">Color: {{ item.color }}</div>
                      
                      <div class="d-flex justify-content-between align-items-center mt-2">
                        <span class="text-white fw-bold">\${{ item.price }}</span>
                        
                        <!-- Quantity Controls -->
                        <div class="btn-group btn-group-sm">
                          <button class="btn btn-outline-light" 
                                  (click)="updateQuantity(item.id, item.quantity - 1)">
                            <i class="bi bi-dash"></i>
                          </button>
                          <span class="btn btn-outline-light disabled">{{ item.quantity }}</span>
                          <button class="btn btn-outline-light" 
                                  (click)="updateQuantity(item.id, item.quantity + 1)">
                            <i class="bi bi-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Remove Button -->
                    <div class="col-auto">
                      <button class="btn btn-sm btn-outline-danger" 
                              (click)="removeItem(item.id)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Clear Cart Button -->
          <div *ngIf="cartItems.length > 0" class="mt-3">
            <button class="btn btn-outline-danger w-100" (click)="onClearCart()">
              Clear Cart
            </button>
          </div>
        </div>

        <!-- Footer with Total and Checkout -->
        <div *ngIf="cartItems.length > 0" 
             class="border-top border-secondary p-3 bg-dark">
          
          <div class="d-flex justify-content-between align-items-center text-white mb-3">
            <span class="fs-5">Total ({{ totalItems }} items)</span>
            <span class="fs-4 fw-bold">\${{ totalPrice.toFixed(2) }}</span>
          </div>
          
          <hr class="border-secondary">
          
          <div class="d-grid gap-2">
            <button class="btn btn-light btn-lg text-dark">
              Checkout
            </button>
            <button class="btn btn-outline-light" (click)="onClose()">
              Continue Shopping
            </button>
          </div>
          
          <p class="small text-muted text-center mt-2 mb-0">
            Free shipping on orders over $500
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cart-drawer {
      transition: transform 0.3s ease-in-out;
      max-width: 400px;
      width: 100vw;
    }
    
    .offcanvas.show {
      transform: none;
    }
    
    @media (max-width: 576px) {
      .cart-drawer {
        max-width: 100%;
      }
    }
  `]
})
export class CartComponent {
  @Input() isOpen = false;
  @Input() cartItems: CartItem[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() updateQuantity = new EventEmitter<{id: number, quantity: number}>();
  @Output() removeItem = new EventEmitter<number>();
  @Output() clearCart = new EventEmitter<void>();

  get totalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  onClose(): void {
    this.close.emit();
  }

  onUpdateQuantity(id: number, quantity: number): void {
    this.updateQuantity.emit({ id, quantity });
  }

  onRemoveItem(id: number): void {
    this.removeItem.emit(id);
  }

  onClearCart(): void {
    this.clearCart.emit();
  }

  trackByItemId(index: number, item: CartItem): number {
    return item.id;
  }
}