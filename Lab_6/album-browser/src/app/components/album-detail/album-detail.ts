import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {AlbumService} from '../../services/album.service';
import {Album} from '../../models/album.model';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {
  route = inject(ActivatedRoute);
  router = inject(Router);
  albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  loading = signal<boolean>(true);
  editedTitle = signal<string>('');

  ngOnInit() {
    this.route.params.subscribe({
      next: params => {
        const id = Number(params['id']);
        this.loadAlbum(id);
      }
    });
  }

  loadAlbum(id: number) {
    this.loading.set(true);
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album.set(data);
        this.editedTitle.set(data.title);
        this.loading.set(false);
      }
    });
  }

  saveAlbum() {
    const cur = this.album();

    const updatedAlbum: Album = {
      ...cur,
      title: this.editedTitle(),
      id: cur!.id,
      userId: cur!.userId

    }

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.album.set(response);
        this.editedTitle.set(response.title);
      }
    });
  }
  cancelEdit() {
    const cur = this.album();
    this.editedTitle.set(cur!.title);
  }
  viewPhotos() {
    const cur = this.album();
    this.router.navigate(['/albums', cur!.id, 'photos']);
  }
  goBack() {
    this.router.navigate(['/albums']);
  }
}
