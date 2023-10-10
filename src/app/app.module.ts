import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntoComponent } from './into/into.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { EInfoComponent } from './e-info/e-info.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    NavbarComponent,
    IntoComponent,
    CoursesComponent,
    FooterComponent,
    EInfoComponent,
    NgswitchComponent,
    PipesComponent,
    CustompipePipe,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
