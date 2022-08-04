import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Game} from "../models/game";
import {Jackpot} from "../models/jackpot";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  categoryId: string = 'new';
  games: Game[] = [];
  displayedGames: Game[] = [];

  constructor(private http: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(environment.url + 'games.php');
  }

  getJackpots(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(environment.url + 'jackpots.php');
  }

  setGames(games: Game[]) {
    this.games = games;
    this.filterGames();
  }

  filterGames() {
    this.displayedGames = this.games
      .filter(game => this.categoryId !== 'other' ? game.categories.includes(this.categoryId) : ['ball', 'virtual', 'fun'].some(cat => game.categories.includes(cat)))
      .map(game => ({...game}));
  }
}
