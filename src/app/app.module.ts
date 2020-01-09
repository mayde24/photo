import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectOneComponent } from './components/project-one/project-one.component';
import { ProjectTwoComponent } from './components/project-two/project-two.component';
import { ProjectThreeComponent } from './components/project-three/project-three.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHammerConfig } from './my-hammer.config';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LazyLoadImagesModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
