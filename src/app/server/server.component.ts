import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created.';
  serverName = 'TEST';

  getServerStatus() {
    return this.serverStatus;
  }



  constructor() {

    setTimeout(()=> {
      this.allowNewServer = true;
    }
    ,2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    return this.serverCreationStatus = 'Server was Created. Name is ' +this.serverName;
  
   }
 
   onUpdateServerName(event:Event) {
     this.serverName = (<HTMLInputElement>event.target).value;
   }

}
