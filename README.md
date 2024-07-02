# Tree Recursion
The objective of this exercise is to use recursion to parse a tree of routes into a list of urls. The routes are JS objects with the following structure:
```javasscript
{
  name: 'Account Information', // All routes have a name
  path: '/account-information', // Optional Url path
  children: [] // Optional list of child routes
}
```
Rules:
- The solution must use **recursion**, meaning the function ***must call itself***
- The solution must utilize the provided `Routes` constant as the tree that is parsed.
- The solution should only modify code between the `// Code Start` and `// Code End` comments. 
- The solution must output the results as a single array of strings, which is then logged to the console.
- The function must output all possible URLs given a root domain of http://www.example.com and any route *path* values.

See full expected output below:
```
https://www.example.com/account-information
https://www.example.com/account-information/billing
https://www.example.com/account-information/billing/subscriptions
https://www.example.com/account-information/billing/payment-methods
https://www.example.com/projects
https://www.example.com/projects/dashboard
https://www.example.com/projects/search
```

To run the code, edit `recursion.js` and then run `node recursion.js` from a terminal.
