import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
   
    isLoggedIn: boolean = false;
    counter:number=0;
    connectionerr:string='no error';
    constructor(public authenticateservice: AuthenticationService) {

    }

    ngOnInit() {

        setInterval(()=>{this.counter++;},1000);
       
    }

    login(username: string, pass: string) {
         this.authenticateservice.isLoggedInUser(username,pass).subscribe(res=>this.isLoggedIn=res,error=>this.connectionerr = error);
    }
}