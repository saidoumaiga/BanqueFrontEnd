import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent implements OnInit {
  taille: number | undefined;
  @Output() toggleSideBarMenu: EventEmitter<any> = new EventEmitter<any>();
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    
    }
  
    toggleSideBar() {
   this.toggleSideBarMenu.emit();
   setTimeout (() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
  
    logout() {
    
    this.router.navigate(['/connexion']);
    }
  
    redirect() {
    this.router.navigate(['/employe']);
  
    }
}
