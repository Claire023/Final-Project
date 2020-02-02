import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule}from '@angular/material';
import { MatOptionModule}from '@angular/material';
import { MatIconModule}from '@angular/material/icon';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ServiceComponent } from './components/service/service.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BookComponent } from './components/book/book.component';
import { FranchiseComponent } from './components/franchise/franchise.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './services/authGuard.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/authInterceptor.service';
import { AdminGuardService } from './services/admin-guard.service';
import { TestMenuComponent } from './components/test-menu/test-menu.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';


const ROUTES: Route[] = [

  {path:'', component: SectionComponent},
  {path:'book',
  canActivate: [AuthGuard],
   component:BookComponent},
  {path:'service', component:ServiceComponent},
  {path:'franchise', component:FranchiseComponent},
  {path:'menu', component:MenuComponent},
  {path:'user', component:UserComponent},
  {path:'section', component:SectionComponent},
  {path:'login', component:   LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'test', 
  canActivate: [AdminGuardService],
  component: TestComponent},
  {path:'test2', 
  canActivate: [AdminGuardService], 
  component: Test2Component},
  {path:'test-menu', 
  canActivate: [AdminGuardService],
  component:TestMenuComponent},
  {path:'**', component:PagenotfoundComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    NavComponent,
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
    LoadingSpinnerComponent,
    MenuComponent,
    TestMenuComponent,
    AdminProductComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule ,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule, 
    
  ],

    providers: [
      AuthGuard,
      AuthService,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
    
    ],
    bootstrap: [AppComponent]
  
   
})
export class AppModule {
  
 }
