import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Game } from '../game';
import { Team } from '../team';
import { Tip } from '../tip';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.scss']
})
export class TeamResultComponent implements OnInit {

  games!:Game[];
  tips!: Tip[];
  @Input() team!: Team;
  // @Input() team!: Team;
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getTips();
    }
    // if (changes['team']) {
    //   this.getGames();
    // }
  }

  ngOnInit(): void {
  }
  // user story 1
  // As a fan, I want to see the prediction that my team will win their next game

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      var tempArr: Tip[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.tips = tempArr;    
    });  
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.games = tempArr;    
    });
  }
  
}
