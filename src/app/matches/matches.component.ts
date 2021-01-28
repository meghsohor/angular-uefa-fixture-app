import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { MatchService } from "./match.service";


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html'
})
export class MatchesComponent implements OnInit {
  api = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=1`;
  matchColumns: string[] = ['match_no', 'round', 'team1', 'team1goals', 'team2', 'team2goals'];
  

  constructor(private http: HttpClient,
              private matchService:MatchService
            ) {

  }

  matches$ = this.matchService.getMatches$

  ngOnInit() {

  }
}