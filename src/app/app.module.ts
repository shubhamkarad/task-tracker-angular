import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ButtonComponent } from './Components/button/button.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskItemComponent } from './Components/task-item/task-item.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FooterComponent } from './Components/footer/footer.component';

  const routes: Routes = [
    {path:'', component: TasksComponent},
    {path:'about-us', component: AboutUsComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule, 
    FormsModule, 
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
