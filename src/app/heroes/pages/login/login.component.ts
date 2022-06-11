import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      body {
        margin: 0;
        padding: 0;
        background-color: #17a2b8;
        height: 100vh;
      }
      #login .container #login-row #login-column #login-box {
        margin-top: 120px;
        max-width: 600px;
        height: 320px;
        border: 1px solid #9c9c9c;
        background-color: #eaeaea;
      }
      #login .container #login-row #login-column #login-box #login-form {
        padding: 20px;
      }
      #login
        .container
        #login-row
        #login-column
        #login-box
        #login-form
        #register-link {
        margin-top: -85px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}