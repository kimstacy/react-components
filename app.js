/*
1. Creating and Rendering a React component

Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/

// Create a React component
// var App = () => ( // GroceryList
//   <div>
//     <h2>My Grocery List</h2>
//     <ul>
//       <li>Apples</li>
//       <li>Tea</li>
//     </ul>
//   </div>
// );

/* Render a React component - Two Arguments: Argument 1 is the componenent we want to render in <>, Argument 2 is the location we want to render it, using the id.

ReactDOM.render(component, where we want component to render);
ReactDOM.render(componentInstance, DOMElement);
ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));
*/

// ReactDOM.render(<App />, document.getElementById("app"));


/*
2. Creating and Rendering nested React components

Create React components for the 2 items in your grocery list. For example, if your grocery list contains "cucumbers" and "kale", create a Cucumbers component and a Kale component

Use these two new components inside your GroceryList component instead of the hardcoded <li>s
*/

// var App = () => ( //GroceryList
//   <div>
//     <h2>My Grocery List</h2>
//     <ul>
//       <Apples />
//       <Tea />
//     </ul>
//   </div>
// );

// Create a new component for each grocery list item
//  var Apples = () => (
//    <li>Apples</li>
//  )

//  var Tea = () => (
//    <li> Tea</li>
//  )

//  ReactDOM.render(<App />, document.getElementById("app"));


/*
3. Component Properties aka "props"

Create a reusable GroceryListItem component that dynamically renders a given grocery item

Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component
*/


// Create a reusable component GroceryListItem
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceries[0]}</li>
    <li>{props.groceries[1]}</li>
    <li>{props.groceries[2]}</li>
  </ul>
);

var App = () => ( //GroceryList
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem groceries={['Apples', 'Tea', 'Oranges']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));