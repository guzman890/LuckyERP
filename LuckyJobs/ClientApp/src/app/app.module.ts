import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsignaturaComponent } from './component/asignatura/asignatura.component';
import { BookComponent } from './component/book/book.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBookComponent } from './component/form-book/form-book.component';
import { FormAsignaturaComponent } from './component/form-asignatura/form-asignatura.component';
import { EditAsignaturaComponent } from './component/edit-asignatura/edit-asignatura.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AsignaturaComponent,
    BookComponent,
    FormBookComponent,
    FormAsignaturaComponent,
    EditAsignaturaComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'book', component: BookComponent },
      { path: 'subject', component: AsignaturaComponent },
    ]),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormBookComponent,
    FormAsignaturaComponent,
    EditAsignaturaComponent,
    EditBookComponent
  ]
})
export class AppModule { }
