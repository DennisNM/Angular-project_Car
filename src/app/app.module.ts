import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './Componentes/footer/footer.component';
import { FaqComponent } from './Componentes/faq/faq.component';
import { RelatorioComponent } from './Componentes/relatorio/relatorio.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './Componentes/home/home.component';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { ResponsiveService } from './Services/responsive-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    RelatorioComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
