import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Import BrowserModule
import { AppComponent } from './app.component';  // Import your AppComponent

@NgModule({
  declarations: [
    // AppComponent  // Declare your root component
  ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]  // Specify AppComponent as the root component
})
export class AppModule {}
