import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrudSedesComponent } from './crud-sedes/crud-sedes.component';
import { CrudJefeOperacionesComponent } from './crud-jefe-operaciones/crud-jefe-operaciones.component';
import { CrudMecanicosComponent } from './crud-mecanicos/crud-mecanicos.component';
import { CrudPropietarioVehiculoComponent } from './crud-propietario-vehiculo/crud-propietario-vehiculo.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';
import { CrudRevisionComponent } from './crud-revision/crud-revision.component';
import { CrudNotificacionesComponent } from './crud-notificaciones/crud-notificaciones.component';
import { CrudInsumosComponent } from './crud-insumos/crud-insumos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CrudSedesComponent,
    CrudJefeOperacionesComponent,
    CrudMecanicosComponent,
    CrudPropietarioVehiculoComponent,
    CrudVehiculoComponent,
    CrudRevisionComponent,
    CrudNotificacionesComponent,
    CrudInsumosComponent,
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
