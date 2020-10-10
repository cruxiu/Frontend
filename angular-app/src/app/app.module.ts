import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { OrderComponent } from './order.component'
import { DetailsComponent } from './details.component'
import { ManagerComponent } from './manager.component'

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    DetailsComponent,
    ManagerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
