import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApiService } from './_service/api-service/api-service.service';
import {PokemonService} from './_service/pokemon/PokemonService';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap' ;



@NgModule({
  imports: [
    NgbModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [
    ApiService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
