import { Component } from '@angular/core';
import { PeopleService } from './shared/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people;
  constructor(
    public ps: PeopleService
  ) {}

  ngOnInit() {
    this.ps.fetch().subscribe( people => this.people = people);
  }
}
