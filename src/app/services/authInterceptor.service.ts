import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {


    //intercept est invoquée par angular automatiquement après chaque requete 
    // notre intercepteur verifie seulement la presence de notre token
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

       //on recupere le token du local storage          
        const idToken = localStorage.getItem("idToken");

        if (idToken) {
            //si on a bien un token alors on clone notre requete car on ne peux pas la modifier
            //on lui rajoute une section authorisation pour la clé et le bearer pour la valeur
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });
//fois que j'ai fais ca je retourne le prochain intercepteur 
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}



