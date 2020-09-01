import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs';
import { Joke } from '../../../common/models/joke';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public searchCriteria: string = '';
	public jokes$: Observable<Joke[]>;
	public columns: string[] = ['id', 'categories', 'joke', 'actions'];

	constructor(private readonly jokesService: JokesService) { }

	ngOnInit(): void {
		this.jokes$ = this.jokesService.listJokes();
		this.jokesService.listJokes().subscribe(joke => console.log(joke));
	}

}
