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
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatSelectModule}from '@angular/material';
import { MatOptionModule}from '@angular/material';
import { MatIconModule}from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CateringComponent } from './components/catering/catering.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FranchiseComponent } from './components/franchise/franchise.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminFranchiseComponent } from './components/admin-franchise/admin-franchise.component';
import { AdminMessageComponent } from './components/admin-message/admin-message.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AuthGuard } from './services/authGuard.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/authInterceptor.service';
import { AdminGuardService } from './services/admin-guard.service';
import { MenuComponent } from './components/menu/menu.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminAddCategoryComponent } from './components/admin-add-category/admin-add-category.component';
import { AlertComponent } from './components/alert/alert.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminEditCategoryComponent } from './components/admin-edit-category/admin-edit-category.component';
import { AdminSubCategoryComponent } from './components/admin-sub-category/admin-sub-category.component';
import { AdminAddSubCategoryComponent } from './components/admin-add-sub-category/admin-add-sub-category.component';
import { AdminEditSubCategoryComponent } from './components/admin-edit-sub-category/admin-edit-sub-category.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DatePipe } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';


const ROUTES: Route[] = [

  {path:'', component: SectionComponent},
  {path:'customer',
  canActivate: [AuthGuard],
   component:CustomerComponent},
  {path:'catering', component:CateringComponent},
  {path:'franchise', component:FranchiseComponent},
  {path:'user', component:UserComponent},
  {path:'section', component:SectionComponent},
  {path:'login', component:   LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'admin-franchise', 
  canActivate: [AdminGuardService],
  component: AdminFranchiseComponent},
  {path:'admin-message', 
  canActivate: [AdminGuardService], 
  component: AdminMessageComponent},
  {path:'menu', component:MenuComponent},
  {path:'alert', component:AlertComponent},
  {path:'admin-menu',
  canActivate: [AdminGuardService],
  component:AdminProductComponent},
  {path:'edit-product/:id',
  canActivate: [AdminGuardService],
  component:AdminEditProductComponent},
  {path:'add-product', 
  canActivate: [AdminGuardService], 
  component:AdminAddProductComponent
},
{path:'add-category', 
canActivate: [AdminGuardService], 
component:AdminAddCategoryComponent
},
{path:'admin-category', 
canActivate: [AdminGuardService], 
component:AdminCategoryComponent
},
{path:'edit-category/:id', 
canActivate: [AdminGuardService], 
component:AdminEditCategoryComponent
},
{path:'admin-sub-category', 
canActivate: [AdminGuardService], 
component:AdminSubCategoryComponent 
},
{path:'add-sub-category', 
canActivate: [AdminGuardService], 
component:AdminAddSubCategoryComponent
},
{path:'edit-sub-category/:id', 
canActivate: [AdminGuardService], 
component:AdminEditSubCategoryComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    NavComponent,
    CustomerComponent,
    FranchiseComponent,
    UserComponent,
    CateringComponent,
    LoginComponent,
    RegisterComponent,
    AdminFranchiseComponent,
    LoadingSpinnerComponent,
    MenuComponent,
    AdminProductComponent,
    AdminEditProductComponent,
    AdminAddProductComponent,
    AdminAddCategoryComponent,
    AlertComponent,
    AdminCategoryComponent,
    AdminEditCategoryComponent,
    AdminSubCategoryComponent,
    AdminAddSubCategoryComponent,
    AdminEditSubCategoryComponent,
    AdminMessageComponent,
    GalleryComponent,
   
  
  
  ],
  entryComponents: [ AlertComponent, AdminProductComponent, AdminCategoryComponent, AdminSubCategoryComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule ,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule, 
    
    
  ],

    providers: [
      AuthGuard,
      AuthService,
      DatePipe,
      //je lance un interceptor et je lui spécifie lequel
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
    
    ],
    bootstrap: [AppComponent]
  
   
})
export class AppModule {
  
 }
