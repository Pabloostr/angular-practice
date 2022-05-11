import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GithubService } from './services/github.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CvComponent } from './components/cv/cv.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsComponent } from './components/forms/forms.component';
import { GithubComponent } from './components/github/github.component';

import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CvComponent,
    TodoComponent,
    FormsComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
