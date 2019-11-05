/*
Creating and Rendering a React component

Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/

// Create a React component
var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      <li>Apples</li>
      <li>Tea</li>
    </ul>
  </div>
);

// Render a React component - Two Arguments: Argument 1 is the componenent we want to render in <>, Argument 2 is the location we want to render it, using the id.

// ReactDOM.render(component, where we want component to render);
// ReactDOM.render(componentInstance, DOMElement);
// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));

ReactDOM.render(<GroceryList />, document.getElementById("app"));

