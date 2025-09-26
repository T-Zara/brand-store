import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section position-relative overflow-hidden">
      <!-- Background Image -->
      <div class="hero-bg position-absolute top-0 start-0 w-100 h-100">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzU4NzIyNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
             alt="Luxury Fashion Model"
             class="w-100 h-100 object-fit-cover">
        <div class="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      <!-- Content -->
      <div class="container-fluid h-100 position-relative">
        <div class="row h-100 align-items-center">
          <div class="col-lg-6 offset-lg-1 text-white">
            <div class="hero-content animate-fade-in">
              <h1 class="display-1 fw-bold mb-4 tracking-tight">
                REDEFINE
                <span class="d-block gradient-text">LUXURY</span>
              </h1>
              <p class="lead mb-5 opacity-90">
                Discover our curated collection of premium fashion pieces that embody 
                sophistication and contemporary style.
              </p>
              <div class="d-flex flex-column flex-sm-row gap-3">
                <button class="btn btn-light btn-lg px-4 py-3 text-dark fw-semibold hover-scale">
                  SHOP COLLECTION
                </button>
                <button class="btn btn-outline-light btn-lg px-4 py-3 fw-semibold hover-scale">
                  WATCH LOOKBOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="position-absolute bottom-0 start-50 translate-middle-x pb-4">
        <div class="scroll-indicator d-flex flex-column align-items-center text-white">
          <span class="small mb-2 opacity-75">SCROLL</span>
          <div class="scroll-line bg-white opacity-75"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      height: 100vh;
      min-height: 600px;
    }

    .overlay {
      background: linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
    }

    .gradient-text {
      background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .tracking-tight {
      letter-spacing: -0.05em;
    }

    .animate-fade-in {
      animation: fadeInUp 1s ease-out;
    }

    .hover-scale {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hover-scale:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    .scroll-indicator {
      animation: bounce 2s infinite;
    }

    .scroll-line {
      width: 2px;
      height: 30px;
      animation: scrollLine 2s ease-in-out infinite;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    @keyframes scrollLine {
      0% {
        height: 30px;
        opacity: 0.75;
      }
      50% {
        height: 50px;
        opacity: 1;
      }
      100% {
        height: 30px;
        opacity: 0.75;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 80vh;
        min-height: 500px;
      }
      
      .display-1 {
        font-size: 3rem;
      }
    }
  `]
})
export class HeroComponent {
}