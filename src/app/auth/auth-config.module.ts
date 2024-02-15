import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        // authority: 'https://login.microsoftonline.com/common/v2.0',
        authority:
          'https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a/v2.0',
        // authWellknownEndpointUrl:
        //   'https://login.microsoftonline.com/common/v2.0',
        // redirectUrl: window.location.origin,
        redirectUrl: 'http://localhost:4200/profile',
        postLogoutRedirectUri: 'http://localhost:4200/home',
        clientId: 'd50a85fa-cf60-4969-b0bf-c6066b2d4201',
        scope: 'offline_access openid profile User.Read', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: true,
        autoUserInfo: false,
        customParamsAuthRequest: {
          prompt: 'select_account', // login, consent
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
