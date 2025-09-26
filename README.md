# LUXE E-Commerce Angular + Bootstrap

A modern, artistic, and aesthetic e-commerce website template converted from React + Tailwind to Angular + Bootstrap.

## Features

- **Premium Design**: Sleek, luxury fashion-focused design with dark themes and neon accents
- **Responsive Layout**: Fully responsive design using Bootstrap 5
- **Modern Angular**: Built with Angular 17+ using standalone components and signals
- **Shopping Cart**: Full cart functionality with add, remove, and quantity management
- **Wishlist**: Save favorite items to wishlist
- **Profile Management**: User profile with order history and settings
- **Category Pages**: Dedicated pages for Clothing, Shoes, and Accessories
- **Product Grid**: Interactive product displays with hover effects
- **Animations**: Smooth CSS animations and transitions

## Tech Stack

- **Angular 17+**: Latest Angular with standalone components
- **Bootstrap 5**: Modern CSS framework for responsive design
- **TypeScript**: Type-safe development
- **Angular Signals**: Reactive state management
- **Bootstrap Icons**: Icon library
- **CSS Animations**: Custom animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI

### Installation

1. **Install Angular CLI**:
   ```bash
   npm install -g @angular/cli
   ```

2. **Create new Angular project**:
   ```bash
   ng new luxe-ecommerce-angular
   cd luxe-ecommerce-angular
   ```

3. **Install dependencies**:
   ```bash
   npm install bootstrap @popperjs/core @ng-bootstrap/ng-bootstrap @angular/animations
   ```

4. **Update `angular.json`** to include Bootstrap:
   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
   ],
   "scripts": [
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```

5. **Copy the converted files** from this directory structure to your Angular project

6. **Run the development server**:
   ```bash
   ng serve
   ```

### Project Structure

```
src/
├── app/
│   ├── components/          # All UI components
│   │   ├── header/
│   │   ├── hero/
│   │   ├── cart/
│   │   ├── product-grid/
│   │   └── ... (other components)
│   ├── models/              # TypeScript interfaces
│   │   └── cart-item.model.ts
│   ├── services/            # Angular services
│   │   ├── cart.service.ts
│   │   ├── wishlist.service.ts
│   │   └── navigation.service.ts
│   ├── app.component.ts     # Main app component
│   └── app.config.ts        # App configuration
├── styles.css               # Global styles
└── index.html
```

## Key Conversions Made

### 1. React → Angular Components
- Converted functional components to Angular standalone components
- Replaced React hooks with Angular signals and services
- Updated event handling to Angular syntax

### 2. Tailwind CSS → Bootstrap
- Converted utility classes to Bootstrap equivalents
- Replaced custom CSS with Bootstrap components
- Maintained responsive design patterns

### 3. State Management
- React useState → Angular signals
- Context/props → Angular services with dependency injection
- Event emitters for component communication

### 4. Styling Examples

| React + Tailwind | Angular + Bootstrap |
|------------------|---------------------|
| `className="flex items-center justify-between"` | `class="d-flex align-items-center justify-content-between"` |
| `className="bg-black text-white"` | `class="bg-dark text-white"` |
| `className="px-4 py-2 rounded-lg"` | `class="px-4 py-2 rounded"` |
| `className="grid grid-cols-1 md:grid-cols-3 gap-4"` | `class="row g-4"` with `class="col-12 col-md-4"` |

## Components

### Core Components
- **HeaderComponent**: Navigation with cart icon and item count
- **HeroComponent**: Full-screen hero section with CTA buttons
- **CartComponent**: Side drawer cart with full functionality
- **ProductGridComponent**: Responsive product grid with animations

### Page Components
- **ClothingPageComponent**: Category page with filtering
- **ShoesPageComponent**: Shoes category with size filters
- **AccessoriesPageComponent**: Accessories with type filters
- **ProfilePageComponent**: User profile and order management

### Services
- **CartService**: Cart state management with signals
- **WishlistService**: Wishlist functionality
- **NavigationService**: Page navigation state

## Customization

### Colors and Themes
Update CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #000000;
  --secondary-color: #ffffff;
  --accent-color: #6c63ff;
}
```

### Bootstrap Theme
Customize Bootstrap variables by creating a `_variables.scss` file:
```scss
$primary: #000000;
$secondary: #6c757d;
$success: #198754;
```

## Performance

- **Lazy Loading**: Implement lazy loading for route-based components
- **OnPush Strategy**: Use OnPush change detection for better performance
- **Signals**: Reactive state management with minimal re-renders

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use for personal and commercial projects.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For questions or issues, please create an issue in the repository.