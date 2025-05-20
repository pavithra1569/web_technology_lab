import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { title: 'Art 1', src: 'assets/art1.jpg' },
    { title: 'Art 2', src: 'assets/art2.jpeg' },
    { title: 'Art 3', src: 'assets/art3.jpg' },
  ];
  filteredImages = [...this.images];
  cart: string[] = [];
  favorites: string[] = [];
  showBackButton = false;

  filterArt(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredImages = this.images.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }

  showCart() {
    this.filteredImages = this.images.filter(item =>
      this.cart.includes(item.title)
    );
    this.showBackButton = true;
  }

  showFavorites() {
    this.filteredImages = this.images.filter(item =>
      this.favorites.includes(item.title)
    );
    this.showBackButton = true;
  }

  resetGallery() {
    this.filteredImages = [...this.images];
    this.showBackButton = false;
  }

  addToCart(title: string) {
    if (this.cart.includes(title)) {
      this.cart = this.cart.filter(item => item !== title);
    } else {
      this.cart.push(title);
    }
  }

  addToFavorites(title: string) {
    if (this.favorites.includes(title)) {
      this.favorites = this.favorites.filter(item => item !== title);
    } else {
      this.favorites.push(title);
    }
  }
}
