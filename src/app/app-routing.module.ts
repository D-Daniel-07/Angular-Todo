import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { TodaysEventComponent } from './todays-event/todays-event.component';

const routes: Routes = [
  {path:'',component:EventListComponent, data: { reuse: true}},
  {path:'event-form',component:EventFormComponent, data: { reuse: true}},
  {path:'todays-event',component:TodaysEventComponent, data: { reuse: true}}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
