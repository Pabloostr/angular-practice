import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

import { catchError, debounceTime, distinctUntilChanged, fromEvent, map, switchMap, take } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor(private http: GithubService) {  }

  ngOnInit(): void {
  }

  search(event:any) {
    // const search:any = document.getElementById("search");
    // fromEvent(search, "input")
    // .pipe(
    //   map((e:any) => e.target.value),
    //   debounceTime (1000)
    // ).subscribe(res => {
    //   console.log(res)
    // })
    this.http.getUser(event.target.value)
    .pipe(
      debounceTime(2000),
      distinctUntilChanged(),
      catchError(val => val)
    ).subscribe(res => console.log(res))
  }
  
}
