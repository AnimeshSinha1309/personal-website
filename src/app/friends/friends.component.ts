import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Friend } from './friend.model'
import { FriendService } from './friend.service'
import * as L from 'leaflet';

// Fix for default marker icons missing in webpack
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, AfterViewInit {

  @ViewChild('friendsCarousel', { read: ElementRef }) friendsCarousel: ElementRef;
  private map: L.Map;

  friends: Friend[];

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.friendService.getFriends().subscribe(data => {
      this.friends = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Friend;
      }).sort((a: Friend, b: Friend) => ((b.degval ?? 0) - (a.degval ?? 0)))
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('placesMap', {
      center: [30, 45], // Centered between Europe and India
      zoom: 3
    });

    // CartoDB Voyager tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    const locations = [
      { name: "Bengaluru, India", coords: [12.9716, 77.5946] },
      { name: "Zurich, Switzerland", coords: [47.3769, 8.5417] },
      { name: "Locarno, Switzerland", coords: [46.1670, 8.7987] },
      { name: "Amsterdam, Netherlands", coords: [52.3676, 4.9041] },
      { name: "Abu Dhabi, UAE", coords: [24.4539, 54.3773] },
      { name: "Dubai, UAE", coords: [25.2048, 55.2708] }
    ];

    locations.forEach(loc => {
      L.marker(loc.coords as L.LatLngExpression).addTo(this.map)
        .bindPopup(`<b>${loc.name}</b>`);
    });
  }

  scrollLeft() {
    if (this.friendsCarousel) {
      this.friendsCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.friendsCarousel) {
      this.friendsCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
