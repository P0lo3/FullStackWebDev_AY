import React from "react";
import Form from "./components/Form";

let userIsRegistered = true;

// Using the Ternerary Operator
// function App() {
//   return (
//     <div className="container" >
//       {isLoggedIn ? <h1>Hello</h1> : <Login />}
//     </div>
//   )
// }

function App() {
  return <div className ="container">
    <Form isRegistered={userIsRegistered} />
  </div>
}

export default App;