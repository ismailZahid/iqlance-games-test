import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {
  @Input() categories: string[] = [];
  label: string = '';

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    const isCurrentTop = this.categories.includes('top');
    const isCurrentNew = this.categories.includes('new');
    if (this.gamesService.categoryId === 'top') {
      if (isCurrentNew) {
        this.label = 'New';
      }
    } else if (this.gamesService.categoryId === 'new') {
      if (isCurrentTop) {
        this.label = 'Top';
      }
    } else {
      // I prioritized new over top ribbon when a game is both new and top.
      if (isCurrentNew) {
        this.label = 'New';
      } else if (isCurrentTop) {
        this.label = 'Top';
      }
    }
  }
}
