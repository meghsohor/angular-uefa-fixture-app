import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { MatchService } from "./matches.service";


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html'
})
export class MatchesComponent implements OnInit {
  api = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=1`;
  

  constructor(private http: HttpClient,
              private matchService:MatchService
            ) {

  }

  matches$ = this.matchService.getMatches$

  ngOnInit() {

  }
}