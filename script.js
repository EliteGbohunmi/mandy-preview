let menu = document.querySelector(".menu");
function opens() {
  document.querySelector("ul").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("yh");
}

ScrollReveal().reveal(".nmn", {
  distance: '500px',
opacity: 1,
  origin: 'left',
delay : 500,
opacity : 1,
});
ScrollReveal().reveal(".imp_btn", {
  distance: "500px",
  opacity: 1,
  origin: "bottom",

  opacity: 1,
});

ScrollReveal().reveal(".revie", {
  distance: "250px",
  opacity: 1,
  origin: "bottom",
  delay: 500,
 
});

ScrollReveal().reveal(".taglines", {
  distance: "50px",
duration: 300,
  interval: 500,

  easing :'ease-in',
});
ScrollReveal().reveal(".imgss", {
duration: 1000,
scale: 0.3,
  easing :'ease-in',
});
ScrollReveal().reveal(".tagline", {
  distance: "50px",
duration: 300,
  interval: 500,

  easing :'ease-in',
});

// Custom Smooth Scroll with Speed Multiplier
// No external libraries needed - just pure JavaScript

class SmoothScroll {
  constructor() {
    this.scrollMultiplier = 2;  // CHANGE THIS for scroll speed (higher = faster)
    this.smoothness = 0.1;      // How smooth (0.05 = very smooth, 0.2 = less smooth)
    this.currentScroll = window.pageYOffset;
    this.targetScroll = window.pageYOffset;
    this.isScrolling = false;
    
    this.init();
  }
  
  init() {
    // Mouse wheel scroll
    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetScroll += e.deltaY * this.scrollMultiplier;
      this.clampScroll();
    }, { passive: false });
    
    // Arrow keys and keyboard support
    window.addEventListener('keydown', (e) => {
      const scrollAmount = 100;
      
      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.targetScroll += scrollAmount * this.scrollMultiplier;
          this.clampScroll();
          break;
        case 'ArrowUp':
          e.preventDefault();
          this.targetScroll -= scrollAmount * this.scrollMultiplier;
          this.clampScroll();
          break;
        case 'PageDown':
          e.preventDefault();
          this.targetScroll += window.innerHeight * 0.8;
          this.clampScroll();
          break;
        case 'PageUp':
          e.preventDefault();
          this.targetScroll -= window.innerHeight * 0.8;
          this.clampScroll();
          break;
        case 'Home':
          e.preventDefault();
          this.targetScroll = 0;
          break;
        case 'End':
          e.preventDefault();
          this.targetScroll = this.getMaxScroll();
          break;
        case ' ':
          e.preventDefault();
          this.targetScroll += window.innerHeight * 0.8 * (e.shiftKey ? -1 : 1);
          this.clampScroll();
          break;
      }
    });
    
    // Scrollbar support
    window.addEventListener('scroll', () => {
      const currentPos = window.pageYOffset;
      if (Math.abs(currentPos - this.currentScroll) > 5) {
        this.targetScroll = currentPos;
        this.currentScroll = currentPos;
      }
    }, { passive: true });
    
    // Start animation loop
    this.animate();
  }
  
  getMaxScroll() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ) - window.innerHeight;
  }
  
  clampScroll() {
    this.targetScroll = Math.max(0, Math.min(this.targetScroll, this.getMaxScroll()));
  }
  
  animate() {
    // Smooth interpolation
    this.currentScroll += (this.targetScroll - this.currentScroll) * this.smoothness;
    
    // Apply scroll if there's movement
    if (Math.abs(this.targetScroll - this.currentScroll) > 0.5) {
      window.scrollTo(0, this.currentScroll);
    }
    
    // Continue loop
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize
new SmoothScroll();

// Change these values:
// scrollMultiplier: 1 = normal, 2 = 2x faster, 3 = 3x faster
// smoothness: 0.05 = very smooth, 0.1 = balanced, 0.2 = quick