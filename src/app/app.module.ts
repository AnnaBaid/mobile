import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewsComponent } from './components/news/news.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StatusComponent } from './components/status/status.component';
import { ProgresComponent } from './components/progres/progres.component';
import { InfoComponent } from './components/info/info.component';
import { SideComponent } from './components/side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NewsComponent,
    TasksComponent,
    StatusComponent,
    ProgresComponent,
    InfoComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
