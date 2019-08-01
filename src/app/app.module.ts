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
import {IndexComponent} from "./component/index/index.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DashboardService, LoginService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
