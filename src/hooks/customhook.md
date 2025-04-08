this is a custom hook i build this to run get post what ever data comming i am creating a separate custom hook for that and i can reuse this.


2.Why when we use async inside useEffect then it is giving error.

 The issue arises because useEffect does not directly support the use of async functions as the main argument. The useEffect callback cannot be async because async functions implicitly return a promise, while useEffect expects either undefined or a cleanup function.