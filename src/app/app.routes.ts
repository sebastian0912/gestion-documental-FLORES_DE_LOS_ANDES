import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArchivoComponent } from './archivo/archivo.component';
import { LockersComponent } from './lockers/lockers.component';
import { PrestamosRecibidosComponent } from './prestamos-recibidos/prestamos-recibidos.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'analisis', component: AnalisisComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'contabilidad', component: ContabilidadComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'archivo', component: ArchivoComponent },
    { path: 'lockers', component: LockersComponent },
    { path: 'prestamos-recibidos', component: PrestamosRecibidosComponent },
    { path: 'example-pdf-viewer', component: ExamplePdfViewerComponent }
];
