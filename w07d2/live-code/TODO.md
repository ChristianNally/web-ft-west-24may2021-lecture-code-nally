[ ] start with a Heading component that has state of its own
[ ] move that state up into the parent App.js component
[ ] demonstrate passing props to the Heading sub-component via attributes
[ ] to make children as generic as possible, they should have as little state as possible
[ ] show how hooks must be called 'top level' (i.e. never conditionally)
[ ] React is a framework, not a library. Your functions are being called from a controlling system.
[ ] Add the visitor counter, starting with an onClick that calls setNumVisitors directly
[ ] Move that out into a handler helper function called handleClick

[ ] Notice that numVisitors is some state, such that if it changes, React will trigger a rerender.
    [React scans the return section looking for which state values are used. Only those values trigger 
rerendering on changes of values.]

[ ] all event handlers should be a callback. establishing which function would get called when a click 
occurs work. actually calling a function does not (it creates infinite loops).

[ ] when we get a value back from useState, it is a constant. that 'variable' will not update when we call 
the setter.

[ ] switch the call to setNumVisitors so that it takes a callback. notice how the callback no longer refers 
to the const current Value. The parameter to that callback always gets the current state value.

http://pythontutor.com/javascript.html#code=const%20user%20%3D%20%7B%0A%20%20name%3A%20'Alice',%0A%20%20age%3A%2040,%0A%20%20snacks%3A%20%5B'pretzels'%5D%0A%7D%3B%0A%0Aconst%20copy%20%3D%20user%3B%0Acopy.name%20%3D%20'Bob'%3B%0A%0A%0Aconsole.log%28user%29%3B%0Aconsole.log%28copy%29%3B%0A&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D


[ ] add a child object on the object you are copying and show that copies are shallow

