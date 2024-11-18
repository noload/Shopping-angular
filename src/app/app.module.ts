import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClassDemoComponent } from './class-demo/class-demo.component';
import { LoginExampleComponent } from './login-example/login-example.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDemoComponent,
    LoginExampleComponent,
    StyleDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
