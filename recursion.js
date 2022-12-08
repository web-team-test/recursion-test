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
};

function parseRouteUrls(node, url, urls) {
  // Code Start
  return urls;
  // Code End
}
console.log(parseRouteUrls(Routes, 'https://www.example.com', []));
