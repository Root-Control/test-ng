import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs';
import { Joke } from '../../../common/models/joke';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public joke$: Observable<Joke>;

  constructor(private readonly route: ActivatedRoute,
  			  private readonly jokesService: JokesService) { }

  ngOnInit(): void {
  	const jokeId = this.route.snapshot.paramMap.get('jokeId');
  	this.joke$ = this.jokesService.getJokeById(jokeId);
  }

}
