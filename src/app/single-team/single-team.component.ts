import { Team } from '../team';
import { DataService } from '../data.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../game';
import { Tip } from '../tip';


@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.scss']
})
export class SingleTeamComponent implements OnInit {

  games!:Game[];
  gamesUpp!:Game[];
  gameswon!:Game[];
  gamesPlayed!:Game[];
  tips!: Tip[];
  @Input() team!: Team;
  constructor(private dataService: DataService) { }
  name!:string;
  getName(x:string): void {
    this.name=x;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getTips();
    }
    if (changes['team']) {
      this.getGames();
    }
    if (changes['team']) {
      this.getGamesWon();
    }
    if (changes['team']) {
      this.getGamesPlayed();
    }
    if (changes['team']) {
      this.getGamesUpp();
    }
  }
  ngOnInit(): void {
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      var tempArr: Tip[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.tips = tempArr;    
    });  
  }

  // all games
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.games = tempArr;    
    });
  }

   // get won games
   getGamesWon(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if(element.winnerteamid == this.team.id) tempArr.push(element);
      });
      
      this.gameswon = tempArr;    
    });
  }

  //shows games played this season

  getGamesPlayed(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if((element.hteamid == this.team.id || element.ateamid == this.team.id) && 
        element.complete == 100) tempArr.push(element);
      });
      
      this.gamesPlayed = tempArr;    
    });
  }
  
 getGamesUpp(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if((element.hteamid == this.team.id || element.ateamid == this.team.id) && 
          element.complete !== 100) tempArr.push(element);
      });
      
      this.gamesUpp = tempArr;    
    });
  }

}