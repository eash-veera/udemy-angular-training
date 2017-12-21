//this is not just a normal typescript class, insteadits a special angular component
//done by using a decorator

import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

}