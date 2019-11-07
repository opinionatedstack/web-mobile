// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  env: 'Prod',
  companyName: 'Opinionated Stack',
  contactUsEmail: 'info@example.com',

  auth0: {
    clientID: "YooMEqWTh4fd1XfQhUVBdhLxGxkFB19F",
    domain: "opin-stack-demo.auth0.com",
    apiIdentifier: 'https://test.opinionatedstack.com',
    callbackUri: 'https://demo.opinionatedstack.com/public/callback',
    requestedScopes:  'openid profile email post:read post:write roles:read users:read users:write',
    namespace: 'http://opinionatedstack.com/'
  },

  stripe: {
    publishable_key: 'pk_test_EnH0bdIsW8lqtEl5XNfmSOwW00bW3vkXu7',
    stripeRestServiceUrl: '/payments/webendpoints',
    purchaseableItems: {
      'one-day-purchase': {
        purchaseType: 'product',
        productData: [ {
          name: 'One Day',
          description: 'Single day access to Opinionated Stack',
          amount: 200,
          currency: 'usd',
          quantity: 1
        } ]
      },
      // the following items require synching with strip billing/subscriptions
      // Billing/subscriptions are configured on the Stripe Dashboard
      'daily-subscription': {
        purchaseType: 'subscription',
        productData: [ { plan: 'plan_FiZgAsjt8GzaEJ' } ]
      },
      'weekly-subscription': {
        purchaseType: 'subscription',
        productData: [ { plan: 'plan_FicEtYXSAxIDSU' } ]
      }
    }
  },

  restServiceURL: '/rest',
  restServiceWhitelistDomain: 'localhost',

  snackBarDuration: 2000,
  reloadDataDelay: 1500
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
