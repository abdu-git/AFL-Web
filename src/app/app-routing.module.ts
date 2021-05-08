import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'ViewLeagueTable', component: ViewLeagueTableComponent},
  { path: 'Team', component: TeamComponent}
];


// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
