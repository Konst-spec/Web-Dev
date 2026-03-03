import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {AlbumService} from '../../services/album.service';
import {Photo} from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  photos = signal<Photo[]>([]);
  albumId = signal<number | null>(null);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = Number(params['id']);
        this.albumId.set(id);
        this.loadPhotos(id);
      }
    });
  }

  loadPhotos(albumId: number): void {
    this.loading.set(true);
    this.albumService.getAlbumPhotos(albumId).subscribe({
      next: (data) => {
        this.photos.set(data);
        this.loading.set(false);
      }
    });
  }

  goBackToAlbum(): void {
    const id = this.albumId();
    this.router.navigate(['/albums', id]);
  }

}
