import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss'
  ]
})
export class NavbarComponent  {

  term: string = '';  //Term of search

  constructor( private router: Router ) { }

  

  onSubmit(){

    // Construction route with result of search for item

    this.router.navigate(['/items'], { queryParams: { search: this.term } })
    
  } 

}
