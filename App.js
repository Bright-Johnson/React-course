/*

<div>
    <div>
        <h1>
        </h1>
    </div>
</div>


*/

/*This is for testing*/ 
const header = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, 
  [
  React.createElement('h1', {id:'child1'}, 'i am 1st Child'),
  React.createElement('h3', {id:'child2'}, 'i am 2nd Child'),
  ]
  ),
  React.createElement("div", { id: "child" }, 
  [
  React.createElement('h1', {id:'child1'}, 'i am 1st Child'),
  React.createElement('h3', {id:'child2'}, 'i am 2nd Child'),
  ]
  )
  ]
);
console.log(header);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
