import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employe } from '../modele/employe';
import { Reponse } from '../modele/reponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  public currentUserSubject:BehaviorSubject<any> | undefined;
  public currentUser = new Subject<void>();

  constructor(private http : HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
  }

  public get currentUserValue():Employe{
    return this.currentUserSubject?.value
  }

  enregistrer(employe : Employe): Observable<Reponse<Employe>>{
    return this.http.post<Reponse<Employe>>(`${environment.backendUrl}/api/auth/signup`,employe);
  }

  connexion(employe : Employe):Observable<Reponse<Employe>>{
    return this.http.post<Reponse<Employe>>(`${environment.backendUrl}/api/auth/signin`,employe)
    .pipe(map(resultat =>{
      console.log(resultat);
      localStorage.setItem('currentUser', JSON.stringify(resultat.body))
      return resultat;
    }))
  } 
  logout(){
    
  }
}
