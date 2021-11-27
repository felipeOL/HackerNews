import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoryComponent} from "./components/story/story.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {path:'top',component:StoryComponent},
  {path:'404',component:ErrorComponent},
  {path:'', redirectTo:'top',pathMatch:'full'},
  {path:'**', redirectTo:'404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
