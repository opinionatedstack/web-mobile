import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StripePaymentsService } from '../../../services/stripe-payments/stripe-payments.service';
import { MatSnackBar } from '@angular/material';
import { environment } from './../../../../environments/environment';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-stripe-thanks',
  templateUrl: './stripe-thanks.component.html',
  styleUrls: ['./stripe-thanks.component.scss']
})
export class StripeThanksComponent implements OnInit {
  sessionId: string;
  session: any;
  env: string;
  paymentReferenceId: string;

  constructor(private auth: AuthService,
              private stripe: StripePaymentsService,
              private snackMessage: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      console.log(params);
      this.sessionId = params['session_id'];
      this.loadData();

      try {
        this.auth.getTokenSilently$({ ignoreCache: true });
      } catch (e) {
        console.log('error in getTokenSilently$', e);
      }

      const auth0AppMetadata: any = await this.auth.getTokenClaim(environment.auth0.namespace + 'app_metadata');
      console.log('thanks onInit. got auth0 app metadata');
      console.log(JSON.stringify(auth0AppMetadata, null, 4));

      const roles: any = await this.auth.getTokenClaim(environment.auth0.namespace + 'roles');
      console.log('thanks onInit. got auth0 app roles');
      console.log(JSON.stringify(roles, null, 4));


    });

  }

  loadData() {
    this.stripe.getSession({sessionId: this.sessionId})
      .subscribe(r => {
        this.session = r;
        console.log('thanks.session');
        console.log(this.session);
      }, e => {
        this.snackMessage.open('Error getting purchase session', null,{duration:  environment.snackBarDuration, verticalPosition: 'top'});
      });
  }


}
