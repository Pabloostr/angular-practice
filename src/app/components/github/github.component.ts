import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit, OnDestroy {
  users: Array<any> = [];
  totalCounts: number = 0;
  constructor(private http: GithubService) {}
  ngOnInit(): void {
    const search: any = document.getElementById('search');
    fromEvent(search, 'input')
      .pipe(
        map((map: any) => map.target.value),
        debounceTime(2000),
        distinctUntilChanged(),
        switchMap((v: any) => {
          return this.http.getUser(v);
        })
      )
      .subscribe((res) => {
        this.users = res.items;
        this.totalCounts = res.totalCounts;
      });
  }

  ngOnDestroy(): void {}//зробити відписку
}
