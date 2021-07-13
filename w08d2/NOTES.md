- React Router

Home
List
Search


1) You don't emit <a href ...> tags.

2) npm install react-router-dom

3)

<Link to="/">Home</Link>
<Link to="/">List</Link>

error: You should not use <Link> outside of a <Router>

<Router> needs to go into the top level component.

4)

import { BrowserRouter as Router, Route } from 'react-router-dom';

<Router>
  <Link to="/">Home</Link>
  <Link to="/">List</Link>
</Router>


5) What is the difference between back-end routing and front-end routing?

* When it's navigation from 'page to page' in an SPA, that's front-end routing.
* If you need to get or set data, you'll use back-end routing.

<Route> tags match paths with components to render.

<Route path="/" exact>
  <h1>Home Page</h1>
</Route>

<Route path="/search">
  <Search/>
</Route>

<Route path="*">
  <h2>404 - Not Found</h2>
</Route>


<Switch></Switch> wrap Routes in this tag to force the system to adopt the first matched <Route>

6) a few coding tips:
a) destructuring your props directly in the component's function definition is somewhat self documenting.
b)
{ loading && <h1>loading</h1> }
{ !loading && <h1>HERE ARE THE GOODS</h1> }

7)
useParams(); returns an object that contain 

8)
const history = useHistory();
const {path} = useRouteMatch();
history.push(`${path}?search=${fieldState}`);

9) const {search} = useLocation(); // get the query string from the URL

npm install query-string ( || yarn add query-string)

10) Context Demo (Counter Culture!)
- Context (to avoid 'prop drilling')
