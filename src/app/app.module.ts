import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ServiceComponent } from './components/service/service.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { OrderComponent } from './components/order/order.component';
import { BookComponent } from './components/book/book.component';
import { FranchiseComponent } from './components/franchise/franchise.component';
import { UserComponent } from './components/user/user.component';





const ROUTES: Route[] = [

  {path:'order', component: OrderComponent},
  {path:'book', component:BookComponent},
  {path:'service', component:ServiceComponent},
  {path:'franchise', component:FranchiseComponent},
  {path:'user', component:UserComponent},
  {path:'section', component:SectionComponent},
  {path:'**', component:PagenotfoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    NavComponent,
    OrderComponent, 
    BookComponent,
    FranchiseComponent,
    UserComponent,
    PagenotfoundComponent,
    ServiceComponent,
    PagenotfoundComponent,


  
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
