import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CRegisterPage } from './cRegister/cRegister.page';
import { CursoCssPage } from './cursoCss/cursoCss.page';
import { CursohtmlPage } from './cursos/cursoHtml/cursoHtml.cursos';
import { CursosPage } from './cursos/cursos.page';
import { EstructuraHtmlPage } from './cursos/estructuraHtml/estructuraHtml.cursos';
import { EtiquetasBhtmlPage } from './cursos/etiquetasBhtml/etiquetasBhtml.cursos';
import { SintaxisHtmlPage } from './cursos/sintaxisHtml/sintaxisHtml.cursos';
import { LoginPage } from './login/login.page';
import { MainPage } from './main/main.page';
import { PagesRoutingModule } from './pages.routing';
import { RegisterPage } from './register/register.page';
import { TeamPage } from './team/team.page';
import { VCorreoPage } from './vCorreo/vCorreo.page';


@NgModule({
    //se declaran todas las declaraciones de los modulos
    declarations: [RegisterPage,
                   MainPage,
                   CursosPage,
                   CRegisterPage,
                   LoginPage,
                   VCorreoPage,
                   TeamPage,
                   CursoCssPage,
                   CursohtmlPage,
                   SintaxisHtmlPage,
                   EstructuraHtmlPage,
                   EtiquetasBhtmlPage],  /// Se desclara la clase
    entryComponents: [],
    imports: [
        //BrowserModule,
         IonicModule.forRoot()
         ,PagesRoutingModule  ///Se importal el modulo  de routing
        ,FormsModule
    ],
    //providers: [],
   // bootstrap: [AppComponent],,
  })
  export class PagesModule {} /// clase llama pageModule

