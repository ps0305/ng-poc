import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ContactComponent } from './component/contact/contact.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { DashboardService } from './services/dashboard.service';
import { appRoutes } from './routes/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [DashboardService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
