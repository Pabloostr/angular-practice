import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  switchMap,
  catchError,
  EMPTY,
  filter
} from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit, OnDestroy {
  stream$:any;
  users: Array<any> = [];

  constructor(private http: GithubService) {}

  ngOnInit(): void {
    const search: any = document.getElementById('search');
      this.stream$ = fromEvent(search, 'input')
      .pipe(
        map((map: any) => map.target.value),
        debounceTime(2000),
        distinctUntilChanged(),
        filter(v => v.trim()),
        switchMap((v: any) => {
          return this.http.getUser(v).pipe(
            catchError(error => EMPTY)
          );
        })
      )
      .subscribe((res) => {
        this.users = res.items;
        // console.log(this.users)
      });
  }

  ngOnDestroy(): void {
    console.log("unsubscribe works!")
    this.stream$.unsubscribe();
  }
}
