import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  expandedPublications: { [key: number]: boolean } = {};

  @ViewChild('jobCarousel') jobCarousel!: ElementRef;

  images: string[] = [
    'general_01.jpg',
    'dubai_01.jpg',
    'dubai_02.jpg',
    'dubai_03.jpg',
  ];
  
  currentImageIndex = 0;
  nextImageIndex = 0;
  
  // Directions: 'left', 'top', 'right', 'bottom'
  directions = ['left', 'top', 'right', 'bottom'];
  currentDirectionIndex = 0;
  
  animating = false;
  currentImageStr = "";
  nextImageStr = "";
  animationClass = "";

  constructor() { }

  ngOnInit() {
    this.shuffleImages();
    this.currentImageStr = this.images[0];
    
    // Start the loop
    setInterval(() => {
      this.triggerNextImage();
    }, 4000); // Change every 4 seconds
  }

  shuffleImages() {
    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.images[i], this.images[j]] = [this.images[j], this.images[i]];
    }
  }

  triggerNextImage() {
    if (this.animating) return;
    
    this.animating = true;
    this.nextImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.nextImageStr = this.images[this.nextImageIndex];
    
    const direction = this.directions[this.currentDirectionIndex];
    this.animationClass = `slide-in-${direction}`;
    
    // Update direction for next time
    this.currentDirectionIndex = (this.currentDirectionIndex + 1) % this.directions.length;

    // After animation completes (assumed 1s duration based on CSS), update state
    setTimeout(() => {
      this.currentImageIndex = this.nextImageIndex;
      this.currentImageStr = this.nextImageStr;
      this.animating = false;
      this.animationClass = "";
    }, 1000); 
  }

  toggleAbstract(index: number): void {
    this.expandedPublications[index] = !this.expandedPublications[index];
  }

  isExpanded(index: number): boolean {
    return this.expandedPublications[index] || false;
  }

  scrollLeft() {
    this.jobCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.jobCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
