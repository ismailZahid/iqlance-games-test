import {Component, OnInit} from '@angular/core';
import {categories, ICategory} from "../../models/gategory";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: ICategory[] = categories;

  constructor(public gamesService: GamesService) {
  }

  ngOnInit(): void {
  }

  setCategory(cat: string) {
    this.gamesService.categoryId = cat;
    this.gamesService.filterGames();
  }

}
