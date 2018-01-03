//this is not just a normal typescript class, insteadits a special angular component
//done by using a decorator

import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p{
            font-weight:700;
            color:dark-grey;
        }
    `]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerID(){
        return this.serverId;
    }
}