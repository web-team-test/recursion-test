/* 
Demonstrate how to write a Recursive function that parses the Routes tree and
outputs all possible Urls for routes that have a path.

Each route can optionally have a path property, and/or a children property.
Routes with a path must be output in the final Url list.
Routes with children must be parsed to see if their descendents also have Url paths.

Full Expected Output:
https://www.example.com/account-information
https://www.example.com/account-information/profile
https://www.example.com/account-information/billing
https://www.example.com/account-information/billing/subscriptions
https://www.example.com/account-information/billing/payment-methods
https://www.example.com/projects
https://www.example.com/projects/dashboard
https://www.example.com/projects/search

Notes: Element children are not in an array, so we first need to call Array.from on the list of children before treating it like an array.
*/
const Routes = {
    name: 'root',
    children: [ 
      { 
        name: 'Account Information', 
        path: '/account-information',
        children: [
          {
            name: "Billing",
            path: '/billing',
            children: [
              { name: 'Subscriptions', path: '/subscriptions'},
              { name: 'Payment Methods', path: '/payment-methods'}
            ]
          }
        ]
      }, 
      { 
        name: 'Projects', 
        path: '/projects',
        children:[
          { name: 'Dashboard', path: '/dashboard' },
          { name: 'Search', path: '/search'}
        ]
      }
    ]
  }
  function parseRouteUrls(node, url, urls) {
    // Enter code here
    return urls;
  }
  const RouteUrls = parseRouteUrls(Routes, 'https://www.example.com', []);
  RouteUrls.forEach(url => { console.log(url) });