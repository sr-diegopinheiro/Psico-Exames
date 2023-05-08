import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ButtonExamComponent } from './components/button-exam/button-exam.component';
import { AppRoutingModule } from './app-routing.module';
import { ChooseExamComponent } from './pages/choose-exam/choose-exam.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TdahComponent } from './components/tdah/tdah.component';
import {MatRadioModule} from '@angular/material/radio';
import { QuestinnaireComponent } from './pages/questinnaire/questinnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonExamComponent,
    ChooseExamComponent,
    TdahComponent,
    QuestinnaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
