import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../services/games.service";
import {combineLatest, map, Observable} from "rxjs";
import {Game} from "../../models/game";
import {Jackpot} from "../../models/jackpot";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public gamesService: GamesService) {
  }

  ngOnInit(): void {
    const getGames$: Observable<Game[]> = this.gamesService.getGames();
    const getJackpots$: Observable<Jackpot[]> = this.gamesService.getJackpots();
    combineLatest([getGames$, getJackpots$])
      .pipe(
        map(([games, jackpots]) => this.mapJackpots(games, jackpots)
        )
      )
      .subscribe(games => {
        this.gamesService.setGames(games);
        // update jackpots every 5000 seconds
        setInterval(()=>{this.updateJackpot()}, 5000);
      });
  }

  updateJackpot() {
    const getJackpots$: Observable<Jackpot[]> = this.gamesService.getJackpots();
    getJackpots$
      .pipe(map(jackpots => this.mapJackpots(this.gamesService.games, jackpots)))
      .subscribe(games => this.gamesService.setGames(games));
  }

  private mapJackpots(games: Game[], jackpots: Jackpot[]) {
    return games.map(game => {
      const jackpot: number | undefined = jackpots.find(jp => jp.game === game.id)?.amount;
      jackpot && game.categories.push('jackpots');
      return {...game, jackpot: jackpot};
    })
  }

}
