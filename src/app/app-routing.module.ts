import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { HomeComponent } from './Componentes/home/home.component';
import { RelatorioComponent } from './Componentes/relatorio/relatorio.component';
import { FaqComponent } from './Componentes/faq/faq.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'faq', component: FaqComponent }

];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    ClarityModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
