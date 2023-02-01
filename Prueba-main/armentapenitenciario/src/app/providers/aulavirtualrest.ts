import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';

/*
  Generated class for the AulavirtualrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({ 
  providedIn: 'root' 
})
export class AulavirtualrestProvider {
   
  //apiUrl = 'http://alb-ulavirtual-stg-668686577.eu-west-1.elb.amazonaws.com:8080/service1.svc' // STG AWS
  //apiUrl = 'http://alb-ulavirtual-pro-1497496385.eu-west-1.elb.amazonaws.com:8080/Service1.svc' // PRO AWS

  apiUrl = 'http://api.aulavirtualctp.com:8080/service1.svc';




  constructor(public http: HttpClient) {
    //console.log('Hello AulavirtualrestProvider Provider');
  }

  //#region EJEMPLOS

  // Ejemplo GET
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Ejemplo POST
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // Ejemplo POST + HEADERS
  addUser2(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'), 
        params: new HttpParams().set('id', '3')
      })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  } 

  //#endregion EJEMPLOS

  //#region LOGIN

  // Login
  loginIOS(usuario: string, password: string, idAcademia: number)
  {
    let body = {
      "Usuario": usuario,
      "Password": password,
      "IdAcademia": idAcademia
    };

    return this.http.post(this.apiUrl+'/loginios', body, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });         
  }

  login(usuario: string, password: string, idAcademia: number)
  {
    let body = {
      "Usuario": usuario,
      "Password": password,
      "IdAcademia": idAcademia
    };

    return this.http.post(this.apiUrl+'/login', body, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });         
  }

  // Recuperar Contraseña
  resetearContraseña(email: string)
  {
    return this.http.get(this.apiUrl+'/resetearpassword?email='+ email + '&idAcademia=' + AppConfig.id);
  }

  // Perfil
  obtenerPerfil(token: string, idAcademia: number)
  {
    return this.http.get(this.apiUrl+'/Init?idAcademia='+ idAcademia, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  obtenerPerfilCurso(token: string, idAcademia: number, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/InitCurso?idAcademia='+ idAcademia + '&idCurso=' + idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  //#endregion LOGIN

  //#region CURSOS

  consultarCursos(token: string)
  {
    return this.http.get(this.apiUrl+'/Cursos', {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  //#endregion CURSOS
  
  //#region TEST

  // Test
  consultarTestCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/TestCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  // Test filtrados por mes de acceso
  consultarTestCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/TestCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  // Test filtrados por mes de acceso y tema
  consultarTestCursoMesTema(token: string, idCurso: number, mesAcceso: number, modulo: number, tema: number)
  {
    return this.http.get(this.apiUrl+'/TestCursoMesTema?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso + '&Modulo=' + modulo+ '&Tema=' + tema, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

    // Test filtrados por mes de acceso y etiqueta
    consultarTestCursoMesEtiqueta(token: string, idCurso: number, mesAcceso: number, etiqueta: string)
    {
      return this.http.get(this.apiUrl+'/TestCursoMesEtiqueta?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso + '&Etiqueta=' + etiqueta, {
        headers: new HttpHeaders({
          'AuthorizationToken' : token
        })
      });
    }

  // Test de Inglés filtrados por mes de acceso
  consultarTestInglesCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/TestInglesCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  // Test de Personalidad filtrados por mes de acceso
  consultarTestPersonalidadCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/TestPersonalidadCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

   // Test de Ortografía filtrados por mes de acceso
   consultarTestOrtografiaCursoMes(token: string, idCurso: number, mesAcceso: number)
   {
     return this.http.get(this.apiUrl+'/TestOrtografiaCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
       headers: new HttpHeaders({
         'AuthorizationToken' : token
       })
     });
   } 

  // Casos Prácticos
  consultarCasosPracticosCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/CasosPracticosCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  // Casos Prácticos filtrados por mes de acceso
  consultarCasosPracticosCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/CasosPracticosCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  // Simulacros filtrados por mes de acceso
  consultarSimulacrosCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/SimulacrosCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  obtenerTest(token: string, idTest: number)
  {
    return this.http.get(this.apiUrl+'/Test?idtest='+ idTest, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  recuperarTest(token: string, idTest: number, idOposicion: number)
  {
    return this.http.get(this.apiUrl+'/RecuperarTest?idtest='+ idTest + '&idOposicion='+ idOposicion, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  obtenerImagenesTest(token: string, idTest: number)
  {
    return this.http.get(this.apiUrl+'/ImagenInicioTest?idTest='+ idTest, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  configurarTest(token: string, idTest: number, numeroPreguntas: number, minutos: number, aleatorio: boolean)
  {
    return this.http.get(this.apiUrl+'/Test?idtest='+ idTest + "&NumPreg=" + numeroPreguntas + "&Minutos=" + minutos + "&Aleatorio=" + aleatorio, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  comentarPregunta(token: string, idTest: number, idPregunta: number, posicion: number, comentario: string)
  {
    let body = {
      "IdTest": idTest,
      "IdPregunta": idPregunta,
      "Posicion": posicion,
      "Mensaje": comentario
    };

    return this.http.post(this.apiUrl+'/ComentarPregunta', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  impugnarPregunta(token: string, idTest: number, idPregunta: number, posicion: number, comentario: string)
  {
    let body = {
      "IdTest": idTest,
      "IdPregunta": idPregunta,
      "Posicion": posicion,
      "Mensaje": comentario
    };

    return this.http.post(this.apiUrl+'/ImpugnarPregunta', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  insertarRevisionTest(token: string, idTest: number)
  {
    let body = {
      "IdTest": idTest
    };

    return this.http.post(this.apiUrl+'/InsertarRevisionTest', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  insertarRevisionTestOposicion(token: string, idTest: number, idOposicion: number)
  {
    let body = {
      "IdTest": idTest
    };

    return this.http.post(this.apiUrl+'/InsertarRevisionTestOposicion?IdOposicion=' + idOposicion, body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  actualizarRevisionPreguntasTest(token: string, preguntas: any[], idTest: number, multirespuesta: number)
  {
    let body = {
      "IdTest": idTest,
      "Preguntas": preguntas,
      "Multirespuesta": multirespuesta
    };

    return this.http.post(this.apiUrl+'/ActualizarRevisionPreguntasTest', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  eliminarRevisionTest(token: string, idTest: number)
  {
    return this.http.delete(this.apiUrl+'/eliminarRevisionTest?idtest='+ idTest, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  //#endregion TEST

  //#region RESULTADOS

  consultarEstadisticas(token: string)
  {
    return this.http.get(this.apiUrl+'/Estadisticas', {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarEstadisticasCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/EstadisticasCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarResultados(token: string)
  {
    return this.http.get(this.apiUrl+'/Resultados', {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarResultadosCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/ResultadosCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  nuevoResultado(token: string, idTest: number, idTema: number, idTemario: number, aciertos: number, fallos: number, blancos: number, tiempo: number)
  {
    let body = {
      "IdTest": idTest,
      "IdTema": idTema,
      "IdTemario": idTemario,
      "Aciertos": aciertos,
      "Fallos": fallos,
      "Blancos": blancos,
      "Tiempo": tiempo
    };

    return this.http.post(this.apiUrl+'/NuevoResultado', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  nuevoResultadoOposicion(token: string, idOposicion: number, idTest: number, idTema: number, idTemario: number, aciertos: number, fallos: number, blancos: number, tiempo: number)
  {
    let body = {
      "IdTest": idTest,
      "IdTema": idTema,
      "IdTemario": idTemario,
      "Aciertos": aciertos,
      "Fallos": fallos,
      "Blancos": blancos,
      "Tiempo": tiempo
    };

    return this.http.post(this.apiUrl+'/NuevoResultadoOposicion?IdOposicion='+idOposicion, body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  nuevoResultadoOposicionTipoTest(token: string, idOposicion: number, idTest: number, tipoTest: number, idTema: number, idTemario: number, aciertos: number, fallos: number, blancos: number, dudosas: number, dudosasAcierto: number, dudosasFallo: number,tiempo: number)
  {
    let body = {
      "IdTest": idTest,
      "IdTema": idTema,
      "IdTemario": idTemario,
      "Aciertos": aciertos,
      "Fallos": fallos,
      "Blancos": blancos,
      "Dudosa": dudosas,
      "DudosasAcierto": dudosasAcierto,
      "DudosasFallo": dudosasFallo,
      "Tiempo": tiempo
    };

    return this.http.post(this.apiUrl+'/NuevoResultadoOposicionTipoTest?IdOposicion='+idOposicion+'&tipoTest='+tipoTest, body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  //#endregion RESULTADOS

  //#region DOCUMENTOS

  consultarDocsCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/DocumentosCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarDocsCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/DocumentosCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarDocsCursoMesTema(token: string, idCurso: number, mesAcceso: number, modulo: number, tema: number)
  {
    return this.http.get(this.apiUrl+'/DocumentosCursoMesTema?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso+ '&Modulo=' + modulo+ '&Tema=' + tema, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarDocsCursoMesEtiqueta(token: string, idCurso: number, mesAcceso: number, etiqueta: string)
  {
    return this.http.get(this.apiUrl+'/DocumentosCursoMesEtiqueta?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso + '&Etiqueta=' + etiqueta, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarDocsInglesCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/DocumentosInglesCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }
  
  consultarDocsOrtografiaCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/DocumentosOrtografiaCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }  

  obtenerDoc(token: string, idDoc: number)
  {
    return this.http.get(this.apiUrl+'/DocumentoCurso?ID='+ idDoc, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  marcarDocVisto(token: string, idDoc: number)
  {
    let body = {
      "ID": idDoc
    };

    return this.http.post(this.apiUrl+'/MarcarDocumentoVisto', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  //#endregion DOCUMENTOS

  //#region VIDEOS

  consultarVideosCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/VideosCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarVideosCursoMes(token: string, idCurso: number, mesAcceso: number)
  {
    return this.http.get(this.apiUrl+'/VideosCursoMes?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarVideosCursoMesTema(token: string, idCurso: number, mesAcceso: number, modulo: number, tema: number)
  {
    return this.http.get(this.apiUrl+'/VideosCursoMesTema?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso + '&Modulo=' + modulo+ '&Tema=' + tema, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarVideosCursoMesEtiqueta(token: string, idCurso: number, mesAcceso: number, etiqueta: string)
  {
    return this.http.get(this.apiUrl+'/VideosCursoMesEtiqueta?idCurso='+ idCurso + '&MesAcceso=' + mesAcceso + '&Etiqueta=' + etiqueta, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarVideosClasesCurso(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/VideosClasesCurso?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  marcarVideoVisto(token: string, idVideo: number)
  {
    let body = {
      "ID": idVideo
    };

    return this.http.post(this.apiUrl+'/MarcarVideoVisto', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  obtenerUrlVideo(token: string, idVideo: number, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/VideoUrl?idVideo='+ idVideo + '&idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  //#endregion VIDEOS

  //#region FORO

  obtenerTemasForo(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/Foro?idCurso='+ idCurso + '&html=1', {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  obtenerRespuestasTemasForo(token: string, idTema: number)
  {
    return this.http.get(this.apiUrl+'/ForoTema?idTema='+ idTema, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  nuevoTema(token: string, idCurso: number, titulo: string, comentario: string)
  {
    let body = {
      "IdCurso": idCurso,
      "IdTema": 0,
      "Titulo": titulo,
      "Comentario": comentario,
      "Usuario": "",
      "Fecha": ""
    };

    return this.http.post(this.apiUrl+'/ForoNuevoTema', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  nuevaRespuesta(token: string, idCurso: number, idTema: number, comentario: string)
  {
    let body = {
      "IdCurso": idCurso,
      "IdTema": idTema,
      "Comentario": comentario,
      "Usuario": "",
      "Fecha": ""
    };

    return this.http.post(this.apiUrl+'/ForoRespuesta', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  //#endregion FORO

  //#region EVENTOS

  consultarEventos(token: string)
  {
    return this.http.get(this.apiUrl+'/Eventos', {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  asociarEvento(token: string, codigo: string)
  {
    let body = {
      "Codigo": codigo
    };

    return this.http.post(this.apiUrl+'/AsociarEvento', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  validarAsociarEvento(token: string, id: number, codigo: string)
  {
    let body = {
      "IdCurso": id,
      "Codigo": codigo
    };

    return this.http.post(this.apiUrl+'/ValidarAsociarEvento', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  desasociarEvento(token: string, idEvento: number)
  {
    let body = {
      "IdCurso": idEvento
    };

    return this.http.post(this.apiUrl+'/DesasociarEvento', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  //#endregion EVENTOS

  //#region CONTACTO

  // Contacto
  contacto(token: string, contacto: string, destinatario: string, mensaje: string, curso: string, idAcademia: number, nombreAcademia: string, subdominioAcademia: string, infoDispositivo: string)
  {
    let body = {
      "Contacto": contacto,
      "Destinatario": destinatario,
      "Mensaje": mensaje,
      "Curso": curso,
      "IdAcademia": idAcademia,
      "NombreAcademia": nombreAcademia,
      "SubdominioAcademia": subdominioAcademia,
      "InfoDispositivo": infoDispositivo
    };

    return this.http.post(this.apiUrl+'/contacto', body, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token,
        'Content-Type':  'application/json'
      })
    });         
  }

  //#endregion CONTACTO

  //#region NOTIFICACIONES

  consultarNotificaciones(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/Notificaciones?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  consultarNotificacionesRecientes(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/NotificacionesRecientes?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }


  //#endregion NOTIFICACIONES

  //#region MÓDULOS

  consultarModulos(token: string, idCurso: number)
  {
    return this.http.get(this.apiUrl+'/Modulos?idCurso='+ idCurso, {
      headers: new HttpHeaders({
        'AuthorizationToken' : token
      })
    });
  }

  //#endregion MÓDULOS
  
}
