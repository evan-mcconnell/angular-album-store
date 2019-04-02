import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent {

  albums: Album[];
  constructor(private router: Router, private albumService: AlbumService) {}


 goToDetailPage(clickedAlbum: Album) {
   console.log(clickedAlbum)
  this.router.navigate(['albums', clickedAlbum.id]);
};
}
