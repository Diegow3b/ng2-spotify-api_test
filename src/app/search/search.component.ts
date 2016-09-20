import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../spotify.service';
import { Artist } from '../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService],
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
    //console.log(this.searchStr);
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
            this.searchRes = res.artists.items;
        })
  }
}