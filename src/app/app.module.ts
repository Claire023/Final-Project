import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



const ROUTES: Route[] = [

  {path:'', component: SectionComponent},
  {path:'order', component: OrderComponent},
  {path:'book', component:BookComponent},
  {path:'service', component:ServiceComponent},
  {path:'franchise', component:FranchiseComponent},
  {path:'user', component:UserComponent},
  {path:'section', component:SectionComponent},
  {path:'login', component:   LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'test', component: TestComponent},
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
    LoginComponent,
    RegisterComponent,
    TestComponent,
    Test2Component,
    LoadingSpinnerComponent
  

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)],

    providers: [
    
    ],
    bootstrap: [AppComponent],
  
   
})
export class AppModule {

  
 }
