import {Component, inject, signal} from '@angular/core';
import {Album} from '../../models/album.model';
import {AlbumService} from '../../services/album.service';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  albumService = inject(AlbumService);


  albums = signal<Album[]>([]);
  loading = signal<boolean>(true);

  load() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      next: (data) => {
        this.albums.update(cur => cur.filter(album => album.id !== id));
      }
    })
  }

  ngOnInit() {
    this.load();
  }



}
