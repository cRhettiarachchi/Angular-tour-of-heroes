import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Hero} from "../heroes/hero";
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private herService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // This adds a 300ms time gap between inputs
      debounceTime(300),

      // Ignores the input if it is same as erlier
      distinctUntilChanged(),

      switchMap((term: string) => this.herService.searchHero(term) ),

    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
