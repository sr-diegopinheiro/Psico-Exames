import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChooseExamComponent } from './pages/choose-exam/choose-exam.component';
import { QuestinnaireComponent } from './pages/questinnaire/questinnaire.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'choose-exam', component: ChooseExamComponent },
  { path: 'questinnaire/:id', component: QuestinnaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }