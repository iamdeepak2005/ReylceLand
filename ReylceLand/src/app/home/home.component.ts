import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  zoomLevel: number = 1; // Initial zoom level (100%)

  // Handle scroll event to zoom in or out the image
  onScroll(event: WheelEvent): void {
    // If zoom level is less than 200%, allow zoom behavior
    if (this.zoomLevel < 2) {
      event.preventDefault(); // Prevent default scroll behavior

      // If scrolling down, zoom in (smaller increments)
      if (event.deltaY > 0) {
        this.zoomLevel += 0.02; // Zoom in by 2% per scroll down
      }
      // If scrolling up, zoom out
      else {
        this.zoomLevel -= 0.02; // Zoom out by 2% per scroll up
      }

      // Ensure zoom level stays within 100% and 200%
      if (this.zoomLevel < 1) {
        this.zoomLevel = 1; // Minimum zoom level is 100%
      }
      if (this.zoomLevel > 2) {
        this.zoomLevel = 2; // Maximum zoom level is 200%
      }

      // Apply the zoom effect to the image
      const image = document.querySelector('.zoom-image') as HTMLImageElement;
      if (image) {
        image.style.transform = `scale(${this.zoomLevel})`;
      }
    }

    // Once zoom level reaches 200%, stop preventing default scroll and let the page scroll
    if (this.zoomLevel === 2) {
      event.stopPropagation(); // Stop preventing zooming, allow scrolling the page
    }
  }}
