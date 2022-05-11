import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { CvComponent } from './components/cv/cv.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsComponent } from './components/forms/forms.component';
import { GithubComponent } from './components/github/github.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'github', component: GithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
