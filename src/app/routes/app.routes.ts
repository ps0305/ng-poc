import {LoginComponent} from "../component/login/login.component";
import {DashboardComponent} from "../component/dashboard/dashboard.component";
import {AboutComponent} from "../component/about/about.component";
import {PortfolioComponent} from "../component/portfolio/portfolio.component";
import {Routes} from "@angular/router";


export const appRoutes:Routes=[
    //path with empty string,to load default page
    {path:"",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent,
    children:[{path:"about",component:AboutComponent},
              {path:"portfolio",component:PortfolioComponent}]}
];