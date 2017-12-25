import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsertableComponent } from './components/usertable/usertable.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import { MenuComponent } from './menu/menu.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GridlistComponent } from './gridlist/gridlist.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { StepwiseComponent } from './stepwise/stepwise.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { AccordianComponent } from './accordian/accordian.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogComponent,DialogOverviewExampleDialog } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PizzaPartyComponent } from './pizza-party/pizza-party.component';

@NgModule({
  declarations: [
    AppComponent, UsertableComponent,AutocompleteComponent, MenuComponent, GridlistComponent, CardComponent,
    StepwiseComponent,DialogOverviewExampleDialog,
    TabsComponent,
    AccordianComponent,
    DialogComponent,
    SnackbarComponent,
    PizzaPartyComponent 
  ],

  imports: [MatDialogModule,MatSnackBarModule,
    BrowserModule,MatGridListModule,MatCardModule,MatStepperModule,MatTabsModule,MatExpansionModule,
    BrowserAnimationsModule,MatNativeDateModule,MatRippleModule,MatFormFieldModule,
    HttpClientModule,MatSlideToggleModule,MatDatepickerModule,MatSliderModule,
    MatTableModule,MatCheckboxModule,MatAutocompleteModule,MatInputModule,MatSidenavModule,
    MatSelectModule,FormsModule,MatMenuModule,
    ReactiveFormsModule,
  ],
  entryComponents:[DialogOverviewExampleDialog,PizzaPartyComponent],
  providers: [UserService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
