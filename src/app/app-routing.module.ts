import { CrudRevisionComponent } from './crud-revision/crud-revision.component';
import { CrudNotificacionesComponent } from './crud-notificaciones/crud-notificaciones.component';
import { CrudInsumosComponent } from './crud-insumos/crud-insumos.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';
import { CrudPropietarioVehiculoComponent } from './crud-propietario-vehiculo/crud-propietario-vehiculo.component';
import { CrudMecanicosComponent } from './crud-mecanicos/crud-mecanicos.component';
import { CrudSedesComponent } from './crud-sedes/crud-sedes.component';
import { CrudJefeOperacionesComponent } from './crud-jefe-operaciones/crud-jefe-operaciones.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CrudSedesComponent},
  {path: 'sedes', component: CrudSedesComponent},
  {path: 'jefe-operaciones', component: CrudJefeOperacionesComponent},
  {path: 'mecanicos', component: CrudMecanicosComponent},
  {path: 'propietario-vehiculo', component: CrudPropietarioVehiculoComponent},
  {path: 'vehiculo', component: CrudVehiculoComponent},
  {path: 'revision', component: CrudRevisionComponent},
  {path: 'insumos', component: CrudInsumosComponent},
  {path: 'notificaciones', component: CrudNotificacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
