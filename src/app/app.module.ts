import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { EventComponent } from './components/event/event.component';
import { LanTableComponent } from './components/lan-table/lan-table.component';
import { WifiTableComponent } from './components/wifi-table/wifi-table.component';
import { BleTableComponent } from './components/ble-table/ble-table.component';
import { HidTableComponent } from './components/hid-table/hid-table.component';
import { AdvancedComponent } from './components/advanced/advanced.component';

import { SignalIndicatorComponent } from './components/signal-indicator/signal-indicator.component';
import { SortableColumnComponent } from './components/sortable-column/sortable-column.component';
import { OmnibarComponent } from './components/omnibar/omnibar.component';

import { SearchPipe } from './components/search.pipe';
import { AlivePipe } from './components/alive.pipe';
import { UnbashPipe } from './components/unbash.pipe';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainHeaderComponent,

        EventsTableComponent,
        EventComponent,
        LanTableComponent,
        BleTableComponent,
        HidTableComponent,
        WifiTableComponent,
        AdvancedComponent,
        
        OmnibarComponent,
        SignalIndicatorComponent,
        SortableColumnComponent,
        SearchPipe,
        AlivePipe,
        UnbashPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
