import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-erroralert',
    templateUrl: './erroralert.component.html',
    styleUrls: ['./erroralert.component.css']
})
export class ErroralertComponent implements OnInit{

    constructor(){}

    ngOnInit(){
        console.log('this is from the error component !');
    }
}