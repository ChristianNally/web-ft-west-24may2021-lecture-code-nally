
- arrays and objects are 'reference' valued
- demonstrate how they can behave strangely when you copy them
- show how to do shallow copies the long way
- show how to do shallow copies using the spread operator
- show how the order of the spread operator matters (keys later clobber previous keys)
- show how a shallow copy is not equivalent to a deep copy
- lodash for a deep copy? (depends)


- immutability as a goal
- e.g. the side effects of pop

- setState can be called two ways. calling with a callback (taking prev as a parameter, returning the new state)
  is better, because if you have multiple setState calls, using the callback will take the intermediate values
  of the state, instead of starting from the beginning each time.


